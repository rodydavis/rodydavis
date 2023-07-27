package main

import (
	"log"
	"net/http"
	"os"

	"github.com/cbroglie/mustache"
	"github.com/labstack/echo/v5"
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
)

func main() {
	app := pocketbase.New()
	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.GET("/*", apis.StaticDirectoryHandler(os.DirFS("./pb_public"), false))

		e.Router.AddRoute(echo.Route{
			Method: http.MethodGet,
			Path:   "/",
			Handler: func(c echo.Context) error {
				records, err := app.Dao().FindRecordsByExpr("posts",
					dbx.HashExp{"draft": false},
				)
				if err != nil {
					return apis.NewNotFoundError("Error fetching posts.", err)
				}
				var posts = []map[string]interface{}{}
				for _, record := range records {
					posts = append(posts, record.PublicExport())
				}
				args := map[string]any{
					"posts": posts,
					"title": "Rody Davis",
				}
				result, err := mustache.RenderFileInLayout(
					"templates/index.html.mustache",
					"templates/layout.html.mustache",
					args,
				)
				if err != nil {
					return apis.NewBadRequestError("Error rendering article", err)
				}
				return c.HTML(http.StatusOK, result)
			},
		})

		e.Router.AddRoute(echo.Route{
			Method: http.MethodGet,
			Path:   "/posts/:slug",
			Handler: func(c echo.Context) error {
				slug := "/" + c.PathParam("slug")
				record, err := app.Dao().FindFirstRecordByData("posts", "slug", slug)
				if err != nil {
					return apis.NewNotFoundError("The article does not exist.", err)
				}
				apis.EnrichRecord(c, app.Dao(), record)
				args := record.PublicExport()
				result, err := mustache.RenderFileInLayout(
					"templates/article.html.mustache",
					"templates/layout.html.mustache",
					args,
				)
				if err != nil {
					return apis.NewBadRequestError("Error rendering article", err)
				}
				return c.HTML(http.StatusOK, result)
			},
		})

		return nil
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
