---
tag: agent
endpoint: agent/agents/researcher.md
---

# Researcher

Verifies a fact or maps a topic and returns a short report with sources. Used before teaching or grading anything that isn't certain, and to survey a topic before planning a lesson. Works in an isolated context.

```report
**Verdict:** correct
## Summary
PUT is idempotent (RFC 9110 §9.2.2) ...
## Findings
## Source choice
## Sources
## Gaps
```

- **tools**: WebSearch, WebFetch, Read, Grep, Glob
- **source mode**: follows the topic's `sources_mode`: `web`, `local` or `both`
- **verdicts**: `correct`, `correct (local only)`, `incorrect`, `unverifiable`
- **conflicts**: picks one with confidence; an earlier `Source choice` in `learning.md` decides, otherwise the topic's own material wins unless outdated. The decision comes back as a **Source choice** to copy into `learning.md`
- **writes**: nothing. The caller files verified findings into the topic's [wiki](wiki.md)

## Process

1. break the question into 2–4 facets
2. search from different angles
3. read the 2–3 best pages whole
4. synthesize, with sources
