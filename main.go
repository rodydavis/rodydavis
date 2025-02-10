package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
	"time"

	sqlite_vec "github.com/asg017/sqlite-vec-go-bindings/cgo"
	"github.com/google/generative-ai-go/genai"
	"github.com/gorilla/feeds"
	"github.com/mattn/go-sqlite3"
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/template"
	"google.golang.org/api/option"
)

// register a new driver with default PRAGMAs and the same query
// builder implementation as the already existing sqlite3 builder
func init() {
	sql.Register("pb_sqlite3",
		&sqlite3.SQLiteDriver{
			Extensions: []string{
				// "your_extension", // <-- must refer to a so/dll library
			},
			ConnectHook: func(conn *sqlite3.SQLiteConn) error {
				_, err := conn.Exec(`
                    PRAGMA busy_timeout       = 10000;
                    PRAGMA journal_mode       = WAL;
                    PRAGMA journal_size_limit = 200000000;
                    PRAGMA synchronous        = NORMAL;
                    PRAGMA foreign_keys       = ON;
                    PRAGMA temp_store         = MEMORY;
                    PRAGMA cache_size         = -16000;
                `, nil)

				return err
			},
		},
	)

	dbx.BuilderFuncMap["pb_sqlite3"] = dbx.BuilderFuncMap["sqlite3"]
}

func main() {
	sqlite_vec.Auto()

	// app := pocketbase.New()
	app := pocketbase.NewWithConfig(pocketbase.Config{
		DBConnect: func(dbPath string) (*dbx.DB, error) {
			return dbx.Open("pb_sqlite3", dbPath)
		},
	})
	baseUrl := "https://rodydavis.com"

	type Reaction struct {
		Emoji  string
		Alt    string
		Target string
	}

	type DownloadLink struct {
		Name string
		Link string
	}

	postsTemplate := template.NewRegistry().LoadFiles(
		"templates/base.html",
		"templates/posts.html",
	)

	blogTemplate := template.NewRegistry().LoadFiles(
		"templates/base.html",
		"templates/blog.html",
	)

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

		ctx := context.Background()
		apiKey := os.Getenv("GOOGLE_AI_API_KEY")
		client, err := genai.NewClient(ctx, option.WithAPIKey(apiKey))
		if err != nil {
			return err
		}
		defer client.Close()
		em := client.EmbeddingModel("text-embedding-004")
		m := client.GenerativeModel("gemini-2.0-flash")
		// res, err := em.EmbedContent(ctx, genai.Text("What is the meaning of life?"))

		// desc, err := generateDescription(m, "What is the meaning of life?")
		// if err != nil {
		// 	return err
		// }
		// fmt.Println(desc)

		// if err != nil {
		// 	panic(err)
		// }
		// fmt.Println(res.Embedding.Values)

		// se.Router.GET("/{path...}", apis.Static(os.DirFS("./pb_public"), false))
		se.Router.GET("/feed", func(e *core.RequestEvent) error {
			return e.Redirect(http.StatusMovedPermanently, "/feed.rss")
		})
		se.Router.GET("/feed.xml", func(e *core.RequestEvent) error {
			return e.Redirect(http.StatusMovedPermanently, "/feed.rss")
		})
		se.Router.GET("/feed.rss", func(e *core.RequestEvent) error {
			feed, err := generateFeed(app)
			if err != nil {
				return err
			}
			rss, err := feed.ToRss()
			if err != nil {
				return err
			}
			setCacheControl(e)
			e.Response.Header().Set("Content-Type", "text/xml;charset=UTF-8")
			return e.String(http.StatusOK, rss)
		})
		se.Router.GET("/feed.atom", func(e *core.RequestEvent) error {
			feed, err := generateFeed(app)
			if err != nil {
				return err
			}
			rss, err := feed.ToAtom()
			if err != nil {
				return err
			}
			setCacheControl(e)
			e.Response.Header().Set("Content-Type", "text/xml;charset=UTF-8")
			return e.String(http.StatusOK, rss)
		})
		se.Router.POST("/api/posts/{postId}/reactions", func(e *core.RequestEvent) error {
			postId := e.Request.PathValue("postId")
			body, err := io.ReadAll(e.Request.Body)
			if err != nil {
				return err
			}
			reaction, err := app.FindFirstRecordByFilter("reactions", "value = {:value}", dbx.Params{"value": string(body)})
			if err != nil {
				return err
			}
			_, err = app.FindRecordById("posts", postId)
			if err != nil {
				return err
			}
			postReactionRecords, err := app.FindAllRecords("post_reactions",
				dbx.NewExp("post_id = {:postId} AND reaction_id = {:reactionId}",
					dbx.Params{"postId": postId, "reactionId": reaction.Id},
				),
			)
			if err != nil {
				return err
			}
			col, err := app.FindCollectionByNameOrId("post_reactions")
			if err != nil {
				return err
			}
			count := 0
			if len(postReactionRecords) == 0 {
				// create new post reaction
				record := core.NewRecord(col)
				record.Set("post_id", postId)
				record.Set("reaction_id", reaction.Id)
				record.Set("count", 1)
				count = 1
				err = app.Save(record)
				if err != nil {
					return err
				}
			} else {
				record := postReactionRecords[0]
				count = record.GetInt("count")
				record.Set("count", count+1)
				err = app.Save(record)
				if err != nil {
					return err
				}
			}
			return e.JSON(http.StatusOK, map[string]any{
				reaction.GetString("value"): count,
			})
		})
		se.Router.GET("/api/posts/{postId}/reactions", func(e *core.RequestEvent) error {
			postId := e.Request.PathValue("postId")
			type ReactionCount struct {
				Emoji string `json:"emoji"`
				Count int    `json:"count"`
			}
			postReactionRecords, err := app.FindAllRecords("post_reactions",
				dbx.NewExp("post_id = {:postId}", dbx.Params{"postId": postId}),
			)
			if err != nil {
				return err
			}
			errs := app.ExpandRecords(postReactionRecords, []string{"reaction_id"}, nil)
			if len(errs) > 0 {
				return err
			}

			counts := []ReactionCount{}
			for _, record := range postReactionRecords {
				count := record.GetInt("count")
				emoji := record.ExpandedOne("reaction_id")
				counts = append(counts, ReactionCount{
					Emoji: emoji.GetString("value"),
					Count: count,
				})
			}
			reactionJson := map[string]any{}
			for _, count := range counts {
				reactionJson[count.Emoji] = count.Count
			}
			return e.JSON(http.StatusOK, reactionJson)
		})
		se.Router.GET("/posts/{path...}", func(e *core.RequestEvent) error {
			slug := e.Request.PathValue("path")
			records := []*core.Record{}
			err := app.RecordQuery("posts").
				Where(dbx.NewExp("slug = {:slug}", dbx.Params{"slug": slug})).
				AndWhere(dbx.NewExp("draft = false")).
				OrderBy("updated DESC").
				All(&records)
			if err != nil {
				return err
			}
			if len(records) == 1 {
				record := records[0]
				errs := app.ExpandRecord(record, []string{"tags"}, nil)
				if len(errs) > 0 {
					return err
				}

				embedding := record.GetString("embedding_values")
				related := []struct {
					Id    string `db:"id" json:"id"`
					Title string `db:"title" json:"title"`
					Slug  string `db:"slug" json:"slug"`
					Url   string `json:"url"`
				}{}
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
						AndWhere(dbx.NewExp("k = 5")).
						OrderBy("distance").
						All(&related)
					if err != nil {
						app.Logger().Error(fmt.Sprintf("error finding related posts: %v", err))
					} else {
						app.Logger().Info("found related posts: " + fmt.Sprint(len(related)))
					}
					for i, item := range related {
						related[i].Url = "/posts/" + item.Slug
					}
				}

				img := record.GetString("image")
				if img != "" {
					img = "/api/files/posts/" + record.Id + "/" + img
				}
				tags := record.ExpandedAll("tags")
				tagJson := []map[string]any{}
				for _, tag := range tags {
					tagJson = append(tagJson, map[string]any{
						"name": tag.GetString("name"),
						"id":   tag.Id,
					})
				}
				emojiTargets := []Reaction{}
				reactions, err := app.FindAllRecords("reactions")
				if err != nil {
					return err
				}
				for _, reaction := range reactions {
					emojiTargets = append(emojiTargets, Reaction{
						Emoji:  reaction.GetString("value"),
						Alt:    reaction.GetString("alt"),
						Target: "/api/posts/" + record.Id + "/reactions",
					})
				}

				col, err := app.FindCollectionByNameOrId("post_views")
				if err != nil {
					return err
				}

				postViewsRecords, err := app.FindAllRecords("post_views",
					dbx.NewExp("post_id = {:postId}",
						dbx.Params{"postId": record.Id},
					),
				)
				if err != nil {
					return err
				}

				views := 0
				if len(postViewsRecords) == 0 {
					// create new post reaction
					r := core.NewRecord(col)
					r.Set("post_id", record.Id)
					views = 1
					r.Set("count", views)
					err = app.Save(r)
					if err != nil {
						return err
					}
				} else {
					r := postViewsRecords[0]
					viewCount := r.GetInt("count")
					views = viewCount + 1
					r.Set("count", views)
					err = app.Save(r)
					if err != nil {
						return err
					}
				}

				html, err := blogTemplate.Render(map[string]any{
					"title":       record.GetString("title"),
					"content":     record.GetString("content"),
					"image":       img,
					"description": record.GetString("description"),
					"url":         baseUrl + "/posts/" + slug,
					"tags":        tagJson,
					"emojis":      emojiTargets,
					"views":       views,
					"related":     related,
				})
				if err != nil {
					return err
				}
				setCacheControl(e)
				return e.HTML(http.StatusOK, html)
			}
			return e.NotFoundError("Post not found", errors.New("post not found"))
		})
		se.Router.GET("/posts", func(e *core.RequestEvent) error {
			records := []*core.Record{}
			err := app.RecordQuery("posts").
				Select("id", "title", "description", "tags", "slug", "updated", "date").
				Where(dbx.NewExp("draft = false")).
				OrderBy("updated DESC").
				All(&records)
			if err != nil {
				return err
			}
			errs := app.ExpandRecords(records, []string{"tags"}, nil)
			if len(errs) > 0 {
				return err
			}
			posts := []map[string]any{}
			for _, item := range records {
				tags := item.ExpandedAll("tags")
				tagItems := []map[string]any{}
				for _, t := range tags {
					result := t.PublicExport()
					tagItems = append(tagItems, result)
				}
				date := item.GetString("date")
				if date == "" {
					date = item.GetString("updated")
				}
				export := item.PublicExport()
				export["tags_json"] = tagItems
				export["date"] = date
				posts = append(posts, export)
			}
			html, err := postsTemplate.Render(map[string]any{
				"title": "Posts",
				"posts": posts,
			})
			if err != nil {
				return err
			}
			setCacheControl(e)
			return e.HTML(http.StatusOK, html)
		})
		se.Router.GET("/apps", func(e *core.RequestEvent) error {
			records := []*core.Record{}
			err := app.RecordQuery("apps").
				Select("id", "name", "description", "icon", "slug", "updated").
				OrderBy("updated DESC").
				All(&records)
			if err != nil {
				return err
			}
			apps := []map[string]any{}
			for _, item := range records {
				img := item.GetString("icon")
				if img != "" {
					img = "/api/files/apps/" + item.Id + "/" + img
				}
				export := item.PublicExport()
				export["app_icon"] = img
				export["link"] = "/apps/" + item.GetString("slug")
				apps = append(apps, export)
			}
			apsTemplate := template.NewRegistry().LoadFiles(
				"templates/base.html",
				"templates/apps.html",
			)
			html, err := apsTemplate.Render(map[string]any{
				"title": "Apps",
				"apps":  apps,
			})
			if err != nil {
				return err
			}
			setCacheControl(e)
			return e.HTML(http.StatusOK, html)
		})
		se.Router.GET("/apps/{path...}", func(e *core.RequestEvent) error {
			slug := e.Request.PathValue("path")
			records := []*core.Record{}
			err := app.RecordQuery("apps").
				Where(dbx.NewExp("slug = {:slug}", dbx.Params{"slug": slug})).
				OrderBy("updated DESC").
				All(&records)
			if err != nil {
				return err
			}
			if len(records) == 1 {
				record := records[0]
				img := record.GetString("icon")
				if img != "" {
					img = "/api/files/apps/" + record.Id + "/" + img
				}
				screenshots := record.GetStringSlice("screenshots")
				for i, screenshot := range screenshots {
					screenshots[i] = "/api/files/apps/" + record.Id + "/" + screenshot
				}

				webApp := record.GetString("web_app")
				appStore := record.GetString("app_store")
				playStore := record.GetString("play_store")
				windowsStore := record.GetString("windows_store")
				sourceCode := record.GetString("source_code")
				downloadLinks := []DownloadLink{}
				if webApp != "" {
					downloadLinks = append(downloadLinks, DownloadLink{
						Name: "Web App",
						Link: webApp,
					})
				}
				if appStore != "" {
					downloadLinks = append(downloadLinks, DownloadLink{
						Name: "App Store",
						Link: appStore,
					})
				}
				if playStore != "" {
					downloadLinks = append(downloadLinks, DownloadLink{
						Name: "Play Store",
						Link: playStore,
					})
				}
				if windowsStore != "" {
					downloadLinks = append(downloadLinks, DownloadLink{
						Name: "Windows Store",
						Link: windowsStore,
					})
				}
				if sourceCode != "" {
					downloadLinks = append(downloadLinks, DownloadLink{
						Name: "Source Code",
						Link: sourceCode,
					})
				}

				appTemplate := template.NewRegistry().LoadFiles(
					"templates/base.html",
					"templates/app.html",
				)
				html, err := appTemplate.Render(map[string]any{
					"title":         record.GetString("name"),
					"description":   record.GetString("description"),
					"content":       record.GetString("content"),
					"image":         img,
					"screenshots":   screenshots,
					"web_app":       webApp,
					"app_store":     appStore,
					"play_store":    playStore,
					"windows_store": windowsStore,
					"source_code":   sourceCode,
					"downloads":     downloadLinks,
					"url":           baseUrl + "/apps/" + slug,
				})
				if err != nil {
					return err
				}
				setCacheControl(e)
				return e.HTML(http.StatusOK, html)
			}
			return e.NotFoundError("Post not found", errors.New("post not found"))
		})
		se.Router.GET("/tags/{id}", func(e *core.RequestEvent) error {
			tag := e.Request.PathValue("id")
			tagRecord, err := app.FindRecordById("tags", tag)
			if err != nil {
				return err
			}
			// records, err := app.FindAllRecords("posts",
			// 	dbx.NewExp("tags = {:tag}", dbx.Params{"tag": tag}),
			// 	// dbx.In("tags", tag),
			// )
			// records := []*core.Record{}

			// err = app.RecordQuery("posts").
			// 	Where(dbx.In("tags", tag)).
			// 	All(&records)

			records, err := app.FindRecordsByFilter(
				"posts",
				"tags ~ {:tag}",
				"-title",
				1000,
				0,
				dbx.Params{"tag": tag},
			)
			if err != nil {
				return err
			}
			errs := app.ExpandRecords(records, []string{"tags"}, nil)
			if len(errs) > 0 {
				return err
			}
			posts := []map[string]any{}
			for _, item := range records {
				tags := item.ExpandedAll("tags")
				tagItems := []map[string]any{}
				for _, t := range tags {
					result := t.PublicExport()
					tagItems = append(tagItems, result)
				}
				date := item.GetString("date")
				if date == "" {
					date = item.GetString("updated")
				}
				export := item.PublicExport()
				export["tags_json"] = tagItems
				export["date"] = date
				posts = append(posts, export)
			}
			html, err := postsTemplate.Render(map[string]any{
				"title": tagRecord.GetString("name"),
				"posts": posts,
			})
			if err != nil {
				return err
			}
			setCacheControl(e)
			return e.HTML(http.StatusOK, html)
		})

		se.Router.POST("/check-posts-metadata", func(e *core.RequestEvent) error {
			posts, err := app.FindAllRecords("posts")
			count := 0
			total := 0
			if err != nil {
				app.Logger().Error(fmt.Sprintf("error finding posts: %v", err))
			} else {
				total = len(posts)
				for idx, post := range posts {
					err := updatePostMeta(app, m, em, post)
					if err != nil {
						app.Logger().Error(fmt.Sprintf("error saving post: %v", err))
					} else {
						app.Logger().Info("saved post " + fmt.Sprint(idx+1) + "/" + fmt.Sprint(len(posts)))
						count++
					}
				}
			}
			return e.JSON(http.StatusOK, map[string]any{
				"count": count,
				"total": total,
			})
		})

		se.Router.GET("/{path...}", func(e *core.RequestEvent) error {
			slug := e.Request.PathValue("path")
			if slug == "" {
				return e.Redirect(http.StatusTemporaryRedirect, "/posts")
			}
			_, err := os.Stat("./pb_public/" + slug)
			if err != nil {
				// check for match on slug in pages collection
				records, err := app.FindAllRecords("pages", dbx.NewExp("slug = {:slug}", dbx.Params{"slug": slug}))
				if err != nil {
					return err
				}
				if len(records) == 1 {
					record := records[0]
					html, err := blogTemplate.Render(map[string]any{
						"title":   record.GetString("title"),
						"content": record.GetString("content"),
					})
					if err != nil {
						return err
					}
					setCacheControl(e)
					return e.HTML(http.StatusOK, html)
				}
				// check posts
				records, err = app.FindAllRecords("posts", dbx.NewExp("slug = {:slug}", dbx.Params{"slug": slug}))
				if err != nil {
					return err
				}
				if len(records) == 1 {
					// permanent redirect to /posts/slug
					return e.Redirect(http.StatusMovedPermanently, "/posts/"+slug)
				}
				return e.NotFoundError("Not found", errors.New("route not found"))
			}
			setCacheControl(e)
			return apis.Static(os.DirFS("./pb_public"), false)(e)
		})

		// Create embeddings table
		// create virtual table vec_movies using vec0(
		//   synopsis_embedding float[768]
		// );
		_, err = app.DB().NewQuery(`CREATE VIRTUAL TABLE IF NOT EXISTS vec_posts USING vec0(
			id TEXT PRIMARY KEY,
			embedding float[768]
		);`).Execute()
		if err != nil {
			app.Logger().Error(fmt.Sprintf("error creating vec_posts table: %v", err))
		}

		// Insert current posts into embeddings table
		// INSERT INTO vec_posts(id, embedding) SELECT id, embedding FROM posts;
		_, err = app.DB().NewQuery(`INSERT INTO vec_posts(id, embedding) SELECT id, embedding_values FROM posts;`).Execute()
		if err != nil {
			app.Logger().Error(fmt.Sprintf("error inserting posts into vec_posts table: %v", err))
		}

		app.OnRecordAfterCreateSuccess("posts").BindFunc(func(e *core.RecordEvent) error {
			post := e.Record
			err := updatePostMeta(app, m, em, post)
			if err != nil {
				app.Logger().Error(fmt.Sprintf("error saving post: %v", err))
			}
			return e.Next()
		})

		app.OnRecordAfterUpdateSuccess("posts").BindFunc(func(e *core.RecordEvent) error {
			post := e.Record
			err := updatePostMeta(app, m, em, post)
			if err != nil {
				app.Logger().Error(fmt.Sprintf("error saving post: %v", err))
			}
			return e.Next()
		})

		return se.Next()
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}

func updatePostMeta(
	app *pocketbase.PocketBase,
	m *genai.GenerativeModel,
	em *genai.EmbeddingModel,
	post *core.Record,
) error {
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

func setCacheControl(e *core.RequestEvent) {
	// Cache control of 1 week with a 1 minute stale-while-revalidate
	e.Response.Header().Set("Cache-Control", "public, max-age=60, stale-while-revalidate=604800, stale-if-error=604800")
}

func generateFeed(app *pocketbase.PocketBase) (*feeds.Feed, error) {
	now := time.Now()
	year := now.Year()

	author := feeds.Author{
		Name:  "Rody Davis",
		Email: "rody.davis.jr@gmail.com",
	}

	feed := &feeds.Feed{
		Id:          "https://rodydavis.com",
		Title:       "Rody Davis",
		Link:        &feeds.Link{Href: "https://rodydavis.com/posts"},
		Image:       &feeds.Image{Url: "https://rodydavis.com/media/banner.jpeg", Title: "Rody Davis", Link: "https://rodydavis.com"},
		Description: "music, photos, food, and code",
		Author:      &author,
		Created:     now,
		Copyright:   "All rights reserved " + fmt.Sprint(year) + ", Rody Davis",
	}

	posts, err := app.FindRecordsByFilter(
		"posts",
		"draft = false",
		"-updated",
		1000,
		0,
		nil,
	)
	if err != nil {
		return nil, err
	}

	feed.Items = []*feeds.Item{}
	for _, post := range posts {
		html := post.GetString("content")

		// Replace all src="/_/../ with src="https://rodydavis.com/_/../
		html = strings.ReplaceAll(html, `src="/_/../`, `src="https://rodydavis.com/_/../`)
		target := "https://rodydavis.com/posts/" + post.GetString("slug")

		item := feeds.Item{
			Title:       post.GetString("title"),
			Link:        &feeds.Link{Href: target},
			Description: post.GetString("description"),
			Author:      &author,
			Created:     post.GetDateTime("updated").Time(),
			Id:          target,
			Content:     html,
			Source:      &feeds.Link{Href: target},
		}
		img := post.GetString("image")
		if img != "" {
			item.Enclosure = &feeds.Enclosure{Url: "https://rodydavis.com/api/files/posts/" + post.Id + "/" + img}
		}
		feed.Items = append(feed.Items, &item)
	}

	return feed, nil
}
