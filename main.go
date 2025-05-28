package main

import (
	"crypto/sha1"
	"database/sql"
	"encoding/hex"
	"errors"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	md "github.com/JohannesKaufmann/html-to-markdown"
	sqlite_vec "github.com/asg017/sqlite-vec-go-bindings/cgo"
	"github.com/mattn/go-sqlite3"
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/template"
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

	initAi(app)
	initFeed(app)
	initReactions(app)

	app.OnServe().BindFunc(func(se *core.ServeEvent) error {
		// se.Router.GET("/{path...}", apis.Static(os.DirFS("./pb_public"), false))
		se.Router.GET("/api/posts/{postId}/views", func(e *core.RequestEvent) error {
			postId := e.Request.PathValue("postId")
			col, err := app.FindCollectionByNameOrId("post_views")
			if err != nil {
				return apis.NewApiError(http.StatusInternalServerError, "Failed to find post_views collection", err)
			}

			postViewsRecords, err := app.FindAllRecords("post_views",
				dbx.NewExp("post_id = {:postId}",
					dbx.Params{"postId": postId},
				),
			)
			if err != nil && !strings.Contains(err.Error(), "no rows in result set") { // Allow "no rows" as we'll create it
				return apis.NewApiError(http.StatusInternalServerError, "Failed to query post_views", err)
			}

			views := 0
			var record *core.Record

			if len(postViewsRecords) == 0 {
				// create new post view entry
				record = core.NewRecord(col)
				record.Set("post_id", postId)
				views = 1
				record.Set("count", views)
			} else {
				record = postViewsRecords[0]
				viewCount := record.GetInt("count")
				views = viewCount + 1
				record.Set("count", views)
			}

			if err := app.Save(record); err != nil {
				return apis.NewApiError(http.StatusInternalServerError, "Failed to save post_views", err)
			}

			return e.JSON(http.StatusOK, map[string]any{
				"views": views,
			})
		})
		// START NEW ROUTE FOR MARKDOWN CONTENT
		se.Router.GET("/api/posts/{postId}/markdown", func(e *core.RequestEvent) error {
			postId := e.Request.PathValue("postId")
			record, err := app.FindRecordById("posts", postId)
			if err != nil {
				return apis.NewNotFoundError("Post not found.", err)
			}
			htmlContent := record.GetString("content") // This is the HTML content
			converter := md.NewConverter("", true, nil)
			markdownContent, err := converter.ConvertString(htmlContent)
			if err != nil {
				return apis.NewApiError(http.StatusInternalServerError, "Failed to convert HTML to Markdown", err)
			}
			// Return converted markdown content as JSON
			return e.JSON(http.StatusOK, map[string]any{"markdown": markdownContent})
		})
		// END NEW ROUTE
		se.Router.GET("/api/posts/{postId}/related", func(e *core.RequestEvent) error {
			postId := e.Request.PathValue("postId")
			record, err := app.FindRecordById("posts", postId)
			if err != nil {
				return apis.NewNotFoundError("Post not found.", err)
			}
			relatedFiltered := getRelatedPosts(app, record)
			return e.JSON(http.StatusOK, relatedFiltered)
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
				relatedFiltered := getRelatedPosts(app, record)

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
					"id":          record.Id,
					"title":       record.GetString("title"),
					"content":     record.GetString("content"),
					"image":       img,
					"description": record.GetString("description"),
					"url":         baseUrl + "/posts/" + slug,
					"tags":        tagJson,
					"emojis":      emojiTargets,
					"views":       views,
					"related":     relatedFiltered,
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
		se.Router.GET("/tags", func(e *core.RequestEvent) error {
			tagRecords := []*core.Record{}
			err := app.RecordQuery("tags").
				Select("id", "name").
				OrderBy("name ASC").
				All(&tagRecords)
			if err != nil {
				return err
			}
			tags := []map[string]any{}
			for _, t := range tagRecords {
				tags = append(tags, map[string]any{
					"id":   t.GetString("id"),
					"name": t.GetString("name"),
				})
			}
			tagsTemplate := template.NewRegistry().LoadFiles(
				"templates/base.html",
				"templates/tags.html",
			)
			html, err := tagsTemplate.Render(map[string]any{
				"title": "Tags",
				"tags":  tags,
			})
			if err != nil {
				return err
			}
			setCacheControl(e)
			return e.HTML(http.StatusOK, html)
		})
		se.Router.GET("/social", func(e *core.RequestEvent) error {
			socialLinks := []map[string]any{
				{"title": "GitHub", "link": "https://github.com/rodydavis", "icon": "github"},
				{"title": "Twitter", "link": "https://twitter.com/rodydavis", "icon": "twitter"},
				{"title": "Facebook", "link": "https://facebook.com/rodydavisjr", "icon": "facebook"},
				{"title": "Instagram", "link": "https://instagram.com/rodydavisjr", "icon": "instagram"},
				{"title": "LinkedIn", "link": "https://linkedin.com/in/rodydavis", "icon": "linkedin"},
				{"title": "YouTube", "link": "https://youtube.com/rodydavis", "icon": "youtube"},
				{"title": "TikTok", "link": "https://tiktok.com/@rodydavisjr", "icon": "tiktok"},
				{"title": "Bluesky", "link": "https://bsky.app/profile/rodydavis.com", "icon": "bluesky"},
			}
			socialTemplate := template.NewRegistry().LoadFiles(
				"templates/base.html",
				"templates/social.html",
			)
			html, err := socialTemplate.Render(map[string]any{
				"title":   "Social",
				"socials": socialLinks,
			})
			if err != nil {
				return err
			}
			setCacheControl(e)
			return e.HTML(http.StatusOK, html)
		})
		se.Router.GET("/{path...}", func(e *core.RequestEvent) error {
			slug := e.Request.PathValue("path")
			if slug == "" {
				// Render landing page (was previously GET / handler)
				// Fetch posts
				postRecords := []*core.Record{}
				err := app.RecordQuery("posts").
					Select("id", "title", "description", "tags", "slug", "updated", "date").
					Where(dbx.NewExp("draft = false")).
					OrderBy("updated DESC").
					All(&postRecords)
				if err != nil {
					return err
				}
				errMap := app.ExpandRecords(postRecords, []string{"tags"}, nil)
				if len(errMap) > 0 {
					return errors.New("failed to expand tags for posts")
				}
				posts := []map[string]any{}
				for _, item := range postRecords {
					tags := item.ExpandedAll("tags")
					tagItems := []map[string]any{}
					for _, t := range tags {
						tagItems = append(tagItems, map[string]any{
							"id":   t.GetString("id"),
							"name": t.GetString("name"),
						})
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

				// Fetch all tags
				tagRecords := []*core.Record{}
				err = app.RecordQuery("tags").
					Select("id", "name").
					OrderBy("name ASC").
					All(&tagRecords)
				if err != nil {
					return err
				}
				allTags := []map[string]any{}
				for _, t := range tagRecords {
					allTags = append(allTags, map[string]any{
						"id":   t.GetString("id"),
						"name": t.GetString("name"),
					})
				}

				// Fetch apps
				appRecords := []*core.Record{}
				err = app.RecordQuery("apps").
					Select("id", "name", "icon", "slug").
					OrderBy("updated DESC").
					All(&appRecords)
				if err != nil {
					return err
				}
				apps := []map[string]any{}
				for _, item := range appRecords {
					img := item.GetString("icon")
					if img != "" {
						img = "/api/files/apps/" + item.Id + "/" + img
					}
					export := item.PublicExport()
					export["app_icon"] = img
					export["link"] = "/apps/" + item.GetString("slug")
					apps = append(apps, export)
				}

				indexTemplate := template.NewRegistry().LoadFiles(
					"templates/base.html",
					"templates/index.html",
				)
				html, err := indexTemplate.Render(map[string]any{
					"title":    "Rody Davis - Developer, Advocate, Creator",
					"posts":    posts,
					"all_tags": allTags,
					"apps":     apps,
				})
				if err != nil {
					return err
				}
				setCacheControl(e)
				return e.HTML(http.StatusOK, html)
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
				// check if slug matches a nested post path (e.g. /sqlite/nosql)
				records, err = app.FindAllRecords("posts", dbx.NewExp("slug = {:slug}", dbx.Params{"slug": "/" + slug}))
				if err != nil {
					return err
				}
				if len(records) == 1 {
					// permanent redirect to /posts/slug (with nested path)
					return e.Redirect(http.StatusMovedPermanently, "/posts/"+slug)
				}
				// Redirect to home if not found
				return e.Redirect(http.StatusTemporaryRedirect, "/")
			}
			// Custom static file handler with ETag support
			filePath := filepath.Join("./pb_public", slug)
			fileInfo, err := os.Stat(filePath)
			if err != nil {
				if os.IsNotExist(err) {
					return apis.NewNotFoundError("File not found", err)
				}
				return apis.NewApiError(http.StatusInternalServerError, "Failed to get file info", err)
			}

			// Generate ETag based on file name, size and modification time
			etag := fmt.Sprintf("%s-%d-%d", fileInfo.Name(), fileInfo.Size(), fileInfo.ModTime().UnixNano())
			hasher := sha1.New()
			hasher.Write([]byte(etag))
			generatedETag := hex.EncodeToString(hasher.Sum(nil))

			// Check If-None-Match header
			if match := e.Request.Header.Get("If-None-Match"); match != "" {
				if strings.Contains(match, generatedETag) {
					e.Response.WriteHeader(http.StatusNotModified)
					return nil
				}
			}

			e.Response.Header().Set("ETag", generatedETag)
			setCacheControl(e)

			file, err := os.Open(filePath)
			if err != nil {
				return apis.NewApiError(http.StatusInternalServerError, "Failed to open file", err)
			}
			defer file.Close()

			// Set content type based on file extension
			contentType := "application/octet-stream" // Default content type
			switch filepath.Ext(filePath) {
			case ".html":
				contentType = "text/html; charset=utf-8"
			case ".css":
				contentType = "text/css; charset=utf-8"
			case ".js":
				contentType = "application/javascript; charset=utf-8"
			case ".json":
				contentType = "application/json; charset=utf-8"
			case ".png":
				contentType = "image/png"
			case ".jpg", ".jpeg":
				contentType = "image/jpeg"
			case ".gif":
				contentType = "image/gif"
			case ".svg":
				contentType = "image/svg+xml"
			case ".ico":
				contentType = "image/x-icon"
			}
			e.Response.Header().Set("Content-Type", contentType)

			_, err = io.Copy(e.Response, file)
			if err != nil {
				return apis.NewApiError(http.StatusInternalServerError, "Failed to serve file", err)
			}
			return nil
			// return apis.Static(os.DirFS("./pb_public"), false)(e)
		})

		return se.Next()
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}

func setCacheControl(e *core.RequestEvent) {
	// Cache control of 1 week with a 1 minute stale-while-revalidate
	e.Response.Header().Set("Cache-Control", "public, max-age=60, stale-while-revalidate=604800, stale-if-error=604800")
}
