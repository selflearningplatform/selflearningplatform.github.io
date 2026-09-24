---
tag: prompt
endpoint: Read AGENTS.md and run slp-setup.
copy: true
---

# Setup

Open your agent at the repo root and send the prompt. It detects which agent it is and exposes the skills in that agent's format: symlinks if it supports them, conversion if not.

```what it runs · claude code
mkdir -p .claude
ln -s ../agent/skills .claude/skills
ln -s ../agent/agents .claude/agents
```

- **writes**: only local files; each one goes to `.git/info/exclude`, never to `.gitignore`
- **source**: `agent/` is the single source. Edit skills there, then rerun if you use conversion

| agent | instructions · skills · subagents |
| --- | --- |
| Claude Code | `CLAUDE.md` · `.claude/skills/` · `.claude/agents/` |
| Codex | `AGENTS.md` · `.agents/skills/` · — |
| Gemini CLI | `GEMINI.md` · `.gemini/skills/` · — |
| others | usually `AGENTS.md` or a rules folder |

Full reference: [slp-setup](slp-setup.md).
