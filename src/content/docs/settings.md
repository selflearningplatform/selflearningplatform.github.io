---
tag: view
endpoint: /settings
---

# Settings

The settings tab lists four sections: **global**, **shortcuts**, **cards** and **themes**. All of them live in one file, `settings.json` at the repo root, saved the moment you change an option. Each page has a breadcrumb (`settings › cards`) to go back, and all but themes a `reset all to defaults` button. File reference: [settings.json](settings-json.md).

## Global

| option | what it affects |
| --- | --- |
| profile | `auto`, `online` or `offline`. How the agent layer and dictation run: whether a missing dictation model is fetched, and which `sources_mode` `slp-init` suggests. `auto` picks `online` when the server finds a connection at start; the page shows which one is active. See [profiles](profiles.md) |
| ui_font | font of bars, menus and pages. The note body has its own, in the [notes](editor.md) toolbar |
| voice_model | the dictation model. `download` saves the selected size to `models/` so it works offline |
| model path | a Whisper model folder you already have (MLX on Apple Silicon, CTranslate2 elsewhere). Used as-is |
| upload font | a `.woff2`, `.ttf` or `.otf`. Stored in `fonts/`, then offered in both font pickers |

## Shortcuts

The key of every action, grouped by page: notes, exams, cards. Click a key, press the new combo; `Esc` cancels. A key already used on the same screen is refused. Notes keys need `ctrl`, `alt` or `meta` and can't take one the editor uses (`⌘B`, `⌘C`, `⌘Z`…). Reset one key or all. Fixed keys are shown but can't be changed. See [shortcuts](shortcuts.md).

## Cards

How many days a flashcard waits at each step before it is due again. Type each wait as days since the previous step or since the start; the other column follows. `add step` appends one at twice the last wait, `✕` removes one. The defaults are 1, 3, 5, 10, 20 and 40 days. Past the last step a card is learned. The steps apply to every topic. How they are used: [cards](cards-app.md).

## Themes

Pick one there or with ◐ in the status line. `auto` uses `kami` when the OS is light, `sumi` otherwise.

- **Ink and paper**: `sumi` 墨 (dark) and `kami` 紙 (light)
- **Four with color**: `taiyo` 太陽 (sun, sepia, light), `sakura` 桜 (dark and pink), `umi` 海 (sea, dark and blue), `mori` 森 (woods, dark green and brown)
- **Your own**: type a name, pick a base color and dark or light, press `generate`. The app builds the 11 shades from background to text in the hue of that color, an accent from the color itself and the seven terminal colors. Change any of the 19 colors, then `save and use`. `edit` loads a theme's colors into the form (all but `sumi` and `kami`); saving a name you already have replaces it. Your own themes can be deleted. Saved under `theme` in [settings.json](settings-json.md)

Colors are tokens in `app/styles/style.css`; the design reference is `app/styles/Design.md`.

## Fonts

`mono` (JetBrains Mono), `serif` (a system serif) and `inter` are built in, plus any you upload. Uploaded names are lowercased, with dashes for spaces; a name that already exists is refused.

// text too small? use the zoom in the status line or your browser's zoom
