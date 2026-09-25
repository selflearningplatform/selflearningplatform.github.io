---
tag: setup
endpoint: /slp-setup
copy: true
---

# Agent setup

Exposes `agent/skills` and `agent/agents` in the running agent's native format, without touching anything versioned.

```usage
Read AGENTS.md, then read agent/skills/slp-setup/SKILL.md and follow it.
```

```opencode.json · offline
{
"provider": {
    "ollama": {
      "npm": "@ai-sdk/openai-compatible",
      "options": { "baseURL": "http://localhost:11434/v1" },
      "models": { "qwen3-coder:30b": {} }
    }
}
}
```

- **manual only**: `disable-model-invocation: true`. On the first run the skills aren't loaded yet, so point the agent at the file; later, `/slp-setup` works
- **when**: first time with a new agent, or after editing `agent/` if your agent uses conversion
- **reads**: `profile` in `settings.json`, the agent's current docs
- **writes**: symlinks or converted files, plus `.git/info/exclude`

## Order of preference

1. nothing: the agent reads `AGENTS.md`
2. symlink to `agent/`
3. conversion, only for what doesn't fit
