---
layout: post
title: Emergency vi
post_date: February 13, 2009
---

## Text Editors

One of the most important tools of a serious Unix user is their text editor. Almost all system configuration on Unix is done with plain text files, so having a sharp tool for dealing with text is a must.

Beyond system administration, most of the computing we do on a daily basis involves plain text. Programmers edit text in the form of source code, writers spend lots of time editing and tweaking manuscripts, and anyone who works in an office knows how much time email takes up.

Because text plays such an important role in computing, it only makes sense to have powerful tools for working with it. Someone coming from a Windows environment might have never thought about their editor before -- it's a bit of a shock the first time they step away from Notepad! But incredible programs exist that can improve the way you interact with text, and it's worth your time to get familiar with one of them, regardless of your job or responsibilites.

## vi

## what is it

`vi` is one of the most venerable Unix programs. It has a strange interface, and its behavior will seem downright wonky to someone coming from Notepad, but this strangeness is the result of an ingenious approach to editing that many users swear is the only right way to do it. Once you get over the shock, vi is a powerful tool that can change the way you use your computer.

## why you should know it

*It's Everywhere*

With so many text editors available, why did I pick vi for this article? The reason is that it's everywhere. If you're on a Unix system, you have access to vi. This matters because if you're efficient in vi, you can quickly and effectively edit text on any system, even one you aren't used to.

It's perfectly fine to focus on a different editor for daily use, but without some vi fundamentals under your belt, you're liable to end up lost and confused on an unfamiliar system.

*Common Keybindings*

Because vi has been around for so long and is so popular, lots of other programs copy some of its shortcut keys for similar functions. The next 52in09 post is actually going to be talking about one of the most common of these: less.

## Modes

vi's modality is what throws off most new users. In Notepad and most other text editors, you're always able to input text. If there are shortcut keys to do anything special, they're usually activated by "chording" -- pressing a letter and `CTRL` or `ALT` (or another modifier key) at the same time.

In vi, the special functions are often just single key presses, but the current mode of the program determines the result. In `INSERT` mode, for example, typing on the keyboard just inserts text like you'd expect. In `NORMAL` mode, on the other hand, all of the keys are mapped to other functions like navigation, cut/paste, deleting, etc.

vi has several modes, but we'll only be mentioning three in this intro: `NORMAL`, `INSERT`, and `VISUAL`.

## vi Survival Kit

vi is an advanced and powerful text editor, which means it has thousands upon thousands of features and abilities. People who have been working with vi for decades still haven't mastered the whole editor.

This shouldn't be cause for alarm, however. To be pretty handy at vi, you only need a small subset of features based on what you use the most. And to get off the ground initially, you only need a handful of commands (the ones I'm about to teach you, conveniently enough!).

When you start the editor, you'll be in `NORMAL` mode. You can't enter new text from here, but this is where all the most used editing commands are.

## movement

To move around, use the `h`, `j`, `k`, and `l` keys for left, down, up, and right, respectively. This is pretty awkward at first, but once you're used to it, it will feel natural.

To help remember the mappings, think of it this way: `h` and `l` are on the far left and right sides of the group, so that's easy. `j` dangles _down_ below the line, and `k` stretches _up_ to the next line.

## INSERT mode

Press `i` to enter `INSERT` mode. This is how you type new text. Press `ESC` to return to `NORMAL` mode for editing.

## deleting

In `NORMAL` mode, `x` will delete a single character under the cursor. `de` (that is, press and release `d`, then press and release `e`) will delete from the cursor to the end of the word, and `dd` will delete the entire line your cursor is currently on.

## quitting and saving

At this point, you've got pretty much the same capabilities as Notepad. To quit vi, while in `NORMAL` mode type `:q` and hit `ENTER`. If you've changed the file, vi will complain. `:wq` will save and then quit, or `:q!` will discard changes and quit.

## undo / redo

`u` in `NORMAL` mode will undo changes. `CTRL-r` will redo.

## copy (yank) / paste (put)

When you delete a line with `dd`, it is saved in a buffer. To insert that text somewhere else, type `p` (vi's word for "paste" is "put"). If you want to copy some text without deleting it, you can "yank" it. `v` will enter `VISUAL` mode, use the movement keys to highlight some text, then press `y` to yank the text and return to `NORMAL` mode.

## searching

To search for text, type `/` while in `NORMAL` mode. The cursor will jump to the bottom of the screen, where you enter your search term and press `ENTER`. To search for the next occurance of your term, press `n`. To search backwards press `N`.

## find/replace

If you need to make a lot of similar changes to a file all at once, use find and replace. In `NORMAL` mode, type `:s/old/new/g` to replace all instances of 'old' on a line with 'new'. If you'd like to do this for the whole file, type `:%s/old/new/g`.

## learning more about vi

At this point, you know enough vi to get by. Since I use a different editor for my day-to-day work, that's actually about all I know. If you've tried out some other editors and still feel most at home with vi, you'll want to start learning a lot more about how to use it effectively. Here are some resources:

## vimtutor

If you're using Vim instead of vanilla vi (and if you aren't, you should be), running `vimtutor` from the command line will give you a more thorough tutorial than this post, with opportunities to practice the commands as you learn them.

## vim website

http://www.vim.org/docs.php
This page has links to a couple of books about Vim, as well as the official complete documentation.

## Learning the vi and Vim Editors

http://oreilly.com/catalog/9780596529833/
A great dead trees book, and it includes info on classic vi as well as Vim (why are you using old vi? What did I tell you about that?)

## Picking an Editor

## Find one you like and master it

vi is featured here because of its importance to Unix systems. Please don't take that as an endorsement of vi as the "best" text editor. The truth of the matter is that there is no such thing as a "best" editor. Everyone thinks a little differently, and editors are like any other tool: certain brands will fit a given user, and others won't.

After you've learned enough vi to survive, I'd recommend checking out some other editors for a couple of weeks at a time, and find one that really thinks like you do. If you have a sysadmin who cares about your well-being, you should be able to convince them to install your favorite on the system you're using.

The important thing to remember about editors isn't which one is best, it's that you need to pick a good one and get really comfortable with it. Since so much of the workday involves text, it is essential to your happiness that you are able to manipulate text with ease and power.

## other choices

*Vim*

vi is very old, and there are lots of clones/improvements of it. Vim is the most popular of these. It offers much more power than basic vi, but it still retains the flavor and most of the keybindings of the original. If you enjoy working with vi, I strongly recommend upgrading to Vim and learning some of its more modern and powerful features.

*Emacs*

Emacs is considered by many to be the only other editor worth mentioning alongside vi, and there is a classic holy war about which one is superior. I personally am a big Emacs fan, and I use it for several hours daily. It really fits the way I think. After you check out vi for a while, I'd recommend spending a few weeks with Emacs to see if it's more your style.

*Others*

While Vim and Emacs are the big players today, there are still lots of other popular choices. TextMate is huge in the Mac community, but unfortunately it's only available for that platform.

Pico (and its clone, nano) is a Notepad-esque basic editor that's good if you get hit in the head and can't remember how to use vi.

gedit and Kate are good graphical editors for the GNOME and KDE Linux desktop environments.

JOE is a solid choice if you tried Emacs and liked the idea, but it hurt your hands too much.
