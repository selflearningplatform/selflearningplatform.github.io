---
tag: 9 skills
endpoint: agent/skills/slp-*/SKILL.md
---

# Skills

Every skill can be called by name, `/slp-teach`. Two are manual only: `slp-setup` and `slp-init` set `disable-model-invocation: true`, so the agent never starts them on its own. The rest can also be started by the agent when your message matches their description.

- **manual**: runs only when you call it
- **invoked**: runs when you call it or ask for that exact job
- **auto**: the agent also starts it without being named, on the triggers below

| skill | step | starts | also triggered by |
| --- | --- | --- | --- |
| [slp-setup](slp-setup.md) | setup | manual | — (first run: point the agent at the file, see [getting started](getting-started.md)) |
| [slp-init](slp-init.md) | setup | manual | — |
| [slp-session](slp-session.md) | plan | auto | opening a session with no concrete request |
| [slp-summarize](slp-summarize.md) | prepare | invoked | pasting a fragment to condense |
| [slp-teach](slp-teach.md) | prepare | auto | anything that needs explaining: "explain", "I don't get it" |
| [slp-exercises](slp-exercises.md) | practice | auto | `slp-session` finds notes but no exercises |
| [slp-exam](slp-exam.md) | practice | invoked | pasting content and asking for a quiz |
| [slp-grade](slp-grade.md) | feedback | auto | an exam with open or oral questions, a submitted exercise |
| [slp-review](slp-review.md) | review | auto | finishing a block, "I'm forgetting this" |

## Hand-offs

`slp-session` asks what you want today and calls the right skill. When a topic has its own [teacher](teacher.md), lessons go to that agent instead of `slp-teach`.

```loop
slp-session ─┬─ slp-summarize
             ├─ slp-teach ──── teacher-<slug>
             ├─ slp-exercises ─┐
             ├─ slp-exam ──────┼─ slp-grade
             └─ slp-review ────┘
```

## Tool names

Skills name Claude Code tools. Other agents map them, as `AGENTS.md` explains:

| in a skill | means |
| --- | --- |
| `AskUserQuestion` | ask with options, or a numbered question |
| `Agent` | delegate to `agent/agents/X.md`, or follow it yourself |
| `WebSearch` | search the web, as `sources_mode` allows |
