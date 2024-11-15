import type { CollectionEntry } from 'astro:content';
import { getCollection, getEntry } from 'astro:content';

/** Note: this function filters out draft posts based on the environment */
export async function getAllPosts(withDrafts: boolean = false) {
  // console.log(await getCollection('post'));
  return await getCollection('post', ({ data, slug }) => {
    const draft = withDrafts ? true : data.draft !== true;
    const notPrefixed = !slug.includes('/');
    return draft && notPrefixed;
  });
}

export async function getAllPrefixed(prefix: string, withDrafts: boolean = false) {
  // console.log(await getCollection('post'));
  return await getCollection('post', ({ data, slug }) => {
    const draft = withDrafts ? true : data.draft !== true;
    const isPrefixed = slug.startsWith(prefix);
    return draft && isPrefixed;
  });
}

export async function getPost(slug: string) {
  return getEntry('post', slug);
}

export function sortMDByDate(
  posts: Array<CollectionEntry<'post'>>,
): Array<CollectionEntry<'post'>> {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
    return bDate - aDate;
  });
}

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getAllTags(posts: Array<CollectionEntry<'post'>>) {
  return posts.flatMap((post) => [...post.data.tags]);
}

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getUniqueTags(posts: Array<CollectionEntry<'post'>>) {
  return [...new Set(getAllTags(posts))];
}

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getUniqueTagsWithCount(
  posts: Array<CollectionEntry<'post'>>,
): Array<[string, number]> {
  return [
    ...getAllTags(posts).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      new Map<string, number>(),
    ),
  ].sort((a, b) => b[1] - a[1]);
}

export function getPopularTags(
  posts: Array<CollectionEntry<'post'>>,
  numberOfTags: number = 5,
): Array<string> {
  return [
    ...getAllTags(posts).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      new Map<string, number>(),
    ),
  ]
    .sort((a, b) => b[1] - a[1])
    .slice(0, numberOfTags)
    .map(([tag]) => tag);
}
