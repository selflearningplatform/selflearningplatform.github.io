---
tag: view
endpoint: /app/views/cards.html?topic=<slug>&set=<set>
---

# Cards

Flashcards per topic, with spaced repetition. Cards come from [slp-cards](slp-cards.md), from a selection in the [notes](editor.md), or from the form here. They are saved in `topics/<slug>/cards/`, with every rating: [cards/](cards.md).

## Screens

- **all topics**: cards, due, unsure and learned per topic, and per set below it
- **a topic** (`?topic=<slug>`): its sets. One per note `#` heading that has cards, then sets you named, then `unsorted`
- **a set** (`&set=<set>`): starts on its due cards. `&card=<id>` puts that card first
- **explorer**: topics, sets and cards. Click a card to study it now
- **list**: every card with its note, step, when it is due (`now`, `later`, `learned`) and `?` if unsure. Click a row to edit it, `✕` to delete it

When nothing is due, the page says when the next card is and offers study all.

## Studying

**Study due** takes the cards whose time has come; **study all** takes every card in the set or topic. The card shows the front. Answer it to yourself, then reveal: the card flips to the answer, with a link to the note section it came from. Rate it:

- **don't know**: the card goes back to step 0 and to the end of this session, so you see it again
- **knew it**: one step up
- **unsure**: counts as don't know, marks the card `? unsure` and leaves the session. Unsure cards wait for your agent: [slp-session](slp-session.md) offers to go over them

Only the first rating of a card in a session counts. Ratings are saved at the end of the session, when you open the list and when you close the page. The last screen shows how many you knew, didn't know and were unsure of, and the answers of the ones you missed.

While studying you can also add, edit, skip or delete the current card.

## Scheduling

Leitner boxes, counted from your ratings. A card's step is the number of "knew it" in a row since its last "don't know".

| step | due |
| --- | --- |
| 0 | now: a new card, or after "don't know" |
| 1 … n | the wait of that step after the last review. Defaults: 1, 3, 5, 10, 20, 40 days |
| learned | one more "knew it" after the last step. It stops coming up in study due |

The waits are yours to change in [settings](settings.md) → cards, for every topic. Past ratings are kept: new waits only move when each card is next due.

## Writing cards

`N` opens the form: set, front, back and note. The set can be a note title or any name; empty means the set of its note, or `unsorted`. The note is the `#` heading the card comes from. `⌘⏎` saves, `Esc` cancels. **New set** (`C`) names a set, a note without cards or any name, and writes its first card.

From the notes: select text and press the flashcard button in the toolbar. The selection becomes the back and the note is the section you are in.

## Keys

| key | action |
| --- | --- |
| `⏎` | study due · study again after a session |
| `A` | study all |
| `C` · `N` | new set, new card |
| `L` | list |
| `Space` | reveal |
| `1` · `2` · `3` | don't know, knew it, unsure |
| `E` · `S` · `D` | edit, skip, delete the current card |
| `Esc` | back to the card from the answer, or back one screen |

Change them in settings → shortcuts. All keys: [shortcuts](shortcuts.md).
