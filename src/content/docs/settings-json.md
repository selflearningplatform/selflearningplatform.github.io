---
tag: file
endpoint: settings.json
---

# settings.json

Your app preferences, at the repo root, in one file with four sections. Written by the [settings](settings.md) views and by `uv run slp setup`. Git-ignored. A missing file, section or key means the default.

```settings.json
{
  "global": { "profile": "auto", "ui_font": "mono", "font": "mono", "voice_model": "", "mark_colors": "" },
  "shortcuts": { "cards.skip": "k" },
  "theme": { "active": "", "custom": [] },
  "cards": { "intervals": [1, 3, 5, 10, 20, 40] }
}
```

Older installs kept `global` flat at the top level, with `shortcuts.json` and `card-config.json` next to it: they are read from there and merged into this file on the next save, and the old files are removed.

## global

| field | values | default |
| --- | --- | --- |
| `profile` | `auto` · `online` · `offline`. See [profiles](profiles.md) | `auto` |
| `ui_font` | font of the app: `mono` · `serif` · `inter` · an uploaded file name | `mono` |
| `font` | reading font of the note body, same choices | `mono` |
| `voice_model` | `""` (default size) · a size (`tiny` … `large-v3`) · a model folder path | `""` |
| `mark_colors` | your extra mark colors from the [notes](editor.md) toolbar, `#rrggbb` joined by commas | `""` |

- **values**: all strings. Anything else is refused
- **read by**: the server, and `slp-setup` and `slp-init` for `profile`
- **env**: `NOTES_VOICE_MODEL` sets the model when `voice_model` is empty
- **not here**: content zoom and text width live in the browser's local storage

## shortcuts

Your rebound keys, written by the [shortcuts](shortcuts.md) view. Only the keys you changed, action → key:

```shortcuts
"shortcuts": { "cards.skip": "k", "notes.dictate": "alt+d" }
```

A key is `[ctrl+][alt+][shift+][meta+]` then a letter, digit, `space` or `enter`. Unknown actions, bad keys and keys used twice on one screen are refused; a hand-edited section with any of those reads as the defaults. Notes keys need `ctrl`, `alt` or `meta`, and `ctrl` or `meta` with `a b c i s v x y z` is kept for the editor.

## theme

The active theme and your own ones, written by the [themes](settings.md) view and the ◐ selector in the statusline.

```theme
"theme": {
  "active": "sakura",
  "custom": [{ "name": "my-theme", "dark": true, "colors": { "void": "#09110c", "…": "…" } }]
}
```

- **active**: `""` (follows the OS) · `sumi` · `kami` · `taiyo` · `sakura` · `umi` · `mori` · the name of a custom theme. Unknown reads as `""`
- **custom**: each theme has a `name` (lowercase letters, digits and dashes, up to 24, not a built-in name), `dark` (`true` or `false`) and `colors` with exactly `void`, `carbon`, `graphite`, `iron`, `slate`, `pewter`, `steel`, `ash`, `fog`, `chalk`, `paper`, `accent`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `orange`, each a lowercase `#rrggbb`. A hand-edited list breaking those rules reads as empty
- Older files with `theme` under `global` are still read and moved here on the next save

## cards

How long a flashcard waits between reviews, written by the cards view of settings, where you type each step as days since the previous step or since the start and the other column is worked out. The file stores days since the previous step:

```cards
"cards": { "intervals": [1, 3, 5, 10, 20, 40] }
```

Those are the defaults. A new card or a "don't know" is due now; each "knew it" in a row moves the card one step; one more "knew it" after the last step makes it **learned** and it stops coming up in "study due". 1 to 20 steps, whole days from 1 to 3650. A hand-edited section breaking those rules reads as the defaults. Your past reviews are kept: changing the steps only changes when each card is next due.

## Other local folders

Also at the root, git-ignored, created on demand:

| path | holds |
| --- | --- |
| `models/` | dictation models downloaded from settings or `slp setup` |
| `fonts/` | uploaded fonts |
| `local/` | your own scratch space. The agent doesn't write there unless asked |
