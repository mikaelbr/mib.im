import { defineDb, defineTable, column, NOW } from 'astro:db';

const Flames = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    time: column.date({ default: NOW }),
    slug: column.text(),
    genId: column.text(),
    flames: column.number(),
  },
});

export default defineDb({
  tables: { Flames },
});
