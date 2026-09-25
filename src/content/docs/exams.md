---
tag: dir
endpoint: topics/<slug>/exams/<exam>/
---

# exams/

One folder per exam, named by unit (`ch-01`, `domain-02`). Attempts are named by the minute they were made.

```tree
exams/ch-01/
├── exam.json
└── attempts/
    ├── 2026-09-24T1030.json    # your answers
    ├── 2026-09-24T1030-p3.webm # oral answer to question 3
    └── 2026-09-24T1030.md      # feedback
```

- **written by**: [slp-exam](slp-exam.md) or [slp-review](slp-review.md), the [app](exam-app.md), [slp-grade](slp-grade.md)
- **pending**: an attempt without its `.md` feedback

## exam.json

```exam.json
{
  "title": "HTTP — Ch 1: Methods",
  "questions": [
    { "type": "multiple_choice", "q": "Which method is idempotent?",
      "options": ["POST", "PATCH", "PUT", "CONNECT"],
      "answer": 2, "explanation": "..." },
    { "type": "open", "q": "When is 409 better than 400?",
      "rubric": ["...", "...", "..."] }
  ]
}
```

| field | meaning |
| --- | --- |
| `title` | shown in the lists. Missing: the folder name |
| `type` | `multiple_choice` (default when missing) · `open` · `oral` · `practical` |
| `q` | the question |
| `options` | multiple choice: 4 statements |
| `answer` | multiple choice: index of the right option, 0-based |
| `explanation` | multiple choice: why, shown after grading |
| `rubric` | open, oral, practical: 3–5 checkable points |

`q`, `options` and `explanation` can hold ` ```mermaid ` and ` ```math ` fences, written as `\n` inside the string.

## Attempt

What you answered, nothing more. No score: multiple choice is scored on screen, the rest by `slp-grade`.

```attempts/2026-09-24T1030.json
{
  "exam": "ch-01",
  "answers": [
    { "i": 0, "type": "multiple_choice", "chosen": 2 },
    { "i": 1, "type": "open", "text": "..." },
    { "i": 3, "type": "oral", "audio": "2026-09-24T1030-p3.webm" }
  ]
}
```

| field | meaning |
| --- | --- |
| `exam` | the exam folder name |
| `i` | position of the question in `exam.json`, not the shuffled order you saw |
| `type` | copied from the question |
| `chosen` | multiple choice: the option index, `null` if skipped |
| `text` | open, practical, or oral answered in writing |
| `audio` | oral: file name of the recording next to the attempt (`webm`, `ogg`, `mp4` or `wav`) |
