---
tag: agent
endpoint: agent/agents/researcher.md
---

# Researcher

Verifies a fact or maps a topic and returns a short report with sources. Used before teaching anything that isn't certain. Works in an isolated context.

```report
correct              PUT is idempotent (RFC 9110 §9.2.2)
correct (local only) ...
not verified on web  ...
Gaps: ...
```

- **tools**: WebSearch, WebFetch, Read, Grep, Glob
- **source mode**: follows the topic's `sources_mode`: `web`, `local` or `both`
- **conflicts**: picks one with confidence; the topic's own material wins unless outdated

## Process

1. break the question into 2–4 facets
2. search from different angles
3. read the 2–3 best pages whole
4. synthesize, with sources
