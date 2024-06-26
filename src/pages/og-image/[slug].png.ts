import type { APIContext, InferGetStaticPropsType } from 'astro';
import satori, { type SatoriOptions } from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import { siteConfig } from '@/site-config';
import { getAllPosts, getFormattedDate } from '@/utils';
import { readFile } from 'node:fs/promises';

export const prerender = true;

const ogOptions: SatoriOptions = {
  width: 1200,
  height: 630,
  // debug: true,
  fonts: [
    {
      name: 'Satoshi',
      data: await readFile('./src/assets/fonts/Satoshi-Medium.ttf'),
      weight: 400,
      style: 'normal',
    },
    {
      name: 'Satoshi',
      data: await readFile('./src/assets/fonts/Satoshi-Bold.ttf'),
      weight: 600,
      style: 'normal',
    },
  ],
};

const markup = (title: string, pubDate: string) =>
  html`<div tw="flex flex-col w-full h-full bg-[#1d1f21] text-[#c9cacc] font-satoshi">
    <h1 class="flex-none p-10 text-2xl font-semibold">mib</h1>
    <div tw="flex flex-col flex-1 w-full p-10 justify-center">
      <p tw="text-2xl mb-6">${pubDate}</p>
      <h1 tw="text-6xl font-bold leading-snug text-white">${title}</h1>
    </div>
    <div tw="flex items-center justify-between w-full p-10 border-t border-[#98fff3] text-xl">
      <div tw="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
          <path
            fill="currentColor"
            d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m40-128a87.55 87.55 0 0 1-33.64 69.21A16.24 16.24 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16 16 0 0 0-6.23-12.66A87.59 87.59 0 0 1 40 104.49C39.74 56.83 78.26 17.14 125.88 16A88 88 0 0 1 216 104m-32.11-9.34a57.6 57.6 0 0 0-46.56-46.55a8 8 0 0 0-2.66 15.78c16.57 2.79 30.63 16.85 33.44 33.45A8 8 0 0 0 176 104a9 9 0 0 0 1.35-.11a8 8 0 0 0 6.54-9.23"
          />
        </svg>
        <p tw="ml-3 font-semibold">${siteConfig.title}</p>
      </div>
    </div>
  </div>`;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export async function GET(context: APIContext) {
  const { title, pubDate } = context.props as Props;

  const postDate = getFormattedDate(pubDate, {
    weekday: 'long',
    month: 'long',
  });
  const svg = await satori(markup(title, postDate), ogOptions);
  const png = new Resvg(svg).render().asPng();
  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return posts
    .filter(({ data }) => !data.ogImage)
    .map((post) => ({
      params: { slug: post.slug },
      props: {
        title: post.data.title,
        pubDate: post.data.updatedDate ?? post.data.publishDate,
      },
    }));
}
