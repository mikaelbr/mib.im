import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/utils/remarkReadingTime.ts';
// import remarkUnwrapImages from 'remark-unwrap-images';
import remarkUnwrapImages from 'rehype-unwrap-images';
import rehypeExternalLinks from 'rehype-external-links';
import expressiveCode from 'astro-expressive-code';
import { expressiveCodeOptions } from './src/site.config';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel/serverless';
import embeds from 'astro-embed/integration';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  site: 'https://mib.im',
  integrations: [
    expressiveCode(expressiveCodeOptions),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    embeds(),
    mdx(),
    icon(),
    db(),
  ],
  markdown: {
    remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow, noopener, noreferrer'],
        },
      ],
    ],
    remarkRehype: {
      footnoteLabelProperties: {
        className: [''],
      },
    },
  },
  prefetch: true,
  output: 'server',
  adapter: vercel({
    // imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),
});
