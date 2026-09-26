---
tag: prep
endpoint: /slp-summarize
copy: true
---

# Summarize

Summarizes a text and appends it to a note, following the format the notes already use, and files the source into the topic's wiki.

```usage
/slp-summarize resources/ch-02.pdf
into notes/02-caching.md, extensive
```

- **source**: pasted, attached, a file in `resources/`, or a `path` in `links`
- **destination**: the note you name or are working on. None fits: a new `notes/NN-<slug>.md`
- **levels**: `compact` · `medium` (default) · `extensive`
- **writes**: appends to `topics/<slug>/notes/*.md` in `language.notes`, a source page and the concepts it touches in the [wiki](wiki.md), **Summary written** in `status.md`
- **after**: asks whether this finished the unit
