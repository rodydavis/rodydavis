---
title: Material 3 to Material 2 theme adapter
tags:
- css
- web
- material
- snippets
---

## Overview

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