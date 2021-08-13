---
layout: two-column
layoutClass: layout-two-column
title: Fizz Design System
description: Provi's Design System, Fizz, is a common language across design, engineering and product that describes how we create digital products at Provi.
---

<p class="fizz-stack-24 fizz-heading-3">Fizz consists of:</p>
<div class="feature-grid fizz-stack-32">
  <figure>
    <img width="96" src="/assets/icons/bartender.svg" alt="" class="fizz-stack-8 fizz-margin-auto">
    <figcaption>
      <p class="fizz-heading-4">UI Kit</p>
      <p>Our designers concoct the perfect patterns in our Figma UI kit</p>
    </figcaption>
  </figure>

  <figure>
    <img width="96" src="/assets/icons/tools.svg" alt="" class="fizz-stack-8 fizz-margin-auto">
    <figcaption>
      <p class="fizz-heading-4">CSS Framework</p>
      <p>Our systems team delivers everything you need to recreate patterns in code</p>
    </figcaption>
  </figure>

  <figure>
    <img width="96" src="/assets/icons/drinks.svg" alt="" class="fizz-stack-8 fizz-margin-auto">
    <figcaption>
      <p class="fizz-heading-4">Component Library</p>
      <p>Our engineers serve up all your favorites in Svelte</p>
    </figcaption>
  </figure>

  <figure>
    <img width="96" src="/assets/icons/splash.svg" alt="" class="fizz-stack-8 fizz-margin-auto">
    <figcaption>
      <p class="fizz-heading-4">Icon Library</p>
      <p>Garnish your project with icons</p>
    </figcaption>
  </figure>

</div>

<h2 class="fizz-heading-2">Need Help?</h2>

* Reach out in the <a href="https://teamprovi.slack.com/archives/C0186R5RHR7">#design-system</a> channel on Slack

* Pop into the <a href="https://meet.google.com/xnq-zwxf-zxy">Design System Office Hours</a> Wednesdays from 11am-Noon Central

* Submit a ticket in the <a href="https://pro.vi/fizztracker">Design System Pivotal Tracker</a>

<h2 class="fizz-heading-2">Using Fizz</h2>

<h3 class="fizz-heading-3">CSS</h3>

You can install Fizz as an [npm package](https://www.npmjs.com/package/@peruvianidol/fizz):

```text
npm install @peruvianidol/fizz --save
```

And then import it into the SCSS in your project:

```text
@import 'node_modules/@peruvianidol/fizz/src/scss/fizz.scss'
```

You can also grab the latest <a href="/css/fizz.css" download>fizz.css</a> and pull it into your project or link directly to it:

```
https://provi-fizz.netlify.app/css/fizz.css
```

**OR**

```
https://provi-fizz.netlify.app/css/fizz-unscoped.css
```

The latter does not require enclosing Fizz elements in a `.fizz-styles` wrapper.

See the <a href="/css/">CSS</a> section for more info on the methodology and class names of the framework itself.

<h3 class="fizz-heading-3">CodePen</h3>

You can create a new pen on CodePen that automatically pulls in the latest version of Fizz here:

<a href="https://pro.vi/codepen">https://pro.vi/codepen</a>

Great for prototyping!

<h3 class="fizz-heading-3">Icons</h3>

The design system uses an SVG icon sprite to deliver crisp, vector UI icons that are stylable. Some icons are baked into the components themselves through URL encoding, eliminating the need for extra requests and markup.

See the <a href="/icons/">Icons</a> section for more info on icon usage.
