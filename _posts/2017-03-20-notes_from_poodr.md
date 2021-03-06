---
title: Notes from Practical Object-Oriented Design in Ruby
publish_date: Mar 20, 2017
layout: blog_post
description: "Braindump notes from when I read POODR by Sandi Metz"
---

<p><em>This is a braindump of the notes I took while reading this excellent book by Sandi Metz. No attempt was made to structure or summarize beyond what I personally found useful as reference material. I'm publishing it here in case someone else finds it useful, but really, you owe it to yourself to just <a href="http://www.poodr.com/">read the whole book</a>!</em></p>

<h3 id="L1.-object-oriented-design">1. Object-Oriented Design</h3>

<ul>
  <li>Design is the art of arranging code in such a way that it is easy to change.</li>
  <li>Dependencies, mismanaged, are what make code hard to change.

    <ul>
      <li>When objects know too much about one another, changes ripple through a whole system.</li>
    </ul>
  </li>
  <li>The Tools of Design

    <ul>
      <li>Principles are guidelines like Law of Demeter, SOLID, etc., that are suggestions laid down by experienced practitioners.</li>
      <li>Patterns are names given to specific arrangements of code that keep popping up. These are powerful because they give us a common language to discuss things.</li>
    </ul>
  </li>
  <li>Design as late as possible! Postpone decisions until you have the most information. Code in a way that <em>lets</em> you postpone.</li>
  <li>Agile and OOD are closely related. Since an agile process guarantees frequent change, well-designed—that is, easy to change—code is the only way to achieve agility.</li>
  <li>Design is judged not on aesthetic merits but on how well it helped the project achieve its goals. Implied by this is the notion that sometimes you will intentionally take on <strong>technical debt</strong> (that you have to pay down later) in order to meet, e.g., a sales deadline.</li>
</ul>


<h3 id="L2.-designing-classes-with-a-single-responsibility">2. Designing Classes With a Single Responsibility</h3>

<ul>
  <li>What does it mean to be &ldquo;easy&rdquo; to change?

    <ul>
      <li>changes have no unexpected side effects</li>
      <li>the amount of code change is proportional to the size of the requirement</li>
      <li>existing code lends itself to reuse</li>
      <li>the easiest way to make a given change is to add more easy-to-change code</li>
      <li>Easy-to-change code is <strong>TRUE</strong>

        <ul>
          <li><strong>T</strong>ransparent: easy to understand what it does</li>
          <li><strong>R</strong>easonable: the cost of a change is proportional to its benefits</li>
          <li><strong>U</strong>sable: existing code can be reused outside its original context</li>
          <li><strong>E</strong>xemplary: it demonstrates the style that new code ought to follow</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Single Responsibility Principle

    <ul>
      <li>Why it matters

        <ul>
          <li>If an object has many jobs, it can break on you when changed for some random reason</li>
          <li>Unfocused objects are hard to test</li>
          <li>Unfocused objects encourage duplication because they discourage reuse (or more accurately, you are likely to want to reuse just one part of an object but not the rest of it)</li>
          <li>SRP promotes <strong>isolation</strong>, which in turn translates to <strong>protection from change</strong>.</li>
        </ul>
      </li>
      <li>Determining if a class has a single responsibility, that is, if it is <strong>cohesive</strong>

        <ul>
          <li>Interrogate it like a person. &ldquo;Hi, Gear, what is your gear_ratio?&rdquo; makes sense, whereas &ldquo;Hi, Gear, what&rsquo;s your tire_size?&rdquo; does not.</li>
          <li>Describe it in a single sentence without &ldquo;and&rdquo; or &ldquo;or&rdquo;.</li>
          <li>(these are heuristics; passing does not guarantee cohesion and failing does not deny it)</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Writing Code that Embraces Changes

    <ul>
      <li>Depend on behavior, not data

        <ul>
          <li>prefer methods over instance variables. Even if it&rsquo;s just a simple value, use an <code>attr_reader</code> to reference it outside the constructor rather than a var. This lets you replace it later with a more complex method without updating call sites.</li>
          <li>DRY up understanding of incoming data. e.g. if you have to take in a complex Hash, unpack it in one place into semantic objects/vars.

            <ul>
              <li>Structs in Ruby are a great way to do this, because they can be promoted to classes later with little trouble.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Enforce SRP everywhere (not just classes)

        <ul>
          <li>Make sure your methods only do one thing. If message passing causes performance concerns, address that when it happens; better to design for changeability now.</li>
          <li>Iterating over a collection is one responsibility!

            <ul>
              <li>e.g. outer loop goes in one method, which calls another method for each item in the loop</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>


<h3 id="L3.-managing-dependencies">3. Managing Dependencies</h3>

<ul>
  <li>Sloppy dependency management is the primary culprit that causes a system to get harder and harder to change over time.</li>
  <li>4 ways that an object can depend on another

    <ol>
      <li>It knows the name of a <strong>concrete class</strong></li>
      <li>If knows the name of a <strong>message</strong> to send to another object</li>
      <li>It knows what <strong>arguments</strong> to pass with a message</li>
      <li>It knows the <strong>order</strong> of arguments to pass with a message</li>
    </ol>
  </li>
  <li>Objects are <strong>tightly coupled</strong> when a change in one usually necessitates a change in the other, and/or when they always come with one another (you can&rsquo;t reuse them alone).</li>
  <li>Writing Loosely Coupled Code

    <ul>
      <li>Inject Dependencies

        <ul>
          <li><strong>Dependency Injection</strong> is not a bad word! It&rsquo;s just passing an object into another rather than instantiating it within that object.</li>
          <li>Code to interface instead of specific concrete class. Duck typing! DI is one of the things that enables duck typing.</li>
          <li>Of course, <strong>somebody</strong> still has to know how to create those objects and pass them in. This is one of the challenges of design.</li>
        </ul>
      </li>
      <li>Isolate Dependencies

        <ul>
          <li>Inside a dependent class, keep knowledge of messages going to the dependency in a small number of methods. Don&rsquo;t call the same dependency method in more than one method of the dependent class.</li>
          <li>This applies to instantiation as well. Try to keep knowledge of how to create a given object in one spot.</li>
        </ul>
      </li>
      <li>Remove Argument-Order Dependencies

        <ul>
          <li>Use an args hash rather than many positional args. This protects against change and is easily extensible. It also makes the args more self-documenting at the call site.</li>
          <li>For obvious stuff, positional args are still better (like, <code>add(a, b)</code> would be silly with an args hash).</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Choosing Dependency Direction

    <ul>
      <li>You can reverse dependencies. Consider carefully which way they go.</li>
      <li>In general, an object should depend on things that are <strong>more stable</strong> than it.</li>
      <li>This is one reason coding to the interface via duck typing is so powerful: abstract interfaces are more stable than concrete classes.</li>
    </ul>
  </li>
</ul>


<h3 id="L4.-creating-flexible-interfaces">4. Creating Flexible Interfaces</h3>

<ul>
  <li>Applications are <strong>made of</strong> classes and <strong>defined by</strong> the messages they send. Good designers listen closely to the messages their application needs to send.</li>
  <li>Understanding Interfaces

    <ul>
      <li>An interface is the set of messages to which an object responds.</li>
      <li>Broad interfaces can lead to tightly interwoven sets of objects that cannot be easily used or changed independently.</li>
      <li>Narrow interfaces lead to clusters of small objects that communicate simply and change easily.</li>
    </ul>
  </li>
  <li>Defining Interfaces

    <ul>
      <li>public methods should be slow-changing and well-tested</li>
      <li>private methods should be tested implicitly through the public interface. They can change around a lot with no effect on the outside world.</li>
    </ul>
  </li>
  <li>Domain Objects

    <ul>
      <li>Objects that map directly to business concepts.</li>
      <li>Notice these! But design doesn&rsquo;t stop with them. There are probably other objects in your system too, not directly expressed in the domain, if you want small, single-responsibility classes.</li>
      <li>Thing about the messages that need to be passed around in your system, then decide what objects they belong to. Not the other way around!</li>
    </ul>
  </li>
  <li>Seeking Context Independence

    <ul>
      <li>Objects are more reusable and testable when they know as little as possible about the outside world.</li>
      <li>Dependency Injection is one of the best tools for decreasing context.</li>
      <li>Passing <code>self</code> to collaborators rather than specific attributes can also help decrease context.</li>
    </ul>
  </li>
  <li>Trusting Other Objects

    <ul>
      <li>Send the right message to collaborators and trust that they know what to do with it. Don&rsquo;t interrogate them about their state first.</li>
      <li>Sometimes, if it&rsquo;s hard to trust your collaborators, there might be another object in the system that hasn&rsquo;t been expressed yet. Design!</li>
    </ul>
  </li>
  <li>The Law of Demeter

    <ul>
      <li><code>a.b</code> is OK, <code>a.b.c</code> means <code>a</code> knows too much about <code>b</code>.</li>
      <li>Seeing multiple dots doesn&rsquo;t always mean it&rsquo;s a bad design. For example, <code>collection.sort.uniq</code> isn&rsquo;t an LoD violation, or at least not one that&rsquo;s bad.</li>
      <li>Bad violations of LoD violation the TRUE principles:

        <ul>
          <li>T: a failure in the middle of the train is surprising, and therefore not Transparent</li>
          <li>R: changes far downstream can require change at the call site, which is not Reasonable</li>
          <li>U: knowing so much about the internals of collaborators makes you less Usable</li>
          <li>E: train wrecks encourage more train wrecks. Not Exemplary.</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>


<h3 id="L5.-reducing-costs-with-duck-typing">5. Reducing Costs With Duck Typing</h3>

<ul>
  <li><strong>Duck Types</strong> are implicit interfaces that any class can implement just by responding to the right messages.</li>
  <li>It doesn&rsquo;t matter what you <strong>are</strong>, only what you <strong>do</strong>.</li>
  <li>Writing Code That Relies on Ducks

    <ul>
      <li>Caring about the class of your collaborators is usually a bad idea. It leads to tight coupling and difficult changes. Caring instead about duck types means you can swap things out or add new ones easily!</li>
      <li>Likewise, <code>is_a?</code> and <code>kind_of?</code> and <code>responds_to?</code> are almost surefire giveaways you&rsquo;re missing a duck.</li>
      <li>Pay attention to how you&rsquo;re talking to your collaborators. There might be a duck type interface waiting to be expressed that could reduce coupling with a small amount of change in the other classes.</li>
      <li>If you care too much about the internals of your collaborator instead of trusting it to handle things based on messages, you&rsquo;re increasing coupling and worsening the design (and therefore changeability) of your system.</li>
    </ul>
  </li>
  <li>Potential Downsides of Duck Typing

    <ul>
      <li>Duck types are more abstract than concrete classes.</li>
      <li>Abstractness can be harder to understand at a glance.</li>
      <li>Good designers are comfortable finding the right amount of abstractness in their designs.</li>
      <li>By definition, these interfaces are not codified anywhere, so it&rsquo;s up to you. Tests are the best place to do this.</li>
    </ul>
  </li>
</ul>


<h3 id="note">NOTE</h3>

<p>Paradoxically, I got the most out of chapters 1–5. 6–9 covered material I was already more comfortable with, and so I didn&rsquo;t take detailed notes on them. This doesn&rsquo;t mean they aren&rsquo;t insight-packed, incredibly valuable chapters! They&rsquo;re excellent.</p>

<h3 id="L6.-acquiring-behavior-through-inheritance">6. Acquiring Behavior Through Inheritance</h3>
<h3 id="L7.-sharing-role-behavior-with-modules">7. Sharing Role Behavior with Modules</h3>
<h3 id="L8.-combining-objects-with-composition">8. Combining Objects with Composition</h3>
<h3 id="L9.-designing-cost-effective-tests">9. Designing Cost-Effective Tests</h3>
