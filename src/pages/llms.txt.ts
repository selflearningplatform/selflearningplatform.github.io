import { getEntry } from 'astro:content';
import { NAV } from '../nav.js';
import { title } from '../markdown.js';

export async function GET({ site }) {
  const lines = ['# SLP Self Learning Platform', '', '> SLP, the Self Learning Platform: an agent-powered hub for self-learners.'];
  for (const [section, items] of NAV) {
    lines.push('', `## ${section[0].toUpperCase()}${section.slice(1)}`, '');
    for (const [id] of items) {
      const { body } = await getEntry('docs', id);
      lines.push(`- [${title(body)}](${new URL(`/docs/${id}.md`, site)}): ${body.match(/^# .+\n\n(.+)$/m)[1]}`);
    }
  }
  return new Response(lines.join('\n') + '\n');
}
