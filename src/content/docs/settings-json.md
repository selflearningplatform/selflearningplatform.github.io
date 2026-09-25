---
tag: file
endpoint: settings.json
---

# settings.json

Your app preferences, at the repo root. Written by the [settings](settings.md) view and by `uv run slp setup`. Git-ignored. A missing file or key means the default.

```settings.json
{
  "profile": "auto",
  "theme": "",
  "ui_font": "mono",
  "font": "mono",
  "voice_model": ""
}
```

| field | values | default |
| --- | --- | --- |
| `profile` | `auto` · `online` · `offline`. See [profiles](profiles.md) | `auto` |
| `theme` | `""` (follows the OS) · `sumi` · `kami` | `""` |
| `ui_font` | font of the app: `mono` · `serif` · `inter` · an uploaded file name | `mono` |
| `font` | reading font of the note body, same choices | `mono` |
| `voice_model` | `""` (default size) · a size (`tiny` … `large-v3`) · a model folder path | `""` |

- **values**: all strings. Anything else is refused
- **read by**: the server, and `slp-setup` and `slp-init` for `profile`
- **env**: `NOTES_VOICE_MODEL` sets the model when `voice_model` is empty
- **not here**: content zoom and text width live in the browser's local storage

## Other local folders

Also at the root, git-ignored, created on demand:

| path | holds |
| --- | --- |
| `models/` | dictation models downloaded from settings or `slp setup` |
| `fonts/` | uploaded fonts |
| `local/` | your own scratch space. The agent doesn't write there unless asked |
