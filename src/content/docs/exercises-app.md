---
tag: view
endpoint: /app/views/exercises.html?topic=<slug>&exercise=<exercise>
---

# Exercises

Do the exercises built by [slp-exercises](slp-exercises.md). The first screen lists every topic with its exercises and how many attempts are **pending** grading. Click a topic to see its exercises with format, unit, attempts and pending counts; click an exercise to write your answer.

## Writing

- **prompt**: the exercise's `prompt.md`, rendered above the editor, images included
- **answer**: a plain-text markdown editor; the status line shows the character count
- **images**: paste from the clipboard, drop files on the editor, or attach with the button or `ctrl+i`. Each image is saved in the exercise's `img/` and inserted where the cursor is
- **previous attempts**: the header shows how many attempts the exercise has and how many are pending grading

## Draft

The answer is saved as a draft about a second after you stop typing (`draft saved` in the status line) and when the page is hidden or closed. Open the exercise again and the text is back (`draft restored`). The draft lives in `draft.json` inside the exercise folder and is deleted when you submit.

## Submitting

`⌘⏎` saves the answer as a new markdown file, whatever it says. Empty answers are refused. Image links are checked against `img/`.

```attempt
exercises/<exercise>/attempts/
└── 2026-09-24T1030.md      # your answer
```

The page then shows the saved answer and `pending grading`: ask your agent to run [slp-grade](slp-grade.md), which writes the feedback next to it. Fields: [exercises/](exercises.md).

| key | action |
| --- | --- |
| `⌘⏎` | submit the answer |
| `ctrl+i` | attach an image |
| `⏎` | after submitting, write again |
| `Esc` | leave the editor, then back: exercise → topic → all topics |

`⌘⏎`, `ctrl+i` and `⏎` can be changed in [settings](settings.md) → shortcuts. The ⓘ in the top bar lists them.
