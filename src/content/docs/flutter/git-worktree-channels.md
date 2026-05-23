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
  - videos/take-5/internationalization-flutter.mdx
  - flutter/fastlane.md
  - flutter/host-rest-api.md
  - videos/take-5/your-first-flutter-project.mdx
  - flutter/xcode-cloud.md
last_updated_metadata: '2026-05-23T00:10:30.883Z'
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
