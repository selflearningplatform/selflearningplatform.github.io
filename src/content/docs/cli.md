---
tag: cli
endpoint: uv run slp
copy: true
---

# Run the app

Starts the local server and opens the notebook in your browser. If a server is already running, it just opens the page.

```output
Profile: online
Study app at http://localhost:8321/app/views/notes.html  (ctrl+c to stop)
```

- **url**: `http://localhost:8321/app/views/notes.html`, local only (`127.0.0.1`)
- **server**: Python stdlib, `app/server/server.py`. No database: it reads and writes `topics/`

## Commands

| command | what it does |
| --- | --- |
| `uv run slp` | start the app |
| `uv run slp setup` | pick a profile and download the dictation model ahead of time |
| `uv run slp transcribe <audio> [lang]` | print the transcription of an audio file |

## Layout

```screen
┌ 1 notes  2 exams  3 project  4 settings ── clock ── tools · theme ┐
│ explorer │                                                       │
│ topics/  │   the view                                            │
│ index    │                                                       │
└ NORMAL  ~/path          status · zoom % · width px · Top ────────┘
```

- **top bar**: the four views, a clock, the notes toolbar, the theme picker
- **explorer**: topics and their contents, per view
- **status line**: mode (`NORMAL`, `INSERT`, `PASS`/`FAIL`), path, save status, content zoom, text width and scroll position. Zoom and width are remembered per browser, width per view

## Views

| view | what it is |
| --- | --- |
| [notes](editor.md) | list of topics, and the notebook of each one |
| [exams](exam-app.md) | list of exams per topic, and the simulator |
| project | the project's own README: name, three windows, loop, pieces, principles |
| [settings](settings.md) | profile, theme, fonts, dictation model. Also at `/settings` |
