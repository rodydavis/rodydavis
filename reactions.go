package main

import (
	"io"
	"net/http"
	"strings"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
)

func initReactions(app *pocketbase.PocketBase) {
	app.OnServe().BindFunc(func(se *core.ServeEvent) error {
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
				return e.JSON(http.StatusOK, map[string]any{})
			}
			errMap := app.ExpandRecords(postReactionRecords, []string{"reaction_id"}, nil)
			if len(errMap) > 0 {
				return e.JSON(http.StatusOK, map[string]any{})
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
		se.Router.GET("/api/available-reactions", func(e *core.RequestEvent) error {
			type AvailableReaction struct {
				Emoji string `json:"emoji"`
				Alt   string `json:"alt"`
			}
			availableReactions := []AvailableReaction{}
			reactions, err := app.FindAllRecords("reactions")
			if err != nil {
				// If the "reactions" collection doesn't exist or is empty, return an empty list.
				// This is not an error for the client, just means no reactions are configured.
				if strings.Contains(err.Error(), "no rows in result set") || strings.Contains(err.Error(), "collection not found") {
					return e.JSON(http.StatusOK, availableReactions)
				}
				return apis.NewApiError(http.StatusInternalServerError, "Failed to fetch available reactions", err)
			}
			for _, reaction := range reactions {
				availableReactions = append(availableReactions, AvailableReaction{
					Emoji: reaction.GetString("value"),
					Alt:   reaction.GetString("alt"),
				})
			}
			// Consider adding cache control if this data doesn't change often
			// setCacheControl(e)
			return e.JSON(http.StatusOK, availableReactions)
		})

		return se.Next()
	})
}
