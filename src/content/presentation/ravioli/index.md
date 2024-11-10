---
title: 'Avoiding code spaghetti by making ravioli'
description:
  'Talk on frontend architecture and how to make scalable code with the righ levels of abstractions
  and avoiding spaghetti code'
url: https://www.youtube.com/watch?v=zQasm-eQgDY
conference:
  name: TDC 2024
  url: https://2024.trondheimdc.no/
publishDate: '21 October 2024'
language: 'en'
sort: 1
coverImage:
  src: './cover.jpeg'
  alt: 'Mikael Brevik at TDC in 2024'
---

How do you ensure structure as your codebase grows? When starting a new codebase, you can code away
without a care in the world. Suddenly, you find yourself slowing down, as it becomes hard to
understand the code you’ve written. All modules seem to blend into each other like spaghetti. One
change in a module causes 15 changes in another. Errors accumulate, and they are hard to trace. You
no longer feel confident but unsure and paranoid. It’s time for ravioli.

Over the years, I've seen numerous codebases and been in many different teams. I've found that, no
matter the framework or language, most teams struggle with the same problems: structuring our code
and ensuring the codebase remains structured when requirements change. We will dive into different
architectural strategies for modern rich web applications, including bottom-up domain typing,
structuring clean modules optimised for deletion, isolating side effects, ensuring function and
module purity, code composability, and data injection for testability. We’ll talk not just how, but
why.

We can now look forward to any new requirements because we’ll be ready!
