---
tag: plan
endpoint: /slp-session
copy: true
---

# Session

Entry point of a study session. Surveys every topic, asks what you want to do today and hands off to the right skill. It orchestrates; it doesn't write.

```usage
/slp-session
```

```output
http-basics   ch-02 · 1 attempt ungraded
fosa          3 cards due in review
# what do you want to do today?
```

- **triggers**: "let's start", "what do I study today", "what's pending"
- **reads**: `topics/*/topic.json`, `progress/status.md`, ungraded attempts, overdue reviews
- **writes**: nothing

## Steps

1. survey, without asking
2. complete `topic.json` if needed
3. ask for the session goal
4. hand off
