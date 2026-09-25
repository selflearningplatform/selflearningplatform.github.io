---
tag: view
endpoint: /app/views/exam.html?f=<exam.json>
---

# Exam simulator

Sit an exam built by [slp-exam](slp-exam.md) or [slp-review](slp-review.md). The first screen lists every topic with its exams.

## Sitting

- **order**: questions are shuffled on every sitting
- **multiple choice**: pick one option
- **open · practical**: a text box
- **oral**: record your answer with the microphone, or answer in writing instead
- **progress**: `N/M answered` in the status line
- **diagrams and formulas** in questions and options render as in the notes

## Grading

`⏎` grades. Multiple choice is graded on the spot: a score meter, `✓` on the right option, `✕` on yours, and the explanation. `PASS` from 70%. Open, oral and practical answers show `pending grading`.

## The attempt

Every sitting is saved, whatever the score. Answers are stored as they are: no grade inside.

```attempt
exams/<exam>/attempts/
├── 2026-09-24T1030.json      # your answers
└── 2026-09-24T1030-p3.webm   # audio of question 3
```

Then ask your agent to grade it: [slp-grade](slp-grade.md) writes `2026-09-24T1030.md` next to it. Fields: [exams/](exams.md).

| key | action |
| --- | --- |
| `⏎` | grade, or retake after grading |
| `Esc` | back to the list |
