package main

import (
	"errors"
	"io"
	"log"
	"net/http"
	"os"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/template"
)

func main() {
	app := pocketbase.New()
	baseUrl := "https://rodydavis.dev"

	type Reaction struct {
		Emoji  string
		Alt    string
		Target string
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
		// se.Router.GET("/{path...}", apis.Static(os.DirFS("./pb_public"), false))
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

				img := record.GetString("image")
				if img != "" {
					img = "/api/media/" + record.Id + "/" + img
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
				})
				if err != nil {
					return err
				}
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
			return e.HTML(http.StatusOK, html)
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
			return e.HTML(http.StatusOK, html)
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
					return e.HTML(http.StatusOK, html)
				}
				return e.NotFoundError("Page not found", errors.New("page not found"))
			}
			return apis.Static(os.DirFS("./pb_public"), false)(e)
		})

		return se.Next()
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
