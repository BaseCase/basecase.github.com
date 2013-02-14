---
layout: post
title: Sample Cakefile
post_date: March 20, 2012
---

[Cake](http://coffeescript.org/documentation/docs/cake.html) is the build tool for [CoffeeScript](http://coffeescript.org/). It's nifty, but the documentation is a little sparse. Here's an example Cakefile that does everything you need for a basic Coffee project:

<script src="https://gist.github.com/BaseCase/2139106.js">  </script>

## Project Structure

In this example, I'm using a project structure something like this:

![project structure](/img/coffee_structure.png)

That's all inside a "static" directory in a Django project, but it shouldn't matter what kind of server you're using. Coffee files are in `src/`, Jasmine specs are in `spec/`, and compiled JavaScript goes into `bin/`.


## Dependencies

To run everything, you'll need Node (which you should have already if you're using CoffeeScript) and a few other things installed via `npm`:

* stitch
* uglifyjs
* jasmine-node
You can run `npm install -g <NAME>` to intall each of these system-wide.


## Cake Tasks

Cakefiles are composed of tasks, which are defined at the top of the Cakefile like this:

<script src="https://gist.github.com/BaseCase/2139306.js">  </script>

Each of these tasks calls a function that performs the correct action. For example, the "compile" task calls this function:

<script src="https://gist.github.com/BaseCase/2140355.js">  </script>

The reason I break the tasks out into functions like this is to make it easy to chain them together. Because Node runs processes asynchronously, I use callbacks in the functions instead of simply calling a sequence of tasks. If I just used "invoke", the full build would happen even if a Jasmine spec fails. Also, I just really like the way the full build task looks:

<script src="https://gist.github.com/BaseCase/2140404.js">  </script>


## Developing with Cake

Running cake with no arguments yields a list of tasks defined in the Cakefile.

![cake tasks](/img/cake_tasks.png)

Each step of the build has its own task, but I really only use three of them on a regular basis:

* While coding, `cake test` lets me easily run Jasmine specs without waiting for compilation of CoffeeScript.
* While testing small UI tweaks, `cake develop` lets me package things quickly for running in the browser without waiting for Uglify or Jasmine.
* When I'm ready to deploy, `cake build` runs all the steps.
