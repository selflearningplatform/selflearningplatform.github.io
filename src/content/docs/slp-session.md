---
tag: plan
endpoint: /slp-session
copy: true
---

# Session

Entry point of a study session. Validates the sessions recorded since the last one, surveys every topic, asks what you want to do today and hands off to the right skill. It also ends a session and marks a unit done.

```usage
/slp-session
```

```output
http-basics: the 24/09 practice session was closed by the hook at 19:30;
the last change was your attempt at 18:00. Fixed. Wiki updated: idempotency.

http-basics   01 · 1 attempt pending · 3 cards due · 1 unsure card
01 — methods and status codes
- [x] cards: 6, 2 due → 3 cards tab
- [ ] exercise → slp-exercises        ← next
- [ ] exam → slp-exam
# what do you want to do today?
```

- **triggers**: "let's start", "what do I study today", "what's pending", "I'm done for today", "I finished chapter X"
- **reads**: `progress/sessions.jsonl`, the files changed in each session, `topic.json`, `status.md`, `log.md`, pending attempts, `cards/`
- **writes**: `end` and `correct` lines in `sessions.jsonl`, the `## Reading` table of `log.md`, `status.md` when a unit is done, the wiki from notes you changed, and whatever you accept in step 3

## Steps

1. validate the recorded sessions
2. survey, without asking
3. complete `topic.json` or add a teacher persona, if needed
4. ask what to do today
5. hand off

## Validate

The app records sessions on its own: any activity in a topic opens one, 30 idle minutes close it, and the statusline has a start/stop control. `uv run slp sessions` closes idle sessions and prints the open ones.

For each closed session not yet validated, the real end is the latest file changed or activity logged before the next session. It appends a `correct` line with that end and the files produced. The recorded end gets fixed when it is 30+ minutes after the real one, a file changed after it, or it lists no outputs while files changed. Notes you changed feed the [wiki](wiki.md): the concepts they cover get upserted and the session is added to their `studied`. Open sessions are left alone.

Format: [progress/](progress.md).

## Survey

- **pending attempts**: `attempts/<date>.<ext>` without `<date>.feedback.md`
- **due cards**: per topic, by the Leitner rule
- **unsure cards**: the ones you flagged in the [cards tab](cards-app.md)
- **finished units** with something missing: the checklist below
- **quiz due**: the last one is 30+ days old, or 2+ units were finished since
- **incomplete `topic.json`**: empty `goals` or `reason`
- **no teacher persona**: and `topic.json` has no `"teacher": false`

## Hand-offs

| option | goes to |
| --- | --- |
| read on my own | nothing: the app records the reading as you take notes |
| summarize material | [slp-summarize](slp-summarize.md) |
| get taught something | [slp-teach](slp-teach.md) |
| make flashcards from my notes | [slp-cards](slp-cards.md) |
| study my cards | the [cards tab](cards-app.md) |
| go over my unsure cards | itself: teaches each flagged card, then clears the flag |
| do an applied exercise | [slp-exercises](slp-exercises.md) |
| sit an exam | an unsat exam for the unit in the app, otherwise [slp-exam](slp-exam.md) |
| check my level | [slp-quiz](slp-quiz.md) |
| grade a pending attempt | [slp-grade](slp-grade.md) |

## End of a unit

When you say a unit is finished, it adds a `## Reading` row to `log.md`, moves `status.md` to the next unit and shows the unit's checklist, in this order, with the first unchecked item as next:

| item | done when | otherwise |
| --- | --- | --- |
| cards | a card has a `note` under the unit's note | `slp-cards` |
| exercise | an exercise for the unit has an attempt | `slp-exercises`, or submit it, or `slp-grade` |
| exam | an exam for the unit has a graded attempt | `slp-exam`, or sit it, or `slp-grade` |

A quiz due goes on one extra line: `quiz: last one 34 days ago → slp-quiz`.
