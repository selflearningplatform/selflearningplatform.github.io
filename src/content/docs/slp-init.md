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
├── resources/  notes/  exams/  exercises/
├── wiki/index.md
└── progress/{status.md,log.md,sessions.jsonl}
agent/agents/teacher-http-basics.md
```

- **manual only**: `disable-model-invocation: true`. Call `/slp-init`; the agent won't start it on its own
- **asks**: title, subtitle, type (book, certification, documentation, course, practice), area, goals, reason, languages, routine, end date, unit list, sources, `sources_mode`
- **sources**: offers to copy each local `path` into `resources/`. `sources_mode` defaults from your [profile](profiles.md)
- **slug**: kebab-case of the title. Stops if the folder exists
- **writes**: `topic.json`, `learning.md` with the Mission, empty `resources/ notes/ exams/ exercises/`, `wiki/index.md`, `progress/`, optional teacher persona
- **first quiz**: runs [slp-quiz](slp-quiz.md), which builds the bank in `exams/quiz/` and measures your level in the chat. The edges go to `learning.md`
- **teacher**: offers a [persona](teacher.md) for the topic, default yes. Declining writes `"teacher": false` to `topic.json`

## Steps

1. interview
2. generate the filesystem
3. first quiz
4. the topic's teacher persona
5. wrap up
