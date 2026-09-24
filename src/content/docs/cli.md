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

- **url**: `http://localhost:8321/app/views/notes.html`
- **views**: notes · exam · project · settings

## Commands

| command | what it does |
| --- | --- |
| `uv run slp` | start the app |
| `uv run slp setup` | download the dictation model ahead of time |
| `uv run slp transcribe <audio> [lang]` | print the transcription of an audio file |
