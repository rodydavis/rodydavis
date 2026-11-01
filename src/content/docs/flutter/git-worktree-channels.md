---
title: How to Manage Multiple Flutter Versions with Git Worktrees and ZSH
date: '2025-01-19 02:32:18.215Z'
draft: false
tags:
  - flutter
  - dart
  - github
summary: >-
  Manage multiple Flutter SDK versions by using Git worktrees to create isolated
  directories for different channels (stable, beta, master), and ZSH aliases for
  streamlined command-line access.
embedding: >-
  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
related:
  - flutter/automation.md
  - flutter/ssr-rfw.md
  - flutter/multi-touch-canvas.md
  - flutter/web-deep-linking.md
  - flutter/fastlane.md
last_updated_metadata: '2026-11-01T02:28:37.801Z'
---

# How to Manage Multiple Flutter Versions with Git Worktrees and ZSH

If you have been using [Flutter](https://flutter.dev/) for any length of time then you probably have needed to use multiple flutter versions across multiple projects.

In the past I used to use [FVM](https://fvm.app/) (Flutter Version Management) which is similar to [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager) in the JS world.

I wanted a solution that only relied on [Git](https://git-scm.com/), and started using [worktrees](https://git-scm.com/docs/git-worktree) to manage the Flutter channels.

Download the SDK 
-----------------

Check out the flutter repo in a known directory, in this case I will download it to `~/Developer/`:

```markdown
git clone https://github.com/flutter/flutter ~/Developer/flutter
```

Add Flutter Channels 
---------------------

Now we can add the branches we want to track:

```markdown
cd ~/Developer/flutter
git checkout origin/dev
git worktree add ../flutter-stable stable
git worktree add ../flutter-beta beta
git worktree add ../flutter-master master
```

We need to checkout the dev channel to allow us to create the worktree for the master branch. This will keep the `flutter` directory separate so we can work on PRs and apply local changes.

After this runs we should have 4 directories: `flutter`, `flutter-master`, `flutter-beta` and `flutter-stable`.

Add ZSH Alias for each Channel 
-------------------------------

Now we need a way to reference each SDK on the fly with an [alias in ZSH](https://github.com/rothgar/mastering-zsh/blob/master/docs/helpers/aliases.md). Add the following to `~/.zshrc`:

```markdown
alias flutter-master='~/Developer/flutter-master/bin/flutter'
alias dart-master='~/Developer/flutter-master/bin/dart'

alias flutter-beta='~/Developer/flutter-beta/bin/flutter'
alias dart-beta='~/Developer/flutter-beta/bin/dart'

alias flutter-stable='~/Developer/flutter-stable/bin/flutter'
alias dart-stable='~/Developer/flutter-stable/bin/dart'
```

Conclusion 
-----------

After reopening the terminal, you can verify it is working by running (or add any channel we added above):

```markdown
flutter-master doctor
dart-master --version

flutter-stable doctor
dart-stable --version
```

You can update any of the channels by navigating to the directory of the worktree for the given channel and pulling changes like any other Git repo.

```markdown
cd ~/Developer/flutter-master
git checkout origin/master
```

Git worktrees are just a way to checkout multiple branches as separate folders instead of needing to stash changes.
