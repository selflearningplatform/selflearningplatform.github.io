---
tag: optional
endpoint: uv run slp setup
copy: true
---

# Dictation

Dictate notes or answer oral exam questions out loud. Runs locally with Whisper; without it, the mic tells you how to use your OS dictation instead.

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

## In the notes

`ctrl+m` or the mic button starts and stops. Grey text is provisional and keeps changing while you talk; every ~15 s the finished part is committed. The language is the topic's `language.notes`.

## In exams

Oral answers are recorded, not transcribed live. The audio is saved next to the attempt and [slp-grade](slp-grade.md) transcribes it to grade the content, not pronunciation.

## Models

| size | disk | RAM |
| --- | --- | --- |
| `tiny` | ~75 MB | ~1 GB |
| `base` | ~145 MB | ~1 GB |
| `small` | ~480 MB | ~2 GB |
| `medium` | ~1.5 GB | ~5 GB |
| `turbo` | ~1.6 GB | ~6 GB |
| `large-v3` | ~3 GB | ~10 GB |

- **default**: `turbo` on Apple Silicon, `small` on CPU
- **choose**: `voice_model` in [settings](settings.md): a size, or the path to a model you already have
- **where it comes from**: `models/` first; if missing, the `online` profile downloads it on first use and `offline` uses a cached copy or falls back to the OS dictation
- **`uv run slp setup`**: `auto` and `online` download `turbo`; `offline` shows your RAM and disk, suggests a size and lets you pick one, a path, or none
