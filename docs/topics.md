---
tag: dir
endpoint: topics/<slug>/
---

# Topic folder

Everything about a topic lives in one folder, as Markdown and JSON. It reads fine on GitHub, in Obsidian or in any editor.

```tree
topics/<slug>/
├── topic.json
├── learning.md
├── resources/
├── notes/
│   └── 01-<chapter>.md
├── exams/
│   └── <exam>/
│       ├── exam.json
│       └── attempts/
│           ├── <date>.json
│           ├── <date>-p3.webm
│           └── <date>.md
├── exercises/
│   └── <exercise>/
│       ├── prompt.md
│       └── attempts/<date>.<ext>
└── progress/
    ├── status.md
    └── log.md
```

- **git**: `topics/*` is ignored except `topics/example/`
- **review**: `topics/review/` holds cross-topic reviews
