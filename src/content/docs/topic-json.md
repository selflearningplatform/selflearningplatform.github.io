---
tag: file
endpoint: topics/<slug>/topic.json
---

# topic.json

Identity and preferences of a topic. Written by [slp-init](slp-init.md), completed by [slp-session](slp-session.md). The app edits only `title`, `subtitle` and `links`, and keeps the rest.

```topics/example/topic.json
{
  "title": "Example topic: HTTP basics",
  "subtitle": "Template showing how a topic is structured",
  "type": "documentation",
  "area": "web",
  "order": 999,
  "goals": [
    "Pick the right method for a request and justify it by safety and idempotency",
    "Choose the status code a response should carry, by range and meaning"
  ],
  "reason": "Design and review small REST APIs without guessing methods and codes.",
  "language": { "source": "en", "notes": "en", "exams": "en" },
  "routine": { "cadence": "", "session": "" },
  "end_date": "",
  "sources_mode": "both",
  "links": [
    { "title": "MDN: Overview of HTTP",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" },
    { "title": "HTTP: The Definitive Guide (my copy)",
      "path": "~/Books/http-the-definitive-guide.pdf" }
  ]
}
```

| field | meaning |
| --- | --- |
| `title` | shown in the app. Missing: the folder name |
| `subtitle` | the line under the title |
| `type` | `book` · `certification` · `documentation` · `course` · `practice`. Changes how exams are written. The app shows `book` when missing |
| `area` | kebab-case, shared across topics: `software-architecture` |
| `order` | position in the app's lists, shown as the 3-digit `#`: 1–999. Missing: last, shown as `—` |
| `goals` | 1–3 concrete goals |
| `reason` | what changes once you know it. With `goals`, the mission |
| `language` | see below |
| `routine` | `cadence` and `session` length, free text |
| `end_date` | `YYYY-MM-DD`, when you want to finish |
| `sources_mode` | where the agent looks things up: `web` · `local` · `both`. No connection means `local` |
| `links` | sources: `{ title, url }` (http or https) or `{ title, path }` to a file anywhere on disk. `resources/` is always a source without being listed |
| `teacher` | optional, `false` only: you declined a teacher persona and the agent won't offer it again |

## Language

Default languages for what the agent writes. Ask for another in any single request ("give me the exam in English") without touching the file. The agent chats in whatever language you write in.

| key | sets the default for |
| --- | --- |
| `source` | the language of the material |
| `notes` | notes, summaries, lessons, and dictation in the notes |
| `exams` | exams, exercises and feedback |
