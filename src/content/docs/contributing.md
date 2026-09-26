---
tag: git
endpoint: fork · branch · pull request
---

# Contributing

Contributions are welcome. Skills are edited in `agent/skills/`, never inside an agent's own folder. File formats live in one place, `agent/reference/formats.md`: a change to a format goes there and to `topics/example/`.

```shell
git checkout -b my-change
# edit agent/skills/... or app/...
uv run python app/tests/run.py
git push origin my-change
```

- **app/server/**: `server.py` (HTTP and the `slp` commands), `store.py` (every file read and write), `voice.py` (dictation), `text.py` (Markdown ⇄ HTML)
- **app/views/**: one HTML page per view. Design reference: `app/styles/Design.md`
- **tests**: plain scripts in `app/tests/`, no framework. One runs with `uv run python app/tests/test_<name>.py` and prints `ok`; `run.py` runs them all

For bugs or ideas, [open an issue](https://github.com/GustavoPenaBeltrami/self-learning-platform/issues/new). Licensed [MIT](https://github.com/GustavoPenaBeltrami/self-learning-platform/blob/main/LICENSE).

Thanks to [amosblomqvist/learn](https://github.com/amosblomqvist/learn) for the method behind slp-teach and to [Matt Pocock](https://github.com/mattpocock) for per-topic memory and spaced review.
