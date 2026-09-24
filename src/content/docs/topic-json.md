---
tag: file
endpoint: topics/<slug>/topic.json
---

# topic.json

Identity and preferences of a topic. Written by [slp-init](slp-init.md), completed by [slp-session](slp-session.md).

```topics/example/topic.json
{
"title": "Example topic: HTTP basics",
"type": "documentation",
"area": "web",
"goals": [],
"language": { "source": "en", "notes": "en", "exams": "en" },
"routine": { "cadence": "", "session": "" },
"sources_mode": "both",
"links": [
    { "title": "MDN: Overview of HTTP",
      "url": "https://developer.mozilla.org/..." },
    { "title": "HTTP: The Definitive Guide",
      "path": "~/Books/http.pdf" }
]
}
```

| field | meaning |
| --- | --- |
| `type` | book · certification · documentation · course · practice |
| `area` | kebab-case, shared across topics |
| `goals` | 1–3 concrete goals |
| `language` | [source · notes · exams](language.md) |
| `routine` | cadence and session length |
| `sources_mode` | `web` · `local` · `both` |
| `links` | sources: a `url` or a local `path` |
