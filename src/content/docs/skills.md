---
tag: 10 skills
endpoint: agent/skills/slp-*/SKILL.md
---

# Skills

Every skill can be called by name, `/slp-teach`. Two are manual only: `slp-setup` and `slp-init` set `disable-model-invocation: true`, so the agent never starts them on its own. The rest can also be started by the agent when your message matches their description.

- **manual**: runs only when you call it
- **invoked**: runs when you call it or ask for that exact job
- **auto**: the agent also starts it without being named, on the triggers below

| skill | step | starts | also triggered by |
| --- | --- | --- | --- |
| [slp-setup](slp-setup.md) | setup | manual | none (first run: point the agent at the file, see [getting started](getting-started.md)) |
| [slp-init](slp-init.md) | setup | manual | none |
| [slp-session](slp-session.md) | plan | auto | opening a session with no concrete request, "I'm done for today", "I finished chapter X" |
| [slp-summarize](slp-summarize.md) | prepare | invoked | pasting a fragment to condense |
| [slp-teach](slp-teach.md) | prepare | auto | anything that needs explaining: "explain", "I don't get it" |
| [slp-exercises](slp-exercises.md) | practice | auto | `slp-session` recommends one for a finished unit |
| [slp-exam](slp-exam.md) | practice | invoked | pasting a chapter and asking for an exam on it |
| [slp-grade](slp-grade.md) | feedback | auto | sitting an exam or quiz in the app, submitting an exercise |
| [slp-quiz](slp-quiz.md) | control | auto | `slp-init` on a new topic, `slp-session` says a quiz is due |
| [slp-cards](slp-cards.md) | review | auto | finishing a unit's notes |

## Hand-offs

`slp-session` asks what you want today and calls the right skill. When a topic has a [teacher persona](teacher.md), `slp-teach` teaches as it.

```loop
slp-session ─┬─ slp-summarize
             ├─ slp-teach ───── as teacher-<slug>
             ├─ slp-cards ───── cards tab
             ├─ slp-exercises ─┐
             ├─ slp-exam ──────┼─ slp-grade
             └─ slp-quiz ──────┘
```

At the end of a unit, `slp-session` recommends them in order: cards, then an exercise, then an exam.

## Sessions

Every skill logs its work as an `activity` line in `progress/sessions.jsonl` when it starts on a topic, opening a session only if none is open. `slp-session` validates what was recorded. Format: [progress/](progress.md).

## Tool names

Skills name Claude Code tools. Other agents map them, as `AGENTS.md` explains:

| in a skill | means |
| --- | --- |
| `AskUserQuestion` | ask with options, or a numbered question |
| `Agent` | delegate to `agent/agents/X.md`, or follow it yourself |
| `WebSearch` | search the web, as `sources_mode` allows |
| `Bash` | run a command, or ask you to run it and paste the output |
