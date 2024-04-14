import type { APIRoute } from 'astro';
import { Flames, db } from 'astro:db';
import z from 'zod';

const payload = z.object({
  slug: z.string(),
  userId: z.string(),
  flames: z.number(),
});

type Payload = z.infer<typeof payload>;

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') !== 'application/json') {
    return new Response(null, { status: 400 });
  }

  const body = await request.json();
  const data = payload.safeParse(body);

  if (!data.success) {
    return new Response(JSON.stringify({ error: data.error.flatten().fieldErrors }), {
      status: 400,
    });
  }

  const payloadData = data.data;

  try {
    await upsertFlames(payloadData);

    return new Response(
      JSON.stringify({
        data: payloadData,
      }),
      {
        status: 200,
      },
    );
  } catch (e) {
    console.error(e);
    return new Response(null, { status: 500 });
  }
};

function upsertFlames(payload: Payload) {
  return db
    .insert(Flames)
    .values({
      slug: payload.slug,
      genId: payload.userId,
      flames: payload.flames,
    })
    .onConflictDoUpdate({
      target: [Flames.genId, Flames.slug],
      set: { flames: payload.flames },
    })
    .run();
}
