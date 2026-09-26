---
tag: dir
endpoint: topics/<slug>/notes/NN-title.md
---

# notes/

Summaries, lessons and your own notes, numbered. Plain Markdown: it opens in Obsidian, on GitHub or in any editor.

```example
notes/
├── 01-methods-and-status-codes.md
├── 02-caching.md
├── 03-idempotency.md
└── img/
    └── 3f9a1c0b7e2d4a51.png
```

- **written by**: you in the [app](editor.md), [slp-summarize](slp-summarize.md), [slp-teach](slp-teach.md)
- **format**: one `#` per file, topics `##`, subtopics `###`, lists `- `
- **nested lists**: flattened on save. Use a `###` or a second list instead
- **tables**: GFM pipe tables, one header row, a `| --- |` row, then rows with no blank lines between them. Links, inline code and code blocks are kept too
- **names**: `NN-<slug of the # heading>.md`, `NN` being its position. The app renames the files by this rule on every save
- **references**: point to a note by its headings, never by file name: `Methods and status codes › Status codes`
- **escaped characters**: a note saved by the app keeps some characters as HTML entities: `&#42;` for a typed `*`, `&lt;` for `<`, `&#35;` for a leading `#`. This stops typed text from turning into markup
- **images**: `img/<hash>.<ext>`, managed by the app

## Diagrams and formulas

A fenced block is drawn in the app, in notes and in exams. Use it when a drawing says more than prose.

````03-idempotency.md
```mermaid
graph TD
  safe --> idempotent
  idempotent --> retries
```

```math
p_{99} = \frac{a}{b}
```
````

- **mermaid**: any [Mermaid](https://mermaid.js.org/) diagram
- **math**: one [KaTeX](https://katex.org/) formula per block, display mode

## Marks and margin notes

Marks with their color and comment, margin notes with their position, and resized images are kept as HTML inside the Markdown, so they survive the round trip:

```raw html
<mark class="mk-highlight" style="--c: var(--ansi-yellow, #d8c06a);" data-comment="...">text</mark>
<aside class="card" data-x="768" data-y="120"><div class="card-body">...</div></aside>
```

References are `[[heading]]`.
