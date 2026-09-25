---
tag: 10 min
endpoint: agent/skills/slp-setup/SKILL.md · /slp-init
---

# Getting started

Know what you want before you open the agent. Then two skills: one sets up the agent, one sets up the topic.

## Have this ready

| what | example |
| --- | --- |
| subject | *HTTP basics*, the AWS Cloud Practitioner cert, a novel |
| sources | a PDF on disk, a course URL, the official docs |
| timeframe | an end date: `2026-12-01` |
| frequency | cadence and session length: 3× a week, 45 min |
| goal | 1–3 concrete goals, and why: "justify PUT vs POST in a review" |

`slp-init` asks for all of it. Vague goals get asked again: they become the topic's mission.

## 1 · Set up the agent

Open your agent at the repo root and send:

```agent
Read AGENTS.md, then read agent/skills/slp-setup/SKILL.md and follow it.
```

On the first run your agent hasn't loaded the skills yet, so it can't call `/slp-setup`: the prompt points it at the file. It detects which agent it is and exposes `agent/skills` and `agent/agents` in that agent's format: symlinks if it supports them, conversion if not. Everything it creates goes to `.git/info/exclude`.

```what it runs · claude code
mkdir -p .claude
ln -s ../agent/skills .claude/skills
ln -s ../agent/agents .claude/agents
```

Full reference: [slp-setup](slp-setup.md).

## 2 · Create a topic

A topic is anything you study: a book, a certification, a tool's docs, a course. The skills are loaded now, so call it by name.

```agent
/slp-init
I want to start studying HTTP.
```

The agent interviews you, creates the folder, checks your level with a few questions and offers a dedicated teacher.

```creates
topics/<slug>/
├── topic.json    # goals, languages, sources, routine
├── learning.md   # mission, glossary, record
├── resources/  notes/  exams/  exercises/
└── progress/
    ├── status.md
    └── log.md
```

`topics/example/` is a small one to look at. Your own topics are git-ignored.

## 3 · Study

Start the app with `uv run slp`, and each session with `/slp-session`: it shows what's pending and hands off to the right skill.

Full reference: [slp-init](slp-init.md) · [skills](skills.md) · [topics/\<slug>](topics.md).
