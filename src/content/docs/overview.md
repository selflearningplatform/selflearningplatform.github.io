---
tag: repo
endpoint: self-learning-platform
---

# Overview

SLP is a self-hosted study environment you fully own: it runs on your machine, needs no subscription, and works with any agent and any model, local or paid.

```repo
self-learning-platform/
├── AGENTS.md    # read by any agent
├── agent/
│   ├── skills/  # slp-*/SKILL.md
│   └── agents/  # researcher, teacher-*
├── app/         # uv run slp
└── topics/
    └── example/
```

Four pieces talk to each other through the filesystem:

| path | role |
| --- | --- |
| `agent/skills/` | the method: teach, build exams and exercises, grade, review |
| `agent/agents/` | a researcher that verifies, and a teacher per topic |
| `topics/<slug>/` | notes in Markdown, exams in JSON, attempts, progress. No database |
| `app/` | local notebook and exam simulator, with dictation, Mermaid and LaTeX |

## Layers

- **core**: the app, handwritten notes, sitting exams and reviewing. Needs no model at all
- **agent layer**: skills and agents that automate teaching, exams, grading and review, on whatever model you plug in
