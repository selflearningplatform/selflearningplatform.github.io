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
│   ├── slp-teach/SKILL.md
│   └── ...
└── agents/
    ├── researcher.md
    └── teacher-<slug>.md  # ignored
```

Skill list and tool-name mapping: [skills](skills.md). Agents: [researcher](researcher.md), [teacher-\<slug>](teacher.md).
