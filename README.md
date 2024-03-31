# Astro Resume

## Features

- Astro v4
- TailwindCSS utility classes
- ESLint / Prettier pre-installed and pre-configured
- Accessible, semantic HTML markup
- Responsive & SEO-friendly
- Dark / Light mode, using Tailwind and CSS variables (referenced from shadcn)
- [Astro Assets Integration](https://docs.astro.build/en/guides/assets/) for optimised images
- MD & [MDX](https://docs.astro.build/en/guides/markdown-content/#mdx-only-features) posts
- Pagination
- [Automatic RSS feed](https://docs.astro.build/en/guides/rss)
- Auto-generated [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Expressive Code](https://expressive-code.com/) source code and syntax highlighter

## Credits

- [astro-theme-cactus](https://github.com/chrismwilliams/astro-theme-cactus) for blog design
- [minirezume-framer](https://minirezume.framer.website/) for resume homepage design

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
    ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
|   ├── pages/
|   ├── styles/
|   ├── utils/
|   ├── site.config.ts
│   └── types.ts
├── .elintrc.cjs
├── .gitignore
├── .prettierignore
├── package.json
├── prettier.config.cjs
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Editing guide

### Site info

To edit site info such as site title and description, edit the `src/site.config.ts` file.

### Page contents

To edit the resume homepage content and design, edit the `src/pages/index.astro` file.

### Page components

To edit page components found site-wide such as the card used in the homepage, edit the files found in the `src/components/` directory.

### Layouts

To edit the base layouts of all pages, edit the `src/layouts/BaseLayout.astro` file.

To edit the layout of a blog article, edit the `src/layouts/BlogPost.astro` file.

### Blog content

To add blog content, insert `.md` files in the `src/content/` directory.

To add images in blog articles, insert a folder in the `src/content/` directory, add both the `.md` and image files into the new folder, and reference the image in your `.md` file.

## Theming

To change the theme colours of the site, edit the `src/styles/app.css` file.

To change the fonts of the site, add your font files into `/public`, add it as a `@font-face` in the `src/styles/app.css` file, as a `fontFamily` in the `tailwind.config.js` file, and apply the new font class to the `body` tag in the `src/layouts/BaseLayout.astro` file.

---

videos

- https://vimeo.com/882856707

  - DIY Next.js Server Actions
  - Language: Norwegian
  - Conference: TDC
  - Description:
    Med server first-arkitektur som former det moderne landskapet for webutvikling, introduserer det Server Actions i Next.js. En tilsynelatende magisk måte å implementere progressive enhancement og RPC. Som den maskerte magikeren vil vi avsløre hemmelighetene. La oss avmystifisere gjennom re-implementering og «gjør det selv”-tankegang. Denne kode-rike sesjonen vil lære deg om React Server Components, Server Actions, progressive enhancement, RPC; og gi deg en dypere forståelse av hvordan de samhandler med moderne nettlesere.

- https://www.youtube.com/watch?v=Rz3oFviV-n4

  - Decoding Frontend Architectures with Mikael Brevik
  - Language: English
  - Place: Code Ryan Podcast
  - Description:
    Mikael takes us on a journey through his tech career, revealing the pivotal moments that led him to specialize in frontend architectures. Delving into the heart of the matter, Mikael explains the essence of frontend architecture—unveiling how it shapes the very foundation of modern web development. We explore the intriguing dichotomy between Single Page Applications (SPAs) and Static Sites, dissecting their respective strengths and weaknesses, from dynamic user experiences to SEO challenges

- https://www.youtube.com/watch?v=nkBL340zOaM

  - Frontend Architectures: The Next Generations
  - Language: English
  - Conference: NDC Oslo 2023
  - Description:
    Contrary to popular belief, the frontend scene has actually been relatively stagnant for the longest time. On a macro level, we've largely followed the same patterns and architectures with only minor variations for the past 6-7 years. This is about to change.

    After a period of stability, we see a significant shift in how we approach and solve problems. And what types of problems we solve.

    Let's go through some of the biggest and most important changes to architecture, tooling, and patterns in frontend that are happening today and tomorrow. Let's also take a technical deep dive into how they actually work so we can gain a clear understanding of when to use them and for what problems. We'll look at different solutions such as Qwik, Astro, Edge Functions, Solid.js, and many more.

- https://www.youtube.com/watch?v=Pbqratnt9Io

  - Functional UIs and Unidirectional Dataflow
  - Language: English
  - Conference: JS Conf Budapest 2015
  - Description:
    Let us bring back the days where we could write declarative representations of how we want our UI components to work. We should be able to read our code from top to bottom and intuitively know what the output will be, just like the good old HTML, but with the power of functional programming.

    In this talk we'll explore bringing functional programming into views. Instead of moving logic to markup through weird DSLs we bring expressive views into the programming language. We'll see how to create a UI where we have composable, pure and referentially transparent components; components with no side-effects and predictable output. We couple this with immutable data and components with single responsibilities, and we can get a fast and smart way to build UIs with a unidirectional flow and a simpler static mental model.

- https://vimeo.com/669321312

  - Bli kvitt implisitt prosjektkunnskap med snevre linting-regler
  - Language: Norwegian
  - Conference: JavaZone 2022
  - Description:
    I denne presentasjonen utforsker vi linting, abstrakte syntaks trær og tre-traversering for hvordan du kan skrive dine prosjektspesifikke regler! Konseptene og tankesettet er gjenbrukbart i flere programmeringsspråk men fleste eksempler vil være med bruk av TypeScript og eslint.

- https://www.elastic.co/videos/breaking-the-fourth-wall-with-javascript-by-mikael-brevik
  - Breaking the Fourth Wall with JavaScript
  - Language: English
  - Conference: WebRebels 2016
  - Description:
    Using JavaScript language features like proxies to take the language to the extreme. Achieving homoiconicity in JavaScript, pattern matching by multi dispatch and much more.
