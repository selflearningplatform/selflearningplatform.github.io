---
tag: file
endpoint: topics/<slug>/learning.md
---

# learning.md

The topic's memory: what you've shown you know, and what you got wrong and corrected. Every skill reads it before writing.

```shape
# Learning — <topic>
## Mission
## Glossary
## Record
### 0002 — 2026-09-23 — Mixed up 404 and 503 under load — corrected
### 0001 — 2026-09-22 — Declared prior knowledge: GET and POST
```

- **mission**: why you study this and what is out of scope, from `goals` and `reason` in [topic.json](topic-json.md). A change is confirmed with you and gets a Record entry
- **glossary**: terms you can already use, one or two sentences each. Synonyms to avoid go under `_Avoid_`
- **record**: entries numbered from `0001`, newest first. One is written only when you demonstrated real understanding, declared prior knowledge, corrected a misconception, moved the Mission, or a source conflict was settled (`Source choice: <claim>`). Covering a topic is not one
- **superseded**: an entry is never deleted. A newer one that contradicts it adds `Superseded by NNNN` to the old one

The [wiki](wiki.md) maps the subject; this file holds what you know of it.
