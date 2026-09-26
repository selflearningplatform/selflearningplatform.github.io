---
tag: dir
endpoint: topics/<slug>/progress/
---

# progress/

Where you are, what you did, and when you studied.

```tree
progress/
├── status.md        # the present
├── log.md           # results, one row per event
└── sessions.jsonl   # study sessions
```

## status.md

The present: current unit, whether its summary is written, the next exam, what comes next. Rewritten, not accumulated.

```status.md
# Status — HTTP basics

**Updated:** 2026-09-22

- **Current unit:** 01 — methods and status codes
- **Summary written:** yes
- **Next exam:** —

## Up next
- [ ] …
```

## log.md

The history of results, in four tables. Rows are appended at the end and never deleted.

```log.md
## Exams
| Date | Exam | MC | Rubric | Attempt |
|------|------|----|--------|---------|
```

| table | written by | when |
| --- | --- | --- |
| Reading | [slp-session](slp-session.md) | you confirm a unit is finished |
| Exams, Exercises | [slp-grade](slp-grade.md) | after grading. Also fills the unit's score in Reading |
| Quizzes | [slp-quiz](slp-quiz.md), or `slp-grade` for a quiz sat in the app | after a run |

`Attempt` is the feedback path relative to the exam or exercise folder: `attempts/2026-09-23T1030.feedback.md`.

## sessions.jsonl

Your study sessions. A session is a block of time with a list of activities. One JSON object per line, append-only.

```sessions.jsonl
{"id":"2026-09-26T1010","event":"start","at":"2026-09-26T10:10","by":"app"}
{"id":"2026-09-26T1010","event":"activity","at":"2026-09-26T10:12","kind":"reading","by":"app","detail":"notes/01-methods-and-status-codes.md"}
{"id":"2026-09-26T1010","event":"activity","at":"2026-09-26T10:40","kind":"teaching","by":"agent","detail":"idempotency keys"}
{"id":"2026-09-26T1010","event":"end","at":"2026-09-26T11:02","by":"hook"}
{"id":"2026-09-26T1010","event":"correct","at":"2026-09-26T18:00","by":"agent","end_at":"2026-09-26T10:41","outputs":["notes/02-idempotency-keys.md"],"note":"hook closed at 11:02 but last activity 10:40"}
```

| field | meaning |
| --- | --- |
| `id` | the start minute, `YYYY-MM-DDTHHmm`. Every line of the session repeats it |
| `event` | `start` · `activity` · `end` · `correct` |
| `at` | when, `YYYY-MM-DDTHH:MM` |
| `by` | `app` · `agent` · `hook` · `idle` |
| `kind` | activity: `reading` · `teaching` · `summary` · `cards` · `practice` · `exam` · `quiz` · `feedback` |
| `detail` | activity: one line, such as a file, an exam, a concept or a count |
| `outputs` | end or correct: files made, relative to the topic |
| `note` | end or correct: one line |
| `end_at` | correct: the real end time |

- **open**: a `start` with no `end`. At most one per topic
- **idle close**: an open session whose last line is more than 30 minutes old is closed with an `end` by `idle`, at the time of that last line, before anything else is written
- **correct**: the agent's fix after checking a session. Its `end_at`, `outputs` and `note` replace the end's. A session with a `correct` line, or an `end` by `agent`, counts as validated

| writer | what |
| --- | --- |
| app | opens a session on any activity when none is open. Logs `reading` (notes saved, at most once per 10 minutes; a source added), `cards` (`N reviewed, M again`), `exam` and `quiz` (attempt saved). The session control in the status line writes `start` and `end` |
| skills | one `activity` when they work on a topic, opening a session by `agent` only if none is open |
| [slp-session](slp-session.md) | `end` when you say you're done, `correct` when validating |
| `uv run slp sessions close` | `end` by `hook` for every open session, from your agent's end-of-session hook. Without `close` it lists open sessions and applies the idle close |
