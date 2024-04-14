import { Flames, db } from 'astro:db';

export default async function seed() {
  await db.insert(Flames).values([
    {
      flames: 4,
      genId: 'dsa',
      slug: '7-tips-for-better-code-reviews',
    },
    {
      flames: 3,
      genId: 'foo',
      slug: '7-tips-for-better-code-reviews',
    },
  ]);
}
