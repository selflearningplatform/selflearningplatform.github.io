import { getEntry } from 'astro:content';
import { DOCS } from '../nav.js';

export async function GET({ site }) {
  const bodies = await Promise.all(DOCS.map(async ({ id }) =>
    (await getEntry('docs', id)).body.replace(/^(# .+)\n/m, `$1\nSource: ${new URL(`/docs/${id}`, site)}\n`)));
  return new Response(bodies.join('\n'));
}
