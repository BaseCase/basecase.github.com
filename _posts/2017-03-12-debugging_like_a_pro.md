---
title: Debugging Like a Pro
publish_date: Mar 12, 2017
layout: blog_post
description: "Some thoughts about debugging mindset"
---

*NOTE: This was originally published on [the Adorable blog](http://adorable.io/post/debugging-like-a-pro).*

## Introduction

If you’re like most programmers, you spend a lot of time finding and fixing bugs.
Likewise, if you’re like most programmers, you haven’t spent a lot of time consciously improving your debugging skills.
In this post, I’ll dig into the skill of debugging and offer some strategies you can apply to improve your own practice.


<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">The 6 stages of debugging:<br><br>1) Can&#39;t happen.<br>2) Shouldn&#39;t happen?<br>3) Doesn&#39;t happen on my machine.<br>4) Why?<br>5) Oh.<br>6) How did this ever work?&mdash; Cereal Velocity (@CerealVelocity) <a href="https://twitter.com/CerealVelocity/status/575826348414885888">March 12, 2015</a></p></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


### What is a Bug?
Simply put, a bug is a gap between expectation of how the system should behave and how it actually behaves.
This might be your expectation as the implementor, a customer’s or stakeholder’s expectation, or anything else, but the result is a system that isn’t doing what it’s supposed to do.
This gap can manifest as something as blatant as a system crash, something as subtle as a calculation being slightly off, or anything in between.
Of course, this definition is broad enough to leave room for things we might not traditionally think of as bugs, such as a misunderstanding of requirements or UI design quirks.
Even if something ends up categorized differently in your issue tracker, however, the strategies in this article will be useful in addressing the problem.


### What is Debugging?
Debugging is the act of closing the gap between expectation and reality.
There are all sorts of different tools that you can employ while debugging, but this post is focused on the mindset of debugging rather than a specific application or language.


### Which Bug Should I Fix?
The most important thing for a professional to do is to make sure they’re focusing on the work that is most valuable right now.
So the first step in professional debugging is to communicate closely with your team members and stakeholders to determine which bugs deserve your attention and which can wait.
If your team is struggling to prioritize, I recommend checking out *[Planning Extreme Programming](https://www.amazon.com/Planning-Extreme-Programming-Kent-Beck/dp/0201710919)* by Kent Beck and Martin Fowler.

### How To Do It
In the rest of this post, I’ll describe an approach to finding and fixing bugs like a pro.
When you get an urgent call from a business partner and it seems like the world is on fire, it’s important to take a step back and get into the right frame of mind, so let’s start there.


## Mindset
The most important debugging skill is a positive mindset.
That sounds like an empty platitude, but it’s actually true!
Bugs are often surprising and confusing, so having confidence that you will eventually squash them is key.

### Computers are deterministic
Given certain conditions and certain input, a computer will always produce the same output.
Now, those “certain conditions” might be a set of circumstances so complex that a human brain can’t easily think about it, but it’s true nonetheless.

### It’s not the language/framework/library
I’ve seen a lot of programmers jump to the conclusion that they’ve found a bug in Postgres.
You haven’t found a bug in Postgres!
Start debugging with the assumption that it’s your own code that’s broken and work from there.
In rare instances, it actually *is* a bug in Postgres, but that’s a vanishingly small percentage of the time, especially in mature, widely adopted packages.


## Diagnosing the bug
It’s easy to feel overwhelmed when digging through endless log files, stack traces, commit history, and code.
The best way to get on top of that complexity is to follow a deliberate process.
I’ll stick to general principles here.
These are a starting point, but you’ll eventually find a unique process that works best for you.

We’ll use a simple case study as an example of applying these steps to a real problem.
Let’s say we have a social media application where users can have friends, and those friends' names are displayed on each user’s profile page.
We get a bug report that one of our users can’t see their profile; they just get an error message when they try to visit the page.
How do we go about finding the source of this bug?

### The Debugging Loop
I think of the bug hunting process as a loop which oscillates between three steps:

+ Form a Hypothesis
+ Test that Hypothesis
+ Repeat

#### Form a Hypothesis

First, come up with a specific, targeted question to answer.
This question will help you stay focused and avoid randomly flipping through code.
Frame the question as a testable hypothesis, for example, “Is the user profile page failing to load because one of the user’s friends has an emoji in their username and the application only supports ASCII?”
I will often write my question down in a text file or a scrap of paper to keep myself focused on it.

A good hypothesis is one that is specific and testable.
“Testable” in this case doesn’t have to mean unit-testable (although that’s a nice bonus), it just means that I can create, on purpose, the conditions that would trigger the problem.
It’s also not important that my hypothesis is correct—at least not at first.
What matters is that it gives me something specific and focused to do.

#### Test that Hypothesis

Now that you have a hypothesis, test it.
The more specific your hypothesis, the more straightforward (which is not always the same thing as easy!) it will be to set up a test.
This can be an automated test that you code, manual poking, or information gleaned from tools like print statements or a debugger.

In our user profile example, I’d find a currently broken profile, replace the user’s friends' emoji characters with ASCII, and see if the user’s profile now works.
You’ll want to test both the positive and negative sides of your hypothesis, so the next thing to try is to find a profile that *does* currently work, add an emoji to it, and see if it breaks.
If one or both of those things don’t happen, I know that my hypothesis is at best partially correct, and I still need more information.

If you are right about what’s causing the bug, you should be able to make it happen on purpose by creating the necessary conditions, and you should also be able to demonstrate that it does not happen in the absence of those conditions.

If you find it difficult to set up a test for your hypothesis, ask yourself why.
Is there a simpler form of this same thing that you could try first?
Are you lacking clarity or focus?
Sometimes the system or bug is just so complex that there’s no getting around testing difficulty, but oftentimes there is a way to simplify things.

#### Repeat

Let’s say we’ve tested our hypothesis and found that, while removing the friend’s emoji seems to fix our user’s profile page, we added an emoji to a *different* profile and that page still worked.
This means the hypothesis is not right.

If I test my hypothesis and find that it was wrong, that’s fine!
Although I haven’t found the problem yet, I have eliminated at least one possibility and probably learned something about the system.
I can take this knowledge forward to create a new hypothesis and repeat the process until I’m correct.

In our example, I still think there’s some merit to the idea that a rogue emoji could be the culprit, so the next question I’ll ask is “Could it be a *specific* emoji or group of them that causes the problem?
I know that iPhones do this weird thing where there are multiple versions of some emoji, but they show up as two separate characters on some systems; maybe something’s going on with that.”
This new question gives me a new direction to explore, and its answer will reduce the number of possible explanations for this bug.
If I test my new question and find that it *still* doesn’t fully explain things, I’ll need to repeat the process again, either with an even more specific version of this line of thinking or a totally new tack that doesn’t involve emoji.

With practice, you’ll learn to target hypotheses effectively so that you can eliminate huge categories of possibilities from consideration with each iteration of the loop.
By following this Hypothesize -> Test -> Repeat loop, you can zero in on the problem until it’s isolated.


## Fixing the bug
If you’ve made it this far in the process, I have good news: finding the bug is almost always the hardest part.
Once you understand the cause of the observed behavior, fixing it is often straightforward.
If you’re a practitioner of Test-Driven Development, you’ll recognize this set of steps from your normal development workflow.
And if you aren’t, consider trying this same approach even when you aren’t fixing a bug; you might like it!

### Write a test
First, write an automated test that fails due to the bug.
Where this test lives and what it looks like depend on the nature of the problem and the architecture of your code.
Should it be an isolated unit test?
A high-level feature test?
It’s a judgment call.
It’s possible that you’ve already written this test as part of your hypothesis loop, in which case, you’re ahead of the game.

### Make it pass
Now, finally, it’s time to actually fix the bug that started you on this journey.
If your understanding is correct, and your test is written to specifically express that understanding, you can make a change that makes the test pass, and the bug will be squashed!

### Refactor
After you’ve confirmed that the bug is fixed, it’s time to step back and take a higher-level look at the code, as it might need some reorganizing.
Sometimes bugfix code will make things temporarily messier, or sometimes the bug crept in because the existing code was already messy.
Sometimes, if you’re lucky, fixing a bug will clarify things in a way that reveals a new abstraction you can implement.
Either way, the test you just wrote will be your safety net as you refactor, ensuring that things remain fixed while you improve the clarity and maintainability of the code.


## Learning from the bug
Good job, you fixed the bug and your business partners are thrilled!
You’re done for the day!
Not so fast.
A pro doesn’t just patch things up and move along.
The professional mindset is not only about delivering immediate value but also about seeking self improvement and deeper understanding in the long term.

Take a moment to reflect on each step of the debugging process before moving on.
Look back at the hypotheses that you explored.
Which ones gave you the most new information about the system?
If you can identify what characteristics your best hypotheses share, you’ll be able to more quickly arrive at the most helpful questions next time.

Did you learn something that will help you next time you need to fix a bug?
Maybe you found out about a quirk in the language or libraries your app uses.
You’ll be better equipped to diagnose that problem in the future or avoid it in new code.
Maybe you discovered a place where the business domain is not expressed accurately and clearly by the names chosen in the code.
That’s a great opportunity to do some refactoring to enhance clarity and decrease the chances of surprise in the future.
Every bug has something to teach you.

Once you’ve synthesized your reflections from the bugfix, share that knowledge with your team.
At Adorable, we have a “Technical Tidbits” chat room dedicated to this, and it’s always satisfying to hit a problem and remember that a coworker shared the exact answer to it a while back.
I also keep a personal notes file where I record what I learned; I can refer back to it if I hit a similar snag in the future.

Most importantly: how did this bug get into the system to begin with?
If you can always find an answer to that question, you’ll start to develop habits that prevent bugs before they happen, which ultimately means you can spend less time debugging and more time writing feature code.


*Special thanks to Amy Marco and Jason Klug for reading a draft of this article and offering super helpful suggestions to improve it!*
