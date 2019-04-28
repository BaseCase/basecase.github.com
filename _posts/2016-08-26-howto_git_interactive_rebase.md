---
title: How to Squash Git Branches with Interactive Rebase
layout: blog_post
publish_date: Aug 26, 2016
---

In this tutorial, we'll learn how to convert a git branch from many commits into a single commit before merging it. There's one key command to learn: `git rebase -i`

## Prerequisites
Let's assume that you have a branch, `feature/foo`, that was branched off of `develop`. The git log might look something like this:

```
* baec937 (HEAD -> feature/foo) remove TODO comment
* 4fb174d add spec for foo model
* bb84984 update the foo serializers
* 3b0c937 a small documentation change
* c528a03 (develop) a bug fix
* 1d9cf0c a cool new feature
* a5ce4cc (master) initial commit
```

In the simplest case, all of our `feature/foo` commits are *newer* than the most recent `develop` commit.

## Squashing - the garden path version
We're done reviewing our branch and are ready to merge it.

### Start the interactive rebase
Run

```bash
> git rebase -i develop
```

and you'll see something like this in your editor:

```text
pick 3b0c937 a small documentation change
pick bb84984 update the foo serializers
pick 4fb174d add spec for foo model
pick baec937 remove TODO comment

# Rebase c528a03..baec937 onto c528a03 (4 command(s))
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# ... (additional lines edited out) ...
```

Some things to note about this list:

* The **oldest** commit is at the top of the list. The **newest** is at the bottom (`baec937` in this example).
* Editing this file allows you to rewrite history in a variety of powerful ways.
* The top commit of `develop` **does not appear** in this list. We're rebasing **onto** `develop`, meaning we'll leave `develop` alone. The result of this rebase will affect only the world immediately after `develop`.

### Edit the rebase file
We want to `squash` all of the commits **below** (in other words, newer than) `3b0c937`. To do that, change every `pick` to a `squash` (or `s` for short) except for the top one, which we'll leave alone. Your file should look like this before you save it:

```text
pick 3b0c937 a small documentation change
squash bb84984 update the foo serializers
squash 4fb174d add spec for foo model
squash baec937 remove TODO comment

# Rebase c528a03..baec937 onto c528a03 (4 command(s))
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# ... (additional lines edited out) ...
```

### Name the newly squashed commit
Once you save the rebase file, you'll be asked to name the new commit created by the squash. Here is where we will include the story number and other relevant information.

By default the file looks like this:

```text
# This is a combination of 4 commits.
# The first commit's message is:
a small documentation change

# This is the 2nd commit message:

update the foo serializers

# This is the 3rd commit message:

add spec for foo model

# This is the 4th commit message:

remove TODO comment

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Mon Aug 29 13:32:13 2016 -0500
#
# interactive rebase in progress; onto c528a03
# Last commands done (4 commands done):
#    s 4fb174d add spec for foo model
#    s baec937 remove TODO comment
# No commands remaining.
# You are currently editing a commit while rebasing branch 'feature/foo' on 'c528a03'.
```

Edit it to look like this:

```text
Adds feature Foo

Added new feature Foo which can do all kinds of good stuff.

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Mon Aug 29 13:32:13 2016 -0500
```

###  Finish the rebase
Save the rebase file, and our git history will look like this:

```text
* 9f9b750 (HEAD -> feature/foo) Adds feature foo
* c528a03 (develop) a bug fix
* 1d9cf0c a cool new feature
* a5ce4cc (master) initial commit
```

Notice that we're only one commit ahead of `develop` instead of several!

### Merge the branch into develop
Now that we've squashed our feature branch down to a single commit, we can merge it into `develop` as per usual. Nice!

```bash
> git checkout develop
> git merge feature/foo
> git log --graph --oneline --decorate

* 9f9b750 (HEAD -> develop, feature/foo) Add feature foo
* c528a03 a bug fix
* 1d9cf0c a cool new feature
* a5ce4cc (master) initial commit
```

Look how clean that is. Aw yeah.


## Squashing when there are conflicts
In the real world, `develop` is probably going to change between when you start and finish your branch. Let's see how to deal with that in the rebase workflow.

### Don't merge develop into your branch, rebase over develop
Normally we like to `git merge develop` into our branch frequently to stay up to date. Let's use `rebase` instead, in order to keep all of our branch's commits on top, rather than interspersed.

```bash
> git checkout develop      # only applicable if using a remote
> git fetch origin          # only applicable if using a remote
> git merge origin/develop  # only applicable if using a remote
> git checkout feature/foo
> git rebase develop
```

**Note** that here, we're just using regular rebase, not interactive, so there's no `-i` flag.

By rebasing over `develop` rather than reverse merging it, we're making life a lot easier for ourselves when we do the final squash.

### Resolving conflicts mid-rebase
At some point, you will run into conflicts between branches that you have to resolve. When it happens, you'll see a message like this:

```text
First, rewinding head to replay your work on top of it...
Applying: removes TODO comment
Using index info to reconstruct a base tree...
M      	README.md
Falling back to patching base and 3-way merge...
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
error: Failed to merge in the changes.
Patch failed at 0001 removes TODO comment
The copy of the patch that failed is found in: .git/rebase-apply/patch

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
```

You can edit the conflicting files just like a regular merge conflict, with one important exception:

**DO NOT COMMIT** when you've resolved the conflict. Instead, `git add` the changes and then say

```bash
> git rebase --continue
```


## Getting out of trouble
Rebasing can be tricky sometimes. Here are a couple of strategies to use when you get into trouble.

### Bailing out
If you get into a weird state mid-rebase and want to bail out entirely, you can

```bash
> git rebase --abort
```

### The reflog
The [git reflog](https://git-scm.com/docs/git-reflog) is the ultimate source of a repo's history on your machine. It even keeps track of how things were before an attempted rebase. It's worth taking the time to read up on the reflog, so that you have more powerful tools for resolving rebase-related problems.


## git rerere
When rebasing, you will sometimes need to decide multiple times in a row which branch's code to keep. You may want to look into [git rerere](https://git-scm.com/blog/2010/03/08/rerere.html) to make this easier.


## git-flow
If you use [git-flow](https://github.com/nvie/gitflow), you can say `git-flow feature finish feature/foo --squash` (or `-S` instead of `--squash`) to accomplish basically all of the above. I'm not super familiar with git-flow, so if there's some nuance to this that I missed, please let me know and I'll update this document.


## Questions / comments
If you have any questions or comments, feel free to leave them right here in this gist! This is a living document, so I'll be incorporating feedback as I get it.
