---
tag: dir
endpoint: topics/<slug>/exams/<exam>/
---

# exams/

One folder per exam. The folder name is the exam's id: the unit number and title (`01-methods-and-codes`), or `quiz` for the level quiz. Attempts are named by the minute they were made.

```tree
exams/01-methods-and-codes/
├── exam.json
└── attempts/
    ├── 2026-09-24T1030.json          # your answers
    ├── 2026-09-24T1030-p3.webm       # oral answer to question 3
    └── 2026-09-24T1030.feedback.md   # feedback
```

- **written by**: [slp-exam](slp-exam.md) and [slp-quiz](slp-quiz.md) (the exam), the [app](exam-app.md) (attempts), [slp-grade](slp-grade.md) (feedback)
- **pending**: an attempt without its `.feedback.md`
- **second exam on a unit**: `01-methods-and-codes-b`. An exam with attempts is never rewritten or reordered, since attempts point at questions by position
- **same minute**: a second attempt in the same minute gets `-2`, `-3`…

## exam.json

```exam.json
{
  "title": "HTTP — 01: methods and codes",
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
| `options` | multiple choice: exactly 4 statements |
| `answer` | multiple choice: index of the right option, 0-based |
| `explanation` | multiple choice: why, shown after grading. Required |
| `rubric` | open, oral, practical: 3–5 checkable points. No `answer` |

`q`, `options` and `explanation` can hold ` ```mermaid ` and ` ```math ` fences, written as `\n` inside the string, with LaTeX backslashes doubled.

## Quiz

`exams/quiz/exam.json` is the level check [slp-init](slp-init.md) runs first and [slp-quiz](slp-quiz.md) runs again to compare. A normal exam with three more fields:

| field | meaning |
| --- | --- |
| `kind` | top level, `"quiz"` |
| `thread` | per question: the prerequisite line it tests, kebab-case (`methods`) |
| `level` | per question: difficulty from 1 to 5 |

Questions are never edited or reordered: the bank grows by appending higher levels. The app sits it like any other exam.

## Attempt

What you answered, nothing more. No score: multiple choice is scored on screen, the rest by `slp-grade`.

```attempts/2026-09-24T1030.json
{
  "exam": "01-methods-and-codes",
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
| `mode` | `"chat"` when the quiz was run in the chat and written by `slp-quiz` |

## Feedback

`attempts/<date>.feedback.md`, written by `slp-grade`, or by `slp-quiz` for a quiz run in the chat.

```attempts/2026-09-24T1030.feedback.md
# Attempt — 01-methods-and-codes — 2026-09-24 10:30

**MC:** 3/4 · **Rubric points:** 2/3

## [03] Multiple choice — overloaded server
✗ Picked 404. … See *Methods and status codes › Status codes*.

## What to improve
- …
```

- **sections**: `[NN]` is the question position plus one. Only missed and non-multiple-choice questions get one
- **✗**: says what is missing and the note heading that covers it, or that no note covers it yet
- **quiz**: the score line is a `| Thread | Edge level |` table
