import { getEntry } from 'astro:content';
import { DOCS } from '../nav.js';

export async function GET() {
  const bodies = await Promise.all(DOCS.map(async ({ id }) => (await getEntry('docs', id)).body));
  return new Response(bodies.join('\n'));
}
