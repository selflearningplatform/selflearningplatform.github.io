---
tag: sh
endpoint: curl -LsSf https://astral.sh/uv/install.sh | sh
copy: true
---

# Installation

[uv](https://docs.astral.sh/uv/) manages Python and the dependencies. Install it once, then clone.

```macOS · linux
curl -LsSf https://astral.sh/uv/install.sh | sh
```

```windows
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

```clone
git clone https://github.com/GustavoPenaBeltrami/self-learning-platform.git
cd self-learning-platform
```

- **requires**: python ≥ 3.9, fetched by uv
- **deps**: `mlx-whisper` on Apple Silicon, `faster-whisper` elsewhere
- **keep your topics**: `git remote set-url origin <your-repo>`

// want dictation ready offline? run `uv run slp setup` right after cloning
