---
tag: setup
endpoint: /slp-setup
copy: true
---

# Agent setup

Exposes `agent/skills` and `agent/agents` in the running agent's native format, without touching anything versioned.

```usage
Read AGENTS.md and run slp-setup.
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

- **triggers**: first time with a new agent, "set up the project", "install the skills"
- **reads**: `profile` in `settings.json`, the agent's current docs
- **writes**: symlinks or converted files, plus `.git/info/exclude`

## Order of preference

1. nothing: the agent reads `AGENTS.md`
2. symlink to `agent/`
3. conversion, only for what doesn't fit
