# About my site

This site is built with Snowpack, LitElement and some clever scripts. I wanted to be able to write my blog posts in markdown while still being able to leverage typescript and modules.

- Markdown
- Typescript
- Snowpack
- RSS Feed
- Web Stories
- Static Site

## Markdown

All the markdown files live in the `assets` folder and you can create any folder structure to match the urls.

Running `npm run copy` will copy the the markdown files to the `public` folder and transpiling to html. If there is a layout: 'story' it will convert to a [web story](https://stories.google).

After the build process it will generate a RSS feed for each blog post. 

## Static Files

Any static files that are compatible are to be up in the `public` folder and it will be copied on the build process.