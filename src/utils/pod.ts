import { getPodcastFromFeed } from '@podverse/podcast-feed-parser';

type PodcastStat = {
  title: string;
  url: string;
  description: string;
  image: string;
  numberOfEpisodes: number;
};

export async function getPodcastData(urls: string[]): Promise<PodcastStat[]> {
  const data = await Promise.all(
    urls.map(async (url) => {
      const res = await fetch(url);
      const data = await res.text();

      return getPodcastFromFeed(data);
    }),
  );

  return data.map((item) => ({
    title: item.meta.title,
    description: item.meta.description,
    url: item.meta.link,
    image: item.meta.imageURL,
    numberOfEpisodes: item.episodes.length,
  }));
}
