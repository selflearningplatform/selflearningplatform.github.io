---
tag: view
endpoint: /app/views/notes.html?topic=<slug>
---

# Notes

A notebook per topic. What you write is saved to `topics/<slug>/notes/` as Markdown, less than a second after you stop typing.

The first screen lists every topic: order, title, type, sections and resources. Sort by name or by last edit, or search with the magnifier. Click a topic to open it.

## The page

- **title and subtitle**: editable, saved to `topic.json`
- **body**: one long page. Each `#` heading becomes its own file on save: `notes/01-<heading>.md`, `02-…`. Rename or delete a `#` and the files follow
- **explorer**: `resources/`, then `notes/`: the headings, numbered `1`, `1.1`, `1.1.1`, folded by default. Click to jump. `+ add` under `notes/` starts a new `#` section at the end
- **status line**: `saving…`, then the time and the number of sections

## Toolbar

| tool | what it does |
| --- | --- |
| block | paragraph, heading 1–6, list, numbered list |
| font | the reading font of the note body. Saved as `global.font` in `settings.json` |
| **B** *I* | bold, italic |
| swatches | yellow, green, light blue and pink, plus your own: `+` takes a hex color, right-click one of yours to remove it. Yours are saved as `global.mark_colors` in `settings.json`. Used by marks only |
| highlight · underline · strike | marks the selection in the chosen color |
| reference | link to a section of the notes. Or type `[[heading]]` |
| margin note | a sticky note beside the text, in the theme's accent color. Drag it by its handle |
| flashcard | a new card for this topic: the selected text becomes the back and the section's `#` heading its note. Write the front and save. See [cards](cards-app.md) |
| image | embedded in the text, or a sticky image note with a caption |
| diagram | a Mermaid block |
| formula | a LaTeX block |
| dictate | speech to text, see [dictation](dictation.md). `ctrl+m` |
| ⓘ | the keys of this page. See [shortcuts](shortcuts.md) |

## Marks

Click a mark to change its color, add a comment or remove it. A comment shows when you hover the mark. Hover a reference to preview the section it points to.

## Images

Paste a screenshot, drop a file or use the image button. Click an image to resize it (20–100%) or delete it. On save, images are moved out of the Markdown into `notes/img/<hash>.<ext>`; the same image pasted twice is stored once, and images no note uses are removed.

## Diagrams and formulas

Click a block to edit its source; it repaints as you type. Mermaid and KaTeX ship in `app/vendor/`, no internet needed. They follow the theme.

## Sources

The explorer shows the topic's sources under `resources/`: the files in `topics/<slug>/resources/` (with size) and the `links` in `topic.json`, a URL (`↗`) or a local path (`local`). `+ add` uploads files into `resources/` or takes a URL or a `~/path`, saved to `links`. `slp-init` offers to copy local files there.

Click a source to read it inside the page: PDFs, images, text files and CSV or TSV as a table (first 2000 rows). `Esc` or `✕` closes it. Other files, URLs and `⌘`/`ctrl` + click open in a new tab.

// cards and highlights are stored as HTML inside the .md, so the file still opens in Obsidian or on GitHub. See [notes/](notes.md)
