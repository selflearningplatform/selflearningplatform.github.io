import { readFile } from 'node:fs/promises';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const entries = await getCollection('docs');
  return entries.map(entry => ({ params: { id: entry.id }, props: { entry } }));
}

export const GET = async ({ props }) =>
  new Response(await readFile(props.entry.filePath, 'utf8'), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
