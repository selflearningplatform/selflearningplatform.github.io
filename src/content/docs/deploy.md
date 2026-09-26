---
tag: cli
endpoint: uv run slp
copy: true
---

# Deploy

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
| `uv run slp sessions` | close idle study sessions and print the open ones |
| `uv run slp sessions close` | close every open study session |
| `uv run slp transcribe <audio> [lang]` | print the transcription of an audio file |

## Layout

```screen
┌ 1 notes  2 exams  3 cards  4 project  5 settings ── clock ── tools ┐
│ explorer │                                                         │
│ topics/  │   the view                                              │
│ index    │                                                         │
└ NORMAL  ~/path  status · session · zoom % · width px · theme · Top ┘
```

- **top bar**: the five views, a clock, and the tools of the current view
- **explorer**: topics and their contents, per view
- **status line**: mode (`NORMAL`, `INSERT`, `PASS`/`FAIL`), path, save status, the session control, content zoom, text width, theme picker and scroll position. Zoom and width are remembered per browser
- **session control**: shown when a topic is open. Start or stop a study session by hand; otherwise the app opens one on any activity in the topic and closes it after 30 idle minutes

## Views

| view | what it is |
| --- | --- |
| [notes](editor.md) | list of topics, and the notebook of each one |
| [exams](exam-app.md) | list of exams per topic, and the simulator |
| [cards](cards-app.md) | card sets per topic, and the flashcard study |
| project | the project's own README: name, quick start, how it works, AI teacher, your topics, principles |
| [settings](settings.md) | global (profile, fonts, dictation model), shortcuts, cards and themes. Also at `/settings` |
