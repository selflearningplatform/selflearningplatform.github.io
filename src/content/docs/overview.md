---
tag: repo
endpoint: self-learning-platform
---

# Overview

SLP is a self-hosted study environment you fully own: it runs on your machine, needs no subscription, and works with any agent and any model, local or paid.

## Why

Reading is not learning. SLP is built around the loop that turns material into knowledge you can defend:

```loop
input      a book, course, paper, class, audiobook
  ↓
read       listen, read, understand the material
  ↓
logic      connect it to what you already accept
  ↓
internalize  the concept holds up on its own
  ↓
externalize  write, explain, build · get feedback · again
  ↓
defend     exams, with the topic's own language
```

The first steps are yours. The rest needs someone who explains, points out your mistakes and makes you try again. That is the role of the agent: a teacher that probes your level, grades against a rubric, records what you got wrong and brings it back before you forget it.

Knowledge you can't express was never learned. So every step ends in something you produce: notes, answers, exercises, exams.

## Pieces

```repo
self-learning-platform/
├── AGENTS.md    # read by any agent
├── agent/
│   ├── skills/     # slp-*/SKILL.md
│   ├── agents/     # researcher, teacher-*
│   └── reference/  # shared file formats and rules
├── app/         # uv run slp
└── topics/
    └── example/
```

Four pieces talk to each other through the filesystem:

| path | role |
| --- | --- |
| `agent/skills/` | the method: teach, build exams, exercises and cards, grade, quiz |
| `agent/agents/` | a researcher that verifies, and a teacher per topic |
| `topics/<slug>/` | notes in Markdown, exams and cards in JSON, attempts, a wiki, progress. No database |
| `app/` | local notebook, exam simulator and flashcards, with dictation, Mermaid and LaTeX. Tracks your study sessions |

## Layers

- **core**: the app, your notes, exams, cards and session tracking. Needs no agent or model, and every file is plain Markdown or JSON you can write by hand
- **agent layer** (optional): skills and agents for teaching, grading, feedback, progress and the wiki, on whatever model you plug in

Next: [prerequisites](prerequisites.md) · [AI teacher](ai-teacher.md) · [deploy](deploy.md).
