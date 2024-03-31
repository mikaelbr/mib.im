import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

export async function getAllPresentations() {
  return sortPresentation(await getCollection('presentation'));
}

export function sortPresentation(
  presentations: Array<CollectionEntry<'presentation'>>,
): Array<CollectionEntry<'presentation'>> {
  return presentations.sort((a, b) => {
    return b.data.sort - a.data.sort;
  });
}
