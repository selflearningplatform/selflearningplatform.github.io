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

- **manual only**: `disable-model-invocation: true`. Call `/slp-init`; the agent won't start it on its own
- **asks**: title, subtitle, type (book, certification, documentation, course, practice), area, goals, reason, languages, routine, end date, sources, `sources_mode`
- **slug**: kebab-case of the title. Stops if the folder exists
- **writes**: `topic.json`, `learning.md`, `progress/`, empty `resources/ notes/ exams/ exercises/`, optional `agent/agents/teacher-<slug>.md`
- **diagnosis**: 5–8 questions in the terminal, not saved as an exam. The result goes to `learning.md`

## Steps

1. interview
2. generate the filesystem
3. informal level diagnosis
4. the topic's teacher agent
5. wrap up
