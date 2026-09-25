---
tag: 1 required
endpoint: uv
---

# Prerequisites

One thing is required. The rest is recommended, not needed.

## Required

- **uv**: installs Python (≥ 3.9) and the packages on its own. See [installation](install.md)
- **internet, once**: the first `uv run slp` downloads the packages. After that it aims to work offline: Mermaid, KaTeX and the fonts ship in `app/vendor/`

## Recommended

| software | why |
| --- | --- |
| [Claude Code](https://claude.com/claude-code) | the agent the skills are written for. Any agent works, see [slp-setup](slp-setup.md) |
| [VS Code](https://code.visualstudio.com/) | to read and edit the topic files, and run the agent in its terminal |
| [GitHub](https://github.com/) | to keep your topics in your own private repo |
| [git](https://git-scm.com/) | to clone the repo |

// the core (notes, exams, the app) needs no agent at all. The agent layer does
