---
tag: feed
endpoint: /slp-grade
copy: true
---

# Grade

Checks each rubric or prompt point, says what's missing (not just "it's wrong"), and records it so review and the next session can use it.

```attempts/2026-09-24T1030.md
# Attempt — ch-01 — 2026-09-24 10:30
## [02] Open — 409 vs 400
✓ names the conflict with state
✕ no decision criterion
## What to improve
...
```

- **pending**: `attempts/<date>.<ext>` without its `<date>.md`
- **writes**: `attempts/<date>.md`, `learning.md`, `progress/log.md`, `status.md`
- **date**: always `YYYY-MM-DDTHHmm`
