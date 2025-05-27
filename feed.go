package main

import (
	"fmt"
	"net/http"
	"strings"
	"time"

	"github.com/gorilla/feeds"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
)

func initFeed(app *pocketbase.PocketBase) {
	app.OnServe().BindFunc(func(se *core.ServeEvent) error {
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

		return se.Next()
	})
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
