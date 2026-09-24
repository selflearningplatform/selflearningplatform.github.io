---
tag: prep
endpoint: /slp-teach
copy: true
---

# Teach

Teaches so it ends up understood, not memorized. Probes your real level, plans the topic as a dependency graph and builds it node by node from truths you already accept.

```usage
/slp-teach why is PUT idempotent and POST not?
```

````notes/03-idempotency.md
# Idempotency
```mermaid
graph TD
safe --> idempotent
idempotent --> retries
```
## Why it matters
...
````

- **triggers**: "teach me", "explain", "I don't get it", any explanation
- **principles**: unconditional truths first · "how could I have discovered this myself?"
- **writes**: a new `notes/NN-title.md`, `learning.md`, `progress/status.md`

## Process

1. probe, never skipped
2. plan the dependency graph
3. teach, node by node
