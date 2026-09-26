---
tag: dir
endpoint: topics/<slug>/cards/
---

# cards/

Flashcards made from your notes, and every time you rated one. The [cards view](cards-app.md) reads both and works out which cards are due.

```tree
cards/
├── cards.json      # the cards
└── reviews.jsonl   # your ratings
```

- **written by**: [slp-cards](slp-cards.md) or you, by hand or in the app (`cards.json`); only the app (`reviews.jsonl`)
- **no state file**: sets and due dates are derived from these two files and `cards` in [settings.json](settings-json.md)

## cards.json

```cards.json
[
  { "id": "put-idempotent", "front": "Why is PUT idempotent?",
    "back": "It replaces the whole resource, so repeating it leaves the same state.",
    "note": "Methods and status codes" },
  { "id": "status-503", "front": "What does 503 mean?",
    "back": "Service Unavailable: the server can't handle the request right now.",
    "note": "Methods and status codes", "by": "user", "flagged": true }
]
```

| field | meaning |
| --- | --- |
| `id` | kebab-case, unique in the topic, never changed or reused: reviews join on it. To retire a card, delete it |
| `front` | a question |
| `back` | the answer, at most 2 sentences. Plain text; inline `**`, `*` and `$…$` LaTeX work |
| `note` | the `#` heading of the note it came from, never a `##` or a file name |
| `set` | optional: a custom set name, for cards that don't belong to one note |
| `by` | optional: `"user"` for a card written in the app. `slp-cards` never edits or deletes those |
| `flagged` | optional: `true` when you rated the card **unsure**. Only the app sets it; the agent sets it back to `false` after going over it with you. Editing a card keeps it |

**Sets**: a card's set is its `set`, else its `note`, else `unsorted`. The app shows one set per note with cards, in note order, then the custom sets by name, then `unsorted`.

## reviews.jsonl

One line per rating, append-only.

```reviews.jsonl
{"at":"2026-09-26T10:04","id":"put-idempotent","recall":"good"}
```

| field | meaning |
| --- | --- |
| `at` | local time, `YYYY-MM-DDTHH:MM` |
| `id` | the card. Lines for a card no longer in `cards.json` are ignored |
| `recall` | `again` (don't know) or `good` (knew it), rated by you after revealing the back |

## Scheduling

Leitner boxes. A card's streak is its `good` ratings since the last `again`. With the steps in `cards.intervals` (default `[1, 3, 5, 10, 20, 40]` days, the same for every topic):

- **box 0**: a new card, or one you just missed. Due now
- **box 1 to n**: waits the matching step, in days, after its last review
- **learned**: one more `good` after the last step. Never due again, until an `again` sends it back to box 0
