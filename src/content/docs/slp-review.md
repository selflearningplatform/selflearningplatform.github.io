---
tag: rev
endpoint: /slp-review
copy: true
---

# Review

Spaced, interleaved review with Leitner cards. Mixes topics, prioritizes what failed, and rewrites questions so they require recall, not recognition.

```boxes
fast   ██████  new or failed
medium ███     1 correct
slow   █       several correct
         └─ 3× correct → retired
```

- **boxes**: fast → medium → slow. One miss sends a card back to fast
- **retire**: 3 correct in a row in slow; then a weekly maintenance review
- **size**: 12–15 questions, at least two topics when there are two
- **writes**: `topics/review/exams/YYYY-MM-DD/exam.json`
