---
tag: setting
endpoint: settings.json → global.profile
---

# Profiles

How the agent layer and dictation run. Chosen at setup, changeable in settings → global. The core is the same in all of them.

```reference stack · offline
OLLAMA_CONTEXT_LENGTH=32768 ollama serve
# model
qwen3-coder:30b   # or gpt-oss:20b on 16 GB
# agent
opencode
```

| profile | behaviour |
| --- | --- |
| `auto` | default. Online when the server finds a connection at start, offline otherwise |
| `online` | a paid agent, web lookups, dictation models downloaded when missing |
| `offline` | everything on your machine. Nothing is fetched |

- **read by**: [slp-setup](slp-setup.md), to recommend an agent, and [slp-init](slp-init.md), for the default `sources_mode`: `offline` → `local`, `online` → `both`, `auto` → `both` with web access, `local` without

// grading and teacher judgment are weaker on local models: treat that output as a draft
