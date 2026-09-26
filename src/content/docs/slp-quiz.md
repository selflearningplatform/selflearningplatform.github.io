---
tag: ctrl
endpoint: /slp-quiz
copy: true
---

# Quiz

Measures your level in a topic with a ping-pong quiz in the chat: up a level on a hit, down on a miss, per prerequisite thread. It uses the same question bank every time, so today's result compares with the first one.

```usage
/slp-quiz
where am I on http-basics?
```

```attempts/2026-09-21T1000.feedback.md
# Attempt — quiz — 2026-09-21 10:00
| Thread | Edge level |
|--------|------------|
| methods | 3 |
| status-codes | 1 |
## [05] Multiple choice — overloaded server
✗ Picked 404. ...
```

- **triggers**: `slp-init` on a new topic, `slp-session` when a quiz is due, "check my level", "where am I on this topic"
- **bank**: `exams/quiz/exam.json`, built on the first run. 3–6 threads, 1–2 questions at levels 1, 3 and 5, each tagged `thread` and `level`. Questions are never edited or reordered; a thread whose ceiling wasn't found gets higher levels appended
- **run**: per thread, starts at level 3 and stops when a hit at one level and a miss at the next bound it. "I don't know" is a miss. No teaching mid-quiz
- **edge**: the highest level answered correctly in a thread, `0` if none
- **writes**: `exams/quiz/attempts/<date>.json` with `"mode": "chat"`, its `<date>.feedback.md`, a row in `## Quizzes` of `progress/log.md`, and `learning.md` when an edge moved or a misconception showed up
- **in the app**: the bank can also be sat as a plain exam, not adaptive. [slp-grade](slp-grade.md) grades that attempt
- **due**: `slp-session` suggests one when the last is 30+ days old or 2+ units were finished since

## Steps

1. open: pick the topic, read the Mission, `learning.md` and the wiki index
2. build or extend the bank
3. run the ping-pong
4. write the attempt, feedback, log row and record
5. wrap up: the edge per thread, what moved, one next step
