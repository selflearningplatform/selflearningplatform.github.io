---
tag: dir
endpoint: topics/<slug>/wiki/
---

# wiki/

The agent's own map of the subject: its concepts, how they depend on each other, the sources behind them, and in which sessions you studied each one. It follows the [Open Knowledge Format](https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf) (OKF) and the [LLM wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) pattern: Markdown pages with YAML frontmatter, written and kept current by the agent. The app doesn't show it; it opens fine in Obsidian or on GitHub.

```tree
wiki/
├── index.md                  # catalog, one line per page
├── concepts/
│   └── idempotency.md        # one idea per page
└── sources/
    └── mdn-http-overview.md  # one per resource, link or chapter
```

- **not your notes**: [notes/](notes.md) is your writing and [learning.md](learning-md.md) what you've shown you know. The wiki holds no scores and no "you know X"
- **language**: written in `language.notes` of [topic.json](topic-json.md); frontmatter keys stay in English

## Page

```concepts/idempotency.md
---
type: Concept
title: Idempotency
description: A request that leaves the server in the same state whether sent once or many times.
depends_on: [/concepts/safe-method.md]
studied: [2026-09-22T1700, 2026-09-26T1010]
generated: { by: slp-teach/<model>, at: 2026-09-22T18:30:00Z }
sources:
  - id: mdn
    resource: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
    title: "MDN: Overview of HTTP"
---

# Definition

N identical requests leave the server as one does.[^mdn]

# Common confusions

Idempotent doesn't mean "same response".

[^mdn]: MDN: Overview of HTTP
```

| field | meaning |
| --- | --- |
| `type` | `Concept` or `Source` |
| `title` | the page name |
| `description` | one sentence, repeated in the index |
| `depends_on` | Concepts: pages this one builds on. May be empty |
| `studied` | Concepts: ids of the [sessions](progress.md) in which you studied it, oldest first. Empty or missing: not studied yet |
| `generated` | the skill and model that last edited it, and when, in UTC |
| `sources` | `{ id, resource, title }` per source cited. `resource` is a URL, or a path relative to the page for `resources/` files |
| `tags`, `status` | optional. `status: draft`, or `deprecated` to retire a page |

- **citations**: each sourced claim has a footnote keyed by a `sources` id
- **links**: relative to the wiki folder (`/concepts/x.md`). A link to a page not written yet is fine
- **identity**: the path. A page is never renamed; it is retired with `status: deprecated`
- **common confusions**: the one section drawn from you, and it names no one
- **source conflicts**: the page states the version chosen; the decision goes to the `learning.md` Record

## index.md

No frontmatter except the format version. Updated in the same turn as every page write.

```index.md
---
okf_version: "0.2"
---
# Concepts

* [Idempotency](concepts/idempotency.md) - A request that leaves the server in the same state whether sent once or many times.

# Sources

* [MDN: Overview of HTTP](sources/mdn-http-overview.md) - What HTTP is, its message shape and its methods.
```

## Who writes it

| writer | when |
| --- | --- |
| [slp-init](slp-init.md) | creates `index.md` with empty sections |
| [slp-teach](slp-teach.md) | end of a lesson: one Concept per idea taught, the session added to `studied` |
| [slp-summarize](slp-summarize.md) | after a summary: one Source page and the Concepts it touches |
| [slp-session](slp-session.md) | closing or validating a session with reading: the Concepts in the notes you changed |
| [researcher](researcher.md) | its verified findings, filed by the skill that called it into the matching Concept |

Read by `slp-session` for progress, and by `slp-teach`, `slp-exam`, `slp-exercises` and `slp-quiz`.
