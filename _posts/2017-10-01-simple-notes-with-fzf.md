---
layout: blog_post
title: Simple Note-Taking with FZF and Vim
publish_date: Oct 01, 2017
---

<h4>Improve your life with fuzzy finding</h4>

<blockquote><strong>TL;DR</strong>: Install <a href="https://github.com/junegunn/fzf">fzf</a>, then download <a href="https://gist.github.com/BaseCase/c45299e4f8474119881d708a4b728fbf">this bash script</a> for a nice little note-taking app.</blockquote>

<p>I recently found <a href="https://github.com/junegunn/fzf">fzf</a>, a great utility for general-purpose fuzzy finding on the command line. I’ve been using it — along with Vim and a little bash script — as a fast, simple note-taking tool, and I wanted to share my setup.</p>

<h3>Fuzzy Finding</h3>
<p>I first learned about fuzzy file finding from <a href="https://www.destroyallsoftware.com/screencasts/catalog/file-navigation-in-vim">Destroy All Software</a>. Gary used the <a href="https://github.com/wincent/command-t">Command-T Vim plugin</a> for file navigation, and it was kind of mind-blowing to see how fast he was able to switch between files. I was accustomed to laboriously typing out full file paths or clicking through directory trees in my editor, and finding out that I could instead simply type a hotkey and 4 or 5 letters changed how I approached navigating file trees.</p>

<figure>
  <img src="/img/fzf_notes_img/ctrlp.gif" />
  <figcaption>
    (Fuzzy file finding in action (this is CtrlP, not Command-T, but same idea)
  </figcaption>
</figure>

<p>The basic idea of fuzzy finding goes like this: given many possible choices, narrow down the options based on a user-entered string. Unlike traditional text search, the characters in the search string don’t have to appear contiguously in the result to count as a match — only in order. So, by searching for <code>acurc</code>,
  <code>
    <strong>a</strong>pp/<wbr><strong>c</strong>ontrollers/<wbr><strong>u</strong>se<strong>r</strong>_registration_<strong>c</strong>ontroller.rb</code> is found. The bolded letters are the ones that the fuzzy finder matched on.</p>

<h3>fzf</h3>
<p>In my daily life, I pretty much only use fuzzy finding for navigating files. That’s not all it can be used for, though, and <a href="https://github.com/junegunn/fzf">fzf</a> was built to generalize the idea. fzf is a command-line tool that accepts any input you want to throw at it, presents an interactive fuzzy-finder, then prints whatever you picked on <code>stdout</code>. It has all kinds of options and customizations, and it is blazingly fast. It can handle very large input sets with no trouble at all.</p>

<h3>Install fzf</h3>
<p>If you’re on a Mac, it’s easy to install fzf:</p>

<code class="standalone">
  brew install fzf
</code>

<p>It is also available for Windows and Linux, as well as in non-Homebrew form on Mac; check the official docs if you need one of those.</p>

<h3>fzf Basic Usage</h3>
<p>If you run it without any arguments, <code>fzf</code> will default to recursively finding all files in the current directory.</p>

<figure>
  <img src="/img/fzf_notes_img/fzf_default.gif" />
  <figcaption>
    fzf default behavior — find files
  </figcaption>
</figure>

<p>You can also pipe a list of things into it, for example the results from a big <code>grep</code> search:</p>

<code class="standalone">
  grep -r animal . | fzf
</code>

<figure>
  <img src="/img/fzf_notes_img/fzf_grep.gif" />
  <figcaption>
    fzf with piped stdin
  </figcaption>
</figure>

<p>There are plenty of other possibilities, but those are the two main use cases: run standalone to search filenames, or pipe a list of stuff into it.</p>

<h3>A Barebones Note-Taking App</h3>
<p>The way I’ve been using fzf is as a lo-fi replacement for <a href="http://notational.net/">Notational Velocity</a> (or, more accurately, as a lo-fi replacement for a hi-fi replacement for Notational Velocity, <a href="http://brettterpstra.com/projects/nvalt/">nvAlt</a>). I keep a folder of Markdown files in Dropbox as my personal wiki. Everything goes in there, from dates and names I need to remember to cheat sheets for programming languages.</p>

<p>fzf accepts a <code>--preview</code> argument which lets you provide a command to run against the currently selected result line. This lets us do something like this (I’ve also added some <code>preview-window</code> options for cosmetic changes):</p>

<code class="standalone">
  fzf --preview="cat {}" --preview-window=right:70%:wrap
</code>

<p>and get this result:</p>

<figure>
  <img src="/img/fzf_notes_img/fzf_pretty.gif" />
  <figcaption>
    fzf with preview and some presentation options
  </figcaption>
</figure>

<p>So that’s a nice little interface over my notes folder. But I want to edit the notes, too, which is where the output from fzf comes in. Since pressing <code>&lt;enter&gt;</code> exits fzf and sends the selected filename to <code>stdout</code>, I can pass that to my editor to open.</p>

<code>
  vim `fzf --preview="cat {}" --preview-window=right:70%:wrap`
</code>

<figure>
  <img src="/img/fzf_notes_img/fzf_to_vim.gif" />
  <figcaption>
    Give fzf result to Vim
  </figcaption>
</figure>

<p>That’s better, but I’m used to notes apps that just stay open all day. I don’t want to retype the <code>fzf</code> command after every edit. After thinking about it for a minute, I realized I could write a bash script that loops forever between these two states — fuzzy file selector and text editor — and here’s what I came up with:</p>

<h3>fuz.sh</h3>

<script src="https://gist.github.com/BaseCase/c45299e4f8474119881d708a4b728fbf.js"></script>

<p>You can put this script in the root of your notes folder, or do what I did and place it in your <code>PATH</code> so that it’s globally accessible. I also renamed it to just <code>fuz</code> on my machine so it feels more like a normal Unix command.</p>

<p>And the whole thing looks like this:</p>

<figure>
  <img src="/img/fzf_notes_img/fuz.gif" />
  <figcaption>
    fuz.sh in action
  </figcaption>
</figure>

<h3>But What About…</h3>
<p>There’s already an <a href="https://github.com/junegunn/fzf.vim">fzf plugin</a> for Vim as well as <a href="https://github.com/Alok/notational-fzf-vim">a Notational Velocity clone</a> that does pretty much what I just showed, so why would I bother writing my own wrapper? The main reason is on line 9 of the script: by referencing <code>$EDITOR</code> instead of <code>vim</code> specifically, this supports whatever editor you’d like to use, which I think is a bit more UNIX-y than the plugin approach. Even if you’re a devoted Vim fan, <code>fzf</code> only works in a terminal, so GVim users can’t make use of the existing plugins.</p>

<h3>Conclusion</h3>
<p>fzf is a really flexible tool, and I’m sure I’ll find other ways to fit it into my workflow in the future, but for now I’m happy with it just as a notes app. If you’re using fzf in some particularly clever way, I’d love to hear from you!</p>

<p><em>This post originally appeared on the <a href="https://medium.com/adorableio/simple-note-taking-with-fzf-and-vim-2a647a39cfa">Adorable blog</a>.</em></p>
