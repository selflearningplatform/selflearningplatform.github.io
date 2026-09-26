---
tag: feed
endpoint: /slp-grade
copy: true
---

# Grade

Checks each rubric or prompt point, says what's missing (not just "it's wrong"), and records it so the next exercise, exam and session can use it. Every attempt goes through it, multiple choice only too: it is what logs the score.

```attempts/2026-09-24T1030.feedback.md
# Attempt — 01-methods-and-codes — 2026-09-24 10:30
**MC:** 3/4 · **Rubric points:** 2/3
## [05] Open — 409 vs 400
✓ names the conflict with state
✗ no decision criterion. See *Methods and status codes › Status codes*
## What to improve
...
```

- **grades**: exam, exercise and quiz attempts. Oral answers recorded as audio are transcribed first
- **pending**: `attempts/<date>.<ext>` without its `<date>.feedback.md`
- **facts**: graded against the version you were taught; doubtful ones go to the [researcher](researcher.md)
- **writes**: `attempts/<date>.feedback.md`, `learning.md`, a row in `progress/log.md`, `status.md` if the present changed
- **after**: the score, the weakest point and one next step: `slp-teach`, `slp-exercises` or `slp-cards`
- **date**: always `YYYY-MM-DDTHHmm`
