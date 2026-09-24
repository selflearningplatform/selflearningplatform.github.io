---
tag: setup
endpoint: /slp-init
copy: true
---

# New topic

Registers a new topic so the first session starts with a clear mission and the level already measured.

```usage
/slp-init
I want to start studying HTTP.
```

```output
topics/http-basics/
├── topic.json
├── learning.md
└── progress/{status,log}.md
agent/agents/teacher-http-basics.md
```

- **triggers**: "I want to start studying X", "create a new topic"
- **asks**: title, type (book, certification, documentation, course, practice), area, goals, reason, languages, sources
- **writes**: `topic.json`, `learning.md`, `progress/`, optional `agent/agents/teacher-<slug>.md`

## Steps

1. interview
2. generate the filesystem
3. informal level diagnosis
4. the topic's teacher agent
5. wrap up
