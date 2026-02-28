---
title: How to Manage Multiple Flutter Versions with Git Worktrees and ZSH
date: '2025-01-19 02:32:18.215Z'
draft: false
tags:
  - flutter
  - dart
  - github
summary: >-
  Manage multiple Flutter SDK versions using Git worktrees and ZSH aliases for
  easy switching between stable, beta, and master channels.
embedding: >-
  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
related:
  - flutter/host-rest-api.md
  - flutter/automation.md
  - flutter/native-cross-platform.md
  - flutter/one-click-release.md
  - flutter/snippets/master-detail-view.md
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
