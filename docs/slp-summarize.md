---
tag: prep
endpoint: /slp-summarize
copy: true
---

# Summarize

Summarizes a text and appends it to a note, following the format the notes already use.

```usage
/slp-summarize resources/ch-02.pdf
into notes/02-caching.md, extensive
```

- **source**: pasted, attached, a file in `resources/`, or a `path` in `links`
- **levels**: `compact` · `medium` (default) · `extensive`
- **writes**: appends to `topics/<slug>/notes/*.md` in `language.notes`
