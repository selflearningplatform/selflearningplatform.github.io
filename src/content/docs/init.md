---
tag: skill
endpoint: /slp-init
copy: true
---

# Init your first topic

A topic is anything you study: a book, a certification, a paper, a course. Run `/slp-init` and the agent interviews you, creates the folder, checks your level and offers a dedicated teacher.

```creates
topics/<slug>/
├── topic.json    # goals, languages, sources
├── learning.md   # mission, glossary, record
└── progress/
    ├── status.md
    └── log.md
```

`topics/example/` is a small one to look at. Your own topics are git-ignored.

Full reference: [slp-init](slp-init.md) · [topics/\<slug>](topics.md).
