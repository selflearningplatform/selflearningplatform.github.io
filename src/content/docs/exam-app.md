---
tag: view
endpoint: /app/views/exam.html?topic=<slug>&exam=<exam>
---

# Exam simulator

Sit an exam built by [slp-exam](slp-exam.md). The level quiz of [slp-quiz](slp-quiz.md), in `exams/quiz/`, is listed too; a sitting here is logged as a quiz. The first screen lists every topic with its exams and how many attempts are **pending** grading. Click a topic to see its exams with questions, attempts and pending counts; click an exam to sit it. Old `?f=topics/<slug>/exams/<exam>/exam.json` links still work.

## Sitting

- **order**: questions are shuffled on every sitting
- **multiple choice**: pick one option
- **open · practical**: a text box
- **oral**: record your answer with the microphone, or answer in writing instead
- **progress**: `N/M answered` in the status line
- **diagrams and formulas** in questions and options render as in the notes

## Grading

`⏎` finishes the exam. Multiple choice is graded right away: a score meter, `✓` on the right option, `✕` on yours, and the explanation. `PASS` from 70%. Open, oral and practical answers show `pending grading`.

## The attempt

Every sitting is saved, whatever the score. Answers are stored as they are: no grade inside.

```attempt
exams/<exam>/attempts/
├── 2026-09-24T1030.json      # your answers
└── 2026-09-24T1030-p3.webm   # audio of question 3
```

Then ask your agent to grade it: [slp-grade](slp-grade.md) writes `2026-09-24T1030.feedback.md` next to it; until then the attempt counts as pending. Fields: [exams/](exams.md).

| key | action |
| --- | --- |
| `⏎` | finish the exam, or retake after grading |
| `R` | record an oral answer, again to stop |
| `T` | answer an oral question in writing |
| `Esc` | back: exam → topic → all topics |

`⏎`, `R` and `T` can be changed in [settings](settings.md) → shortcuts. The ⓘ in the top bar lists them.
