---
title: 'Functional UIs and Unidirectional Dataflow'
description: 'Intro to abstract syntax trees, custom lint rules and how to use it to reduce implicit project knowledge'
url: https://www.youtube.com/watch?v=Pbqratnt9Io
conference:
  name: JSConf Budapest 2015
  url: https://jsconfbp.com/
publishDate: '04 July 2023'
language: 'en'
sort: 25
coverImage:
  src: './cover.jpeg'
  alt: 'Mikael Brevik at JSConf Budapest 2015'
---

Let us bring back the days where we could write declarative representations of how we want our UI components to work. We should be able to read our code from top to bottom and intuitively know what the output will be, just like the good old HTML, but with the power of functional programming.

In this talk we'll explore bringing functional programming into views. Instead of moving logic to markup through weird DSLs we bring expressive views into the programming language. We'll see how to create a UI where we have composable, pure and referentially transparent components; components with no side-effects and predictable output. We couple this with immutable data and components with single responsibilities, and we can get a fast and smart way to build UIs with a unidirectional flow and a simpler static mental model.
