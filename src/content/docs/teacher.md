---
tag: agent
endpoint: agent/agents/teacher-<slug>.md
---

# Teacher

A teaching persona, one per topic, offered by [slp-init](slp-init.md). A specialist who would teach this in real life, never a generic "\<area> teacher".

```frontmatter
---
name: teacher-http-basics
description: Teaching persona for the "http-basics" topic, adopted by the main agent while running slp-teach. Not for delegation.
---
You are ...
## How you teach
## What you don't do
```

- **persona, not subagent**: [slp-teach](slp-teach.md) reads the file and the agent teaches as it in the same conversation. A subagent couldn't ask you questions or wait for your go-ahead
- **process**: the same as `slp-teach`, with the persona's voice and the topic's typical traps
- **memory**: none of its own. It reads the topic's `learning.md`
- **rules**: never gives the answer before you try; verifies doubtful facts with the [researcher](researcher.md)
- **missing one**: `slp-session` offers to create it. Declining writes `"teacher": false` to `topic.json` so it isn't offered again
- **git**: personal and ignored
