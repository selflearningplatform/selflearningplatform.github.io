import { readFileSync, writeFileSync } from 'node:fs';

const site = 'https://selflearningplatform.github.io';
const nav = readFileSync('index.html', 'utf8').match(/<nav class="side-nav">([\s\S]*?)<\/nav>/)[1];
const index = ['# SLP Self Learning Platform', '', '> SLP, the Self Learning Platform: an agent-powered hub for self-learners.'];
const full = [];

for (const [, section, links] of nav.matchAll(/<summary>(.*?)<\/summary>([\s\S]*?)<\/details>/g)) {
  index.push('', `## ${section[0].toUpperCase()}${section.slice(1)}`, '');
  for (const [, id] of links.matchAll(/href="#docs\/([^"]+)"/g)) {
    const md = readFileSync(`docs/${id}.md`, 'utf8');
    const [, title, blurb] = md.match(/^# (.+)\n\n(.+)$/m);
    index.push(`- [${title}](${site}/docs/${id}.md): ${blurb}`);
    full.push(md.replace(/^---\n[\s\S]*?\n---\n\n/, ''));
  }
}

writeFileSync('llms.txt', index.join('\n') + '\n');
writeFileSync('llms-full.txt', full.join('\n'));
