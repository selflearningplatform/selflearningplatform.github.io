---
tag: rev
endpoint: /slp-cards
copy: true
---

# Cards

Turns your notes into flashcards, one concept per card: a question on the front, a short answer on the back. You study them in the [cards tab](cards-app.md), which schedules them with Leitner boxes. This skill only writes the cards.

```usage
/slp-cards
make cards for unit 01 of http-basics
```

```cards/cards.json
[
  {
    "id": "put-idempotent",
    "front": "Why is PUT idempotent?",
    "back": "It replaces the whole resource, so repeating it leaves the same state.",
    "note": "Methods and status codes"
  }
]
```

```output
6 added, 1 changed, 0 removed · 14 total
```

- **triggers**: "make cards", "flashcards from my notes", "update my cards", finishing a unit's notes
- **scope**: the whole topic, or one unit. Default: the whole topic
- **reads**: only your notes. A fact not in them gets no card
- **cards**: `front` asks for recall, not recognition. `back` is at most 2 sentences. 5–15 per note. `note` is the note's H1, which puts the card in that note's set
- **updates**: a card whose fact is unchanged stays as is; a changed fact keeps its `id`; a fact gone from the notes loses its card. Ids never change or get reused
- **leaves alone**: cards you wrote in the app (`"by": "user"`), the `flagged` mark, custom sets and `cards/reviews.jsonl`
- **writes**: `cards/cards.json`. Format: [cards/](cards.md)
