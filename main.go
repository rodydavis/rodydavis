package main

import (
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

	app.OnServe().BindFunc(func(se *core.ServeEvent) error {
		se.Router.GET("/{path...}", func(e *core.RequestEvent) error {
			slug := e.Request.PathValue("path")
			if slug != "" {
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
					if err != nil {
						return err
					}
					html, err := blogTemplate.Render(map[string]any{
						"title":   record.GetString("title"),
						"content": record.GetString("content"),
					})
					if err != nil {
						return err
					}
					return e.HTML(http.StatusOK, html)
				}
			}
			return apis.Static(os.DirFS("./pb_public"), false)(e)
		})

		se.Router.GET("/posts", func(e *core.RequestEvent) error {
			blogTemplate := template.NewRegistry().LoadFiles(
				"templates/base.html",
				"templates/cards.html",
			)
			records, err := app.FindAllRecords("posts")
			if err != nil {
				return err
			}
			links := []map[string]any{}
			for _, item := range records {
				links = append(links, map[string]any{
					"link": "/" + item.GetString("slug"),
					"name": item.GetString("title"),
				})
			}
			html, err := blogTemplate.Render(map[string]any{
				"title": "Rody Davis",
				"links": links,
			})
			if err != nil {
				return err
			}
			return e.HTML(http.StatusOK, html)
		})

		// se.Router.GET("/posts/{slug...}", func(e *core.RequestEvent) error {
		// 	slug := e.Request.PathValue("slug")

		// 	if slug == "" {
		// 		return e.Redirect(302, "/posts")
		// 	}

		// 	blogTemplate := template.NewRegistry().LoadFiles(
		// 		"templates/base.html",
		// 		"templates/blog.html",
		// 	)
		// 	record, err := app.FindFirstRecordByData("posts", "slug", slug)
		// 	// if record == nil {
		// 	// }
		// 	// app.Logger().Info("found: " + fmt.Sprint(record == nil))
		// 	if err != nil {
		// 		return err
		// 	}
		// 	html, err := blogTemplate.Render(map[string]any{
		// 		"title":   record.GetString("title"),
		// 		"content": record.GetString("content"),
		// 	})
		// 	if err != nil {
		// 		return err
		// 	}
		// 	return e.HTML(http.StatusOK, html)
		// })

		return se.Next()
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
