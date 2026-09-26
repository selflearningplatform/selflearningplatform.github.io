---
tag: dir
endpoint: topics/<slug>/
---

# Topic folder

Everything about a topic lives in one folder, as Markdown and JSON. It reads fine on GitHub, in Obsidian or in any editor, and you can write any of it by hand. The agent is needed for the judgment: teaching, grading, reading your sessions and keeping the wiki.

```tree
topics/<slug>/
├── topic.json
├── learning.md
├── resources/
├── notes/
│   └── 01-<chapter>.md
├── wiki/
│   ├── index.md
│   ├── concepts/
│   └── sources/
├── exams/
│   └── <exam>/
│       ├── exam.json
│       └── attempts/
│           ├── <date>.json
│           ├── <date>-p3.webm
│           └── <date>.feedback.md
├── exercises/
│   └── <exercise>/
│       ├── prompt.md
│       └── attempts/
│           ├── <date>.<ext>
│           └── <date>.feedback.md
├── cards/
│   ├── cards.json
│   └── reviews.jsonl
└── progress/
    ├── status.md
    ├── log.md
    └── sessions.jsonl
```

- **slug**: the folder name, kebab-case of the title: `http-basics`
- **resources/**: your material, served as is by the app. Always a source. Skills never edit it. Add files by hand or upload them from the [notes](editor.md) view
- **dates**: `YYYY-MM-DD`, never relative. File names and ids use the minute: `2026-09-24T1030`
- **git**: `topics/*` is ignored except `topics/example/`, a complete topic to copy from
- **reference**: every format, with its rules, is in `agent/reference/formats.md` in the repo
