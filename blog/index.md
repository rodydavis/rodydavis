---
layout: layouts/base.njk
title: Blog
templateClass: tmpl-post
eleventyNavigation:
  key: Blog
  order: 5
---

<div id="posts">
  <h2>Posts</h2>
  {% set postslist = collections.posts %}
  {% include "postslist.njk" %}
</div>
