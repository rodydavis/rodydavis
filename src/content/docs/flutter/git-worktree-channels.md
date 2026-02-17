---
title: How to Manage Multiple Flutter Versions with Git Worktrees and ZSH
description: >
  Manage multiple Flutter versions efficiently using Git worktrees, eliminating
  the need for external version managers like FVM.
date: '2025-01-19 02:32:18.215Z'
draft: false
tags:
  - Dart
  - Flutter
  - Git
summary: >-
  Manage multiple Flutter SDK versions using Git worktrees and ZSH aliases for
  easy switching between stable, beta, and dev channels.
embedding: >-
  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
related:
  - automate-flutter-apps.md
  - native-cross-platform-flutter.md
  - flutter-ssr-rfw.md
  - fastlane-and-flutter.md
  - flutter-cheat-sheet.md
---

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
