---
tag: 5 min
endpoint: uv · git · an agent
---

# Getting started

Three things, then one prompt.

```shell
git clone https://github.com/GustavoPenaBeltrami/self-learning-platform.git
cd self-learning-platform
uv run slp
```

```agent
Read AGENTS.md and run slp-setup.
```

## Requirements

- **uv**: the only thing you install. It fetches Python and the packages
- **a coding agent**: any, with permission in the repo folder. Claude Code recommended
- **internet**: for the first `uv run slp` only. After that it aims to work offline: Mermaid, KaTeX and fonts ship in `app/vendor/`

## Path

1. [install](install.md) uv and clone the repo
2. [setup](setup.md) your agent with `slp-setup`
3. [init](init.md) your first topic with `/slp-init`
4. [start the app](cli.md) with `uv run slp`
