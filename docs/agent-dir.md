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

| in a skill | means |
| --- | --- |
| `AskUserQuestion` | ask with options, or a numbered question |
| `Agent` | delegate to `agent/agents/X.md`, or follow it yourself |
| `WebSearch` | search the web, as `sources_mode` allows |
