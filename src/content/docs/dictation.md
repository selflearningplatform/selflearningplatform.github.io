---
tag: optional
endpoint: uv run slp setup
copy: true
---

# Dictation

Dictate notes or answer oral exam questions out loud. Runs locally with Whisper; without it, the mic falls back to your OS dictation.

```windows arm
uv run --python cpython-3.12-windows-x86_64-none slp
```

```transcribe by hand
uv run slp transcribe attempts/2026-09-24T1030-p3.webm en
```

| system | engine · disk |
| --- | --- |
| macOS Apple Silicon | mlx-whisper (GPU) · ~2.7 GB |
| macOS Intel, Linux, Windows x64 | faster-whisper (CPU) · ~0.7 GB |
| Windows ARM | faster-whisper, emulated x64 · ~0.7 GB |

- **model**: `small` by default on CPU, `turbo` (~1.6 GB) is more accurate. Change it in `/settings`
- **oral exams**: audio is saved next to the attempt and graded on the transcription, not pronunciation
