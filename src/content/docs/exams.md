---
tag: dir
endpoint: topics/<slug>/exams/<exam>/
---

# exams/

One folder per exam, named by unit (`ch-01`, `domain-02`). Attempts are named by the minute they were made and point at questions by position.

```tree
exams/ch-01/
├── exam.json
└── attempts/
    ├── 2026-09-24T1030.json    # your answers
    ├── 2026-09-24T1030-p3.webm # oral answer
    └── 2026-09-24T1030.md      # feedback
```

- **written by**: [slp-exam](slp-exam.md), the app, [slp-grade](slp-grade.md)
- **pending**: an attempt without its `.md` feedback
