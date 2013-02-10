---
layout: post
title: 52in09 Week 3 - Bash Builtins Grab-bag
post_date: February 03, 2009
---

## Intro

The "shell" is what you use to interact with your computer. It's a layer the operating system provides so that humans can get things done without having to worry about low-level things like memory management and hardware control. In Unix, you have a choice of shells. This choice might be made for you by an administrator, or you may get to choose your own.

One of the most popular Unix shells is 'bash'. It's the default for mainstream Linux distributions like Ubuntu, and it's what most people I know use. There are other shells that are just as good, but since bash is so common, it's probably the easiest to get help for. There are piles of literature about bash, so today I'll just be covering some of the basics.

I mentioned in a previous post that the Unix philosophy encourages having a system composed of special-purpose utilities that do one thing well. It's hard to maintain this conceptual purity in the real world, and as it turns out, there are a few tasks that are difficult, slow, or impossible to do in a separate program. The shell handles these things for you.

These operations are called 'builtins' because, well, they're built in. One of the things that differentiates shells is what builtins they provide. Some of the operations don't actually need to be a builtin; they could have been a separate utility, but for performance (or other) reasons they are included.

My version of bash has 56 builtins, and they're all useful in their own way. Until you get into writing complicated shell scripts, though, there are only a few that you really need. We'll be talking about a handful of indispensible builtins today.

## Moving around

`pwd` stands for Print Working Directory. Type this to find out what directory your shell is currently looking at. Many default bash installations will default to displaying your working directory in the prompt, so I don't use this command all that often.

`cd <DIRNAME>` (Change Directory) will change your working directory to `<DIRNAME>`. Type it without any arguments to return to your home directory.

Now here's a handy one. Once you get comfortable with `cd` (which should hopefully take about 2 minutes), you'll probably start to wish for a faster way of getting around. `pushd` and `popd` give you the ability to save "shortcuts" to various locations.

The most common use case goes like this: You're in a location `<OLD_LOC>` and you want to cd to `<NEW_LOC>`, but you know you'll need to come back to `<OLD_LOC>` soon. Like all good Unix users, you're incredibly lazy, and the thought of typing that whole path out makes you feel tired and cranky. Instead of typing `cd <NEW_LOC>`, type `pushd <NEW_LOC>`.

Now you're in the new directory, but you've given yourself a secret escape route back to the original spot. Once you're done in `<NEW_LOC>`, type `popd` and you'll be magically warped back to `<OLD_LOC>`. Simple!

You can actually use pushd several times in a row. Each time you use it, you add another directory to the stack of shortcuts. `popd` will return you to directories in the order of most recently visited. If you forget where you've been, type `dirs`. You'll get a list of directories on the stack, with the leftmost being your current position.

## echo

`echo <SOME_TEXT>` just prints `<SOME_TEXT>` to the screen. Whee. It's useful in shell scripting, though. Also, there's a neat trick you can do to edit a file without opening it up. `echo <SOME_TEXT> >> <FILENAME>` will append `<SOME_TEXT>` to the file named `<FILENAME>`, or create it if it doesn't exist.

Bash control characters and output redirection are beyond the scope of this post, but they're integral to quite a bit of Unix magic. Watch an experienced user for more than 5 minutes, and you'll probably see them do something sneaky with pipes or input/output control.

## job control

Unix was one of the first multitasking operating systems, and it remains very strong in that area today. My favorite way to run multiple programs at once is with [screen](/2009/01/11/52in09-week-1-screen.html), but a simpler method is to simply send a process to the background. If you're about to run something that you know will take a while, append the `'&amp;'` symbol to the command line and it will start in the background. It will run there until it is finished. The jargon for this technique is called "amping out" a process (from a shortening of "ampsersand").

Type `fg` at the command line to bring a background process back to the front. If you've got more than one thing running in the background, use `fg <NUM>` where `<NUM>` is the background process number.

`kill <NUM>` will stop the operation of background process with number `<NUM>`. Use this to stop runaway jobs that you can't find nicer ways to stop.

There are lots of nifty keyboard shortcuts and other arcane job control commands. Some of them are builtins and others are separate utilities. About the only thing you can count on is that these operations will vary from place to place. Always make sure you have a local wizard nearby when messing around with job control.

## Beyond builtins

Unix shells are highly "scriptable". This means that in addition to being your interface into the system, they're programming language interpreters. Bash has a full-featured and easy to learn (at least for the basics) language built into it. This doesn't really fit into the category of "builtins" and it's certainly way beyond the scope of 52in09, but this seemed like a good place to mention it. There are plenty of books and articles that are required reading for any serious intermediate to advanced Unix user.

`shopt` stands for "shell option", and it's a builtin that lets you toggle various environment settings. You can dramatically alter the behavior of your shell with `shopt`. There's a lot to it, and I only know the basics myself -- I might do a "customizing bash" post sometime in the future. If that wizard is still around from when you were playing with job control, ask them about what kind of shopt settings they like.

## Conclusion

We've just scratched the surface here. There are several more builtins available, and they're all useful for something, even if it's not apparent what at first glance. This basic set should get you up and running though, and give you more of a taste for the power of the command line.

## Additional Reading

Bash is an incredibly complex piece of software, but it's easy to be productive with just the basics. Once you're comfortable, though, you'll want to start seeing what other kinds of damage you can cause. The hallmark of a good Unix user is that they are always coming up with new ways to break things.

* <span>[Official Bash Reference Manual](http://www.gnu.org/software/bash/manual/bashref.html")</span>
* <span>[Bash Guide for Beginners](http://tldp.org/LDP/Bash-Beginners-Guide/html/index.html)</span>
* <span>[Learning the bash Shell](http://oreilly.com/catalog/9780596009656/index.html)</span>
* <span>And of course, the man pages!</span>
