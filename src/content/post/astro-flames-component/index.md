---
title: 'Creating a dynamic like component in Astro with Astro DB'
publishDate: '21 April 2024'
description: 'How to be a better “code reviewer” by going through 7 concrete tips.'
tags: ['astro', 'typescript', 'astro db']
draft: true
---

Astro is a fantastic tool for creating content driven web pages such as blogs, info pages,
documentation pages etc. In fact,
[this very blog is created in a very short amount of time](https://github.com/mikaelbr/mib.im) using
Astro and a predefined theme from their documentation. Whilst shining on pre-rendered and content
heavy pages, Astro also have the option to add dynamic content either through UI frameworks such as
Solid, Svelte, React, etc. But in many cases you don't need the overhead (cognitive or
performance-wise) of an additional UI framework to add dynamic content to Astro. You can use simple
Astro components enriched by good old vanilla JavaScript/TypeScript and DOM operations.

In this post we'll go through an example of how to create an interactive Astro component that
communicates with a backend running [Astro DB](https://docs.astro.build/en/guides/astro-db/). What
we'll create will look something like this:

<div class="flex justify-center">

![Demo](./demo.gif)

</div>

It will work something like this:

1. User presses once = 1 flame.
2. Holding flame, it will increase value gradually from 1, 2, 3 and to maximum of 4 flames. Holding
   longer will increase flame strength.
3. On a blog post we'll see total flames for a post on initial load.
4. If you are a returning reader you can update your flames (resetting or increasing).

You can test it out at the end of this post!

## The Component

TBA

## The API

TBA

## The Data

TBA

## The Conclusion

TBA