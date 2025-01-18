package main

import (
	"errors"
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

	app.OnServe().BindFunc(func(se *core.ServeEvent) error {
		// se.Router.GET("/{path...}", apis.Static(os.DirFS("./pb_public"), false))
		se.Router.GET("/posts/{path...}", func(e *core.RequestEvent) error {
			slug := e.Request.PathValue("path")
			records, err := app.FindAllRecords("posts", dbx.NewExp("slug = {:slug}", dbx.Params{"slug": slug}))
			if err != nil {
				return err
			}
			if len(records) == 1 {
				blogTemplate := template.NewRegistry().LoadFiles(
					"templates/base.html",
					"templates/blog.html",
				)
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
				html, err := blogTemplate.Render(map[string]any{
					"title":       record.GetString("title"),
					"content":     record.GetString("content"),
					"image":       img,
					"description": record.GetString("description"),
					"url":         baseUrl + "/posts/" + slug,
					"tags":        tagJson,
				})
				if err != nil {
					return err
				}
				return e.HTML(http.StatusOK, html)
			}
			return e.NotFoundError("Post not found", errors.New("post not found"))
		})
		se.Router.GET("/posts", func(e *core.RequestEvent) error {
			template := template.NewRegistry().LoadFiles(
				"templates/base.html",
				"templates/posts.html",
			)
			records, err := app.FindAllRecords("posts",
				dbx.NewExp("draft = false"),
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
				export := item.PublicExport()
				export["tags_json"] = tagItems
				posts = append(posts, export)
			}
			html, err := template.Render(map[string]any{
				"title": "Posts",
				"posts": posts,
			})
			if err != nil {
				return err
			}
			return e.HTML(http.StatusOK, html)
		})
		se.Router.GET("/tags/{id}", func(e *core.RequestEvent) error {
			template := template.NewRegistry().LoadFiles(
				"templates/base.html",
				"templates/posts.html",
			)
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
				export := item.PublicExport()
				export["tags_json"] = tagItems
				posts = append(posts, export)
			}
			html, err := template.Render(map[string]any{
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
					pageTemplate := template.NewRegistry().LoadFiles(
						"templates/base.html",
						"templates/blog.html",
					)
					record := records[0]
					html, err := pageTemplate.Render(map[string]any{
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
