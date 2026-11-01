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
related:
  - flutter/automation.md
  - flutter/ssr-rfw.md
  - flutter/multi-touch-canvas.md
  - flutter/web-deep-linking.md
  - flutter/fastlane.md
last_updated_metadata: '2026-11-01T09:41:36.823Z'
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
