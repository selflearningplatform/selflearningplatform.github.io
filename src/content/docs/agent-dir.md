---
tag: dir
endpoint: agent/
---

# agent/

The single source of the agent layer. Skills use the Agent Skills format: `name` + `description` frontmatter, instructions below. Agents without skill support read the matching `SKILL.md` by hand, as `AGENTS.md` explains.

```tree
agent/
├── skills/
│   ├── slp-session/SKILL.md
│   ├── slp-setup/SKILL.md
│   ├── slp-init/SKILL.md
│   ├── slp-summarize/SKILL.md
│   ├── slp-teach/
│   │   ├── SKILL.md
│   │   └── references/philosophy.md
│   ├── slp-exercises/SKILL.md
│   ├── slp-exam/SKILL.md
│   ├── slp-grade/SKILL.md
│   ├── slp-quiz/SKILL.md
│   └── slp-cards/SKILL.md
├── agents/
│   ├── researcher.md
│   └── teacher-<slug>.md  # ignored
└── reference/
    ├── formats.md
    ├── graded-questions.md
    └── sources.md
```

- **skills/**: edit them here, never in a copy inside an agent's own folder. [slp-setup](slp-setup.md) links or converts them for your agent
- **reference/**: what several skills share, so no skill restates it. `formats.md` is every file under `topics/<slug>/`, `graded-questions.md` the rules for questions with a right answer, `sources.md` which sources count and how to settle a conflict between them

Skill list and tool-name mapping: [skills](skills.md). Agents: [researcher](researcher.md), [teacher-\<slug>](teacher.md).
