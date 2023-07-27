package main

import (
	"log"
	"net/http"

	"github.com/cbroglie/mustache"
	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
)

func main() {
	app := pocketbase.New()

	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.AddRoute(echo.Route{
			Method: http.MethodGet,
			Path:   "/hello",
			Handler: func(c echo.Context) error {
				return c.String(http.StatusOK, "Hello world!")
			},
			Middlewares: []echo.MiddlewareFunc{
				apis.ActivityLogger(app),
				apis.RequireAdminAuth(),
			},
		})

		e.Router.AddRoute(echo.Route{
			Method: http.MethodGet,
			Path:   "/",
			Handler: func(c echo.Context) error {
				args := map[string]string{"title": "Rody Davis"}
				result, err := mustache.RenderFileInLayout(
					"templates/article.html.mustache",
					"templates/layout.html.mustache",
					args,
				)
				if err != nil {
					return c.String(http.StatusInternalServerError, "")
				} else {
					return c.HTML(http.StatusOK, result)
				}
			},
		})

		return nil
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
