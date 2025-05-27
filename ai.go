package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"os"

	"github.com/google/generative-ai-go/genai"
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"google.golang.org/api/option"
)

func initAi(app *pocketbase.PocketBase) {
	app.OnServe().BindFunc(func(se *core.ServeEvent) error {
		type VecVersion struct {
			Version string `db:"version"`
		}
		vecVersion := VecVersion{}
		err := app.DB().NewQuery("select vec_version() as version").One(&vecVersion)
		if err != nil {
			return err
		}
		app.Logger().Info("vec_version=" + vecVersion.Version)

		app.OnRecordAfterCreateSuccess("posts").BindFunc(func(e *core.RecordEvent) error {
			post := e.Record
			err := updatePostMeta(app, post)
			if err != nil {
				app.Logger().Error(fmt.Sprintf("error saving post: %v", err))
			}
			return e.Next()
		})

		app.OnRecordAfterUpdateSuccess("posts").BindFunc(func(e *core.RecordEvent) error {
			post := e.Record
			err := updatePostMeta(app, post)
			if err != nil {
				app.Logger().Error(fmt.Sprintf("error saving post: %v", err))
			}
			return e.Next()
		})

		se.Router.POST("/check-posts-metadata", func(e *core.RequestEvent) error {
			count, total, err := updateAllPosts(app)
			if err != nil {
				return err
			}
			return e.JSON(http.StatusOK, map[string]any{
				"count": count,
				"total": total,
			})
		})

		err = initPosts(app)
		if err != nil {
			app.Logger().Error(fmt.Sprintf("error initializing posts: %v", err))
			return err
		}

		return se.Next()
	})
}

func initPosts(app *pocketbase.PocketBase) error {
	_, err := app.DB().NewQuery(`CREATE VIRTUAL TABLE IF NOT EXISTS vec_posts USING vec0(
		id TEXT PRIMARY KEY,
		embedding float[768]
	);`).Execute()
	if err != nil {
		app.Logger().Error(fmt.Sprintf("error creating vec_posts table: %v", err))
	}
	_, err = app.DB().NewQuery(`DELETE FROM vec_posts;`).Execute()
	if err != nil {
		app.Logger().Error(fmt.Sprintf("error deleting posts into vec_posts table: %v", err))
	}

	_, err = app.DB().NewQuery(`
	INSERT INTO vec_posts(id, embedding)
	SELECT id, embedding_values FROM posts
	WHERE embedding_values IS NOT NULL
	AND embedding_values != '';
	`).Execute()
	if err != nil {
		app.Logger().Error(fmt.Sprintf("error inserting posts into vec_posts table: %v", err))
	}

	go func() {
		posts := []*core.Record{}
		err := app.RecordQuery("posts").Where(dbx.NewExp("draft = false")).AndWhere(dbx.NewExp("embedding_values = ''")).All(&posts)
		if err != nil {
			app.Logger().Error(fmt.Sprintf("error finding posts: %v", err))
		} else {
			for idx, post := range posts {
				err := updatePostMeta(app, post)
				if err != nil {
					app.Logger().Error(fmt.Sprintf("error saving post: %v", err))
				} else {
					app.Logger().Info("saved post " + fmt.Sprint(idx+1) + "/" + fmt.Sprint(len(posts)))
				}
			}
		}
	}()

	return nil
}

func updateAllPosts(app *pocketbase.PocketBase) (int, int, error) {
	posts, err := app.FindAllRecords("posts")
	count := 0
	total := 0
	if err != nil {
		app.Logger().Error(fmt.Sprintf("error finding posts: %v", err))
		return count, total, err
	} else {
		total = len(posts)
		for idx, post := range posts {
			err := updatePostMeta(app, post)
			if err != nil {
				app.Logger().Error(fmt.Sprintf("error saving post: %v", err))
			} else {
				app.Logger().Info("saved post " + fmt.Sprint(idx+1) + "/" + fmt.Sprint(len(posts)))
				count++
			}
		}
	}
	return count, total, nil
}

func updatePostMeta(
	app *pocketbase.PocketBase,
	post *core.Record,
) error {
	ctx := context.Background()
	apiKey := os.Getenv("GOOGLE_AI_API_KEY")
	client, err := genai.NewClient(ctx, option.WithAPIKey(apiKey))
	if err != nil {
		return err
	}
	defer client.Close()
	em := client.EmbeddingModel("text-embedding-004")
	m := client.GenerativeModel("gemini-2.0-flash")
	needsSave := false
	force := false
	if post.GetString("description") == "" || force {
		desc, err := generateDescription(m, post.GetString("content"))
		if err != nil {
			app.Logger().Error(fmt.Sprintf("error generating description: %v", err))
		} else {
			post.Set("description", desc)
			needsSave = true
		}
	}
	if post.GetRaw("embedding_model") == "" || force {
		v, err := embedText(em, post.GetString("description"))
		if err != nil {
			app.Logger().Error(fmt.Sprintf("error generating description: %v", err))
		} else {
			vector := ""
			jsonVec, err := json.Marshal(v)
			if err != nil {
				vector = "[]"
			} else {
				vector = string(jsonVec)
			}
			post.Set("embedding_model", "text-embedding-004")
			post.Set("embedding_values", vector)
			needsSave = true

			// delete and insert vec_posts
			_, err = app.DB().NewQuery(`DELETE FROM vec_posts WHERE id = {:id};`).Bind(
				dbx.Params{"id": post.Id},
			).Execute()
			if err != nil {
				app.Logger().Error(fmt.Sprintf("error deleting post from vec_posts table: %v", err))
			}
			_, err = app.DB().NewQuery(`INSERT INTO vec_posts(id, embedding) VALUES ({:id}, {:embedding});`).Bind(
				dbx.Params{"id": post.Id, "embedding": vector},
			).Execute()
			if err != nil {
				app.Logger().Error(fmt.Sprintf("error inserting post into vec_posts table: %v", err))
			}
		}
	}
	if needsSave {
		err := app.UnsafeWithoutHooks().Save(post)
		if err != nil {
			return err
		}
	}
	return nil
}

func embedText(m *genai.EmbeddingModel, text string) ([]float32, error) {
	ctx := context.Background()
	res, err := m.EmbedContent(ctx, genai.Text(text))
	if err != nil {
		return nil, err
	}
	values := res.Embedding.Values
	// v, err := sqlite_vec.SerializeFloat32(values)
	// if err != nil {
	// 	return nil, err
	// }
	return values, nil
}

func generateDescription(m *genai.GenerativeModel, text string) (string, error) {
	prompt := "Create a short 1 sentence description for a blog post about the following: " + text
	ctx := context.Background()
	res, err := m.GenerateContent(ctx, genai.Text(prompt))
	if err != nil {
		return "", err
	}
	if len(res.Candidates) == 0 {
		return "", errors.New("no candidates found")
	}
	parts := res.Candidates[0].Content.Parts
	if len(parts) == 0 {
		return "", errors.New("no parts found")
	}
	part, ok := parts[0].(genai.Text)
	if !ok {
		return "", errors.New("part is not text")
	}
	return string(part), nil

}

type Related struct {
	Id    string `db:"id" json:"id"`
	Title string `db:"title" json:"title"`
	Slug  string `db:"slug" json:"slug"`
	Url   string `json:"url"`
}

func getRelatedPosts(app *pocketbase.PocketBase, record *core.Record) []Related {
	// Vector support
	embedding := record.GetString("embedding_values")
	related := []Related{}
	relatedFiltered := []Related{}
	if embedding != "" {
		err := app.DB().Select(
			"vec_posts.id as id",
			"vec_posts.embedding as embedding",
			"posts.title as title",
			"posts.description as description",
			"posts.slug as slug",
		).
			From("vec_posts").
			InnerJoin("posts", dbx.NewExp("vec_posts.id = posts.id")).
			Where(dbx.NewExp("embedding match {:v}", dbx.Params{
				"v": embedding,
			})).
			AndWhere(dbx.NewExp("k = 6")).
			// AndWhere(dbx.NewExp("id != {:id}", dbx.Params{
			// 	"id": record.Id,
			// })).
			OrderBy("distance").
			All(&related)
		if err != nil {
			app.Logger().Error(fmt.Sprintf("error finding related posts: %v", err))
		} else {
			app.Logger().Info("found related posts: " + fmt.Sprint(len(related)))
		}
		for i, item := range related {
			if item.Id == record.Id {
				continue
			}
			related[i].Url = "/posts/" + item.Slug
			relatedFiltered = append(relatedFiltered, related[i])
		}
	}
	return relatedFiltered
}
