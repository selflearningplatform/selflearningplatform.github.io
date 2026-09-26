---
tag: prac
endpoint: /slp-exam
copy: true
---

# Exam

Builds a JSON exam from content you paste, audited first against the topic's progress. You sit it in the app, which shuffles the questions.

```exam.json
{
"title": "HTTP — Ch 1: Methods",
"questions": [
    {
      "type": "multiple_choice",
      "q": "Which method is idempotent?",
      "options": ["POST", "PATCH", "PUT", "CONNECT"],
      "answer": 2,
      "explanation": "..."
    },
    {
      "type": "open",
      "q": "When is 409 better than 400?",
      "rubric": ["...", "...", "..."]
    }
]
}
```

- **material**: what you paste; otherwise the unit's notes and [wiki](wiki.md) pages; otherwise the topic's sources. Nothing invented
- **writes**: `exams/<NN>-<title>/exam.json`. An exam with attempts is never replaced: a new one gets `-b`
- **types**: asks which go in. Multiple choice and open are preselected, plus oral and practical for `practice` topics
- **size**: 10–15 questions: ~30% definitions, ~40% application, ~30% trade-offs. About 60% multiple choice
- **after**: sit it in the [app](exam-app.md), then [slp-grade](slp-grade.md) grades the attempt

## Question types

| type | carries |
| --- | --- |
| `multiple_choice` | 4 `options`, `answer` (0-based), `explanation` |
| `open` | `rubric`: 3–5 checkable points |
| `oral` | like open, answered by voice |
| `practical` | `rubric` |

All fields, and the attempt format: [exams/](exams.md).
