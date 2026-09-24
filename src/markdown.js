import { Marked } from 'marked';

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const title = body => body.match(/^# (.+)$/m)[1];

const marked = new Marked({
  walkTokens(t) {
    if (t.type === 'link' && /^[\w-]+\.md$/.test(t.href)) t.href = '/docs/' + t.href.slice(0, -3);
  },
  renderer: {
    code({ text, lang }) {
      const pre = esc(text).replace(/( {2,})(# .*)$/gm, '$1<span class="c">$2</span>');
      return `<div class="panel"><div class="panel-h">${esc(lang || '')}</div><pre>${pre}</pre></div>\n`;
    },
    paragraph({ tokens, raw }) {
      return `<p${raw.startsWith('//') ? ' class="note"' : ''}>${this.parser.parseInline(tokens)}</p>\n`;
    },
    list({ ordered, items }) {
      const pairs = items.map(i => i.tokens[0]?.tokens);
      if (ordered || !pairs.every(p => p?.[0]?.type === 'strong')) return false;
      return `<dl class="kv">${pairs.map(([dt, ...dd]) =>
        `<dt>${this.parser.parseInline(dt.tokens)}</dt><dd>${this.parser.parseInline(dd).replace(/^:\s*/, '')}</dd>`).join('')}</dl>\n`;
    },
  },
});

export const render = body => marked.parse(body.replace(/^# .+\n/m, ''));
