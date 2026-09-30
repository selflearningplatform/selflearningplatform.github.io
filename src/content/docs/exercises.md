---
tag: dir
endpoint: topics/<slug>/exercises/<exercise>/
---

# exercises/

Applied work. A `prompt.md` from [slp-exercises](slp-exercises.md), your submissions in `attempts/`, and the feedback from [slp-grade](slp-grade.md) next to each one. Submit in the app's Exercises tab, or drop a file with any extension into `attempts/` by hand.

```tree
exercises/choose-status-codes/
├── prompt.md
├── draft.json                        # work in progress, autosaved by the app
├── img/
│   └── 3f2a9c.png                    # images attached to attempts
└── attempts/
    ├── 2026-09-24T1800.md            # your submission
    └── 2026-09-24T1800.feedback.md   # feedback
```

- **submission**: `.md` for prose, the language's extension for code. The app writes one `.md`
- **images**: shared `img/<hash>.<ext>`, referenced from the attempt as `![](img/<file>)`. The grader looks at each one; a missing or unreadable image fails the criteria it was for
- **draft**: `draft.json` is not an attempt: never graded, deleted on submit
- **pending**: a submission without its `.feedback.md`
- **feedback**: same shape as an [exam's](exams.md), scored as `**Prompt criteria:** met/total`

## prompt.md

```prompt.md
# Exercise — Pick the status code

**Format:** apply · **Unit:** 01 · **Rests on:** Methods and status codes › Status codes

The task, with conditions that can be checked one by one.

**Submit:** a `.md` with …
```

| field | meaning |
| --- | --- |
| `Format` | `apply` · `build` · `critique` · `teach` |
| `Unit` | the unit number it belongs to |
| `Rests on` | the note headings it builds on |
| `Submit` | what to hand in, e.g. "an image of the map attached in the Exercises tab" |

The conditions in the task are the grading criteria.
