---
title: Material 3 to Material 2 Theme Adapter
date: '2025-01-19 05:46:33.142Z'
draft: false
tags:
  - css
summary: >-
  This guide provides a CSS adapter to style Material 2 components using the
  modern color variables defined by Material 3.
related:
  - lit/codemirror-dynamic-theme.md
  - videos/flutter/material-3-from-design-to-deployment.mdx
  - flutter/snippets/markdown-view-material-3.md
  - videos/flutter/material-you-applying-dynamic-color-to-your-app-and-brand.mdx
  - web/file-based-routing.md
last_updated_metadata: '2026-11-01T09:41:36.923Z'
---

# Material 3 to Material 2 Theme Adapter

Overview 
---------

How to style Material 2 components with Material 3 in CSS:

```css
:root {
  --mdc-theme-primary: var(--md-sys-color-primary);
  --mdc-theme-on-primary: var(--md-sys--coloron-primary);
  --mdc-theme-background: var(--md-sys--colorbackground);
  --mdc-theme-on-background: var(--md-sys--coloron-background);
  --mdc-theme-on-surface-variant: var(--md-sys--coloron-surface-variant);
  --mdc-theme-surface-variant: var(--md-sys--colorsurface-variant);
  --mdc-theme-on-surface: var(--md-sys--coloron-surface);
  --mdc-theme-surface: var(--md-sys--colorsurface);
  --mdc-theme-text-primary-on-background: var(--md-sys--coloron-surface-variant);
  --mdc-theme-outline: var(--md-sys-color-outline);
}
```
