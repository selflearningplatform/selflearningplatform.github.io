---
tag: view
endpoint: /settings
---

# Settings

Every option is saved to `settings.json` at the repo root the moment you change it. File reference: [settings.json](settings-json.md).

| option | what it affects |
| --- | --- |
| profile | `auto`, `online` or `offline`. How the agent layer and dictation run: whether a missing dictation model is fetched, and which `sources_mode` `slp-init` suggests. See [profiles](profiles.md) |
| theme | colors of the whole app. `auto` follows the OS |
| ui_font | font of bars, menus and pages. The note body has its own, in the [notes](editor.md) toolbar |
| voice_model | the dictation model. `download` saves the selected size to `models/` so it works offline |
| model path | a Whisper model folder you already have (MLX on Apple Silicon, CTranslate2 elsewhere). Used as-is |
| upload font | a `.woff2`, `.ttf` or `.otf`. Stored in `fonts/`, then offered in both font pickers |

## Themes

Two, ink and paper: `sumi` 墨 (dark) and `kami` 紙 (light). Pick one here or in the top bar. `auto` uses `kami` when the OS is light, `sumi` otherwise.

Colors are tokens in `app/styles/style.css`; the design reference is `app/styles/Design.md`.

## Fonts

`mono` (JetBrains Mono), `serif` (a system serif) and `inter` are built in, plus any you upload. Uploaded names are lowercased, with dashes for spaces; a name that already exists is refused.

// text too small? use the zoom in the status line or your browser's zoom
