---
tag: prac
endpoint: /slp-exercises
copy: true
---

# Exercises

An exam tests whether something was understood. An exercise forces you to use it to produce something new: code, an ADR, a critique, an explanation.

```output
exercises/adr-topic-vs-queue/
├── prompt.md
└── attempts/
    ├── 2026-09-24T1030.md
    └── 2026-09-24T1030.feedback.md
```

- **triggers**: "I want an exercise", "apply what I learned", `slp-session` on a finished unit
- **aims at**: the latest thing learned, or a misconception you corrected
- **formats**: apply · build · critique · teach. Default by the topic's `type`
- **reads**: `topic.json`, `status.md`, `learning.md`, the unit's notes and wiki pages, existing exercises
- **writes**: `exercises/<slug>/prompt.md`. You submit `attempts/<YYYY-MM-DDTHHmm>.<ext>`
- **graded by**: [slp-grade](slp-grade.md)
