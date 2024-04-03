import { Flames, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db.insert(Flames).values([
    {
      flames: 4,
      genId: 'dsa',
      slug: '7-tips-for-better-code-reviews',
    },
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
