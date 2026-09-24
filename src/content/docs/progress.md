---
tag: dir
endpoint: topics/<slug>/progress/
---

# progress/

Where you are and what happened. Written by the skill that produced the event, never by `slp-session`.

```status.md
# Status — HTTP basics
**Updated:** 2026-09-22
- **Current unit:** ch-02
- **Summary written:** yes
- **Next exam:** ch-02
```

```log.md
## Exams
| Date | Exam | MC | Rubric | Attempt |
```

- **status.md**: the present: current unit, summary written, next exam. Rewritten, not accumulated
- **log.md**: session history, one row per event. Old rows are never deleted
- **dates**: always `YYYY-MM-DD`, never relative
