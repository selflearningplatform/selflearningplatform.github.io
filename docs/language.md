---
tag: field
endpoint: topic.json → language
---

# Language

Each topic sets default languages for what the agent writes. Ask for another in any single request ("give me the exam in English") without touching the file. The agent chats in whatever language you write in.

```topic.json
"language": {
"source": "en",
"notes": "es",
"exams": "en"
}
```

| key | sets the default for |
| --- | --- |
| `source` | the language of the material |
| `notes` | notes, summaries and lessons |
| `exams` | exams, exercises and feedback |
