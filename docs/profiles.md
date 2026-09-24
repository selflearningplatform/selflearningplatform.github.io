---
tag: setting
endpoint: settings.json → profile
---

# Profiles

How the agent layer and dictation run. Chosen at setup, changeable in `/settings`. The core is the same in all of them.

```reference stack · offline
OLLAMA_CONTEXT_LENGTH=32768 ollama serve
# model
qwen3-coder:30b   # or gpt-oss:20b on 16 GB
# agent
opencode
```

| profile | behaviour |
| --- | --- |
| `auto` | default. Online when there is a connection at start, offline otherwise |
| `online` | a paid agent, web lookups, the largest dictation model. Recommended |
| `offline` | everything on your machine. Nothing is fetched; what is missing falls back |

// grading and teacher judgment are weaker on local models: treat that output as a draft
