---
tag: planned
endpoint: not built yet
---

# Roadmap

Planned, not built. Nothing on this page works today.

- **review cards UI**: Leitner review exists as an exam from `slp-review`; an interactive card view in the app does not
- **theme builder**: build a theme from one color, with the palette derived for you
- **custom shortcuts**: pick your own key for dictation instead of `ctrl+m`
- **session log**: each session recorded with start and end time and what was done: reading, teaching, review, exercise, exam, feedback
- **session recovery**: when a session never closed, the next one detects it and estimates what was done
- **placement test, again**: rerun the level check from `slp-init` from time to time to track progress
- **topic knowledge base**: the agent keeps its own record of what was studied, following the [Open Knowledge Format](https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf) and the [LLM wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) pattern: Markdown files with YAML frontmatter, written while teaching. Today the only memory is `learning.md` and `progress/`
- **other agents**: test `slp-setup` on Codex, Gemini CLI, Antigravity and Cline
- **Windows ARM**: native dictation

Ideas and bugs: [open issues](https://github.com/GustavoPenaBeltrami/self-learning-platform/issues).
