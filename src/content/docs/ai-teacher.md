---
tag: agent layer
endpoint: agent/
---

# AI teacher

Studying alone fails at the same point: nobody tells you what you got wrong. The agent plays the teacher. It explains from what you already know, asks before it tells, grades against a rubric and writes down your mistakes so the next exercise and exam press on them.

It never replaces the work. You read, you answer, you produce. It gives feedback.

## Key terms

- **LLM**: a language model. Reads text, writes text. Claude, GPT, Gemini, or a local one via Ollama
- **agent**: an LLM that can use tools: read and write files, search the web, run commands. Claude Code, Codex, Gemini CLI, opencode. You talk to it in the third window
- **skill**: a Markdown file with instructions for one job, in the Agent Skills format: `name` + `description` frontmatter, steps below. The agent loads it when you call it or when your request matches its description

## What the teacher does

| role | skill |
| --- | --- |
| measures your level | [slp-quiz](slp-quiz.md), [slp-teach](slp-teach.md) |
| explains, node by node | [slp-teach](slp-teach.md) |
| condenses your material | [slp-summarize](slp-summarize.md) |
| builds exams and exercises | [slp-exam](slp-exam.md), [slp-exercises](slp-exercises.md) |
| grades and gives feedback | [slp-grade](slp-grade.md) |
| turns your notes into flashcards | [slp-cards](slp-cards.md) |
| reads your sessions and says what's next | [slp-session](slp-session.md) |
| verifies before stating | [researcher](researcher.md) |

Everything it writes is plain JSON and Markdown, so you can write any of it by hand: a topic, notes, cards, an exam, an exercise. The skills guide the process. What needs the agent is the judgment: teaching, grading, reading your sessions, keeping the wiki.

## Memory

The agent keeps no memory between sessions. The topic folder is the memory: `learning.md` holds what you've shown and what you got wrong, `progress/` holds where you are and every study session, `wiki/` holds the map of the subject. Every skill reads them before writing.

## Wiki

Each topic has a `wiki/`: the agent's own map of the subject, an OKF bundle in the llm-wiki pattern. One page per concept with what it depends on and its sources, one page per source, and an index. `slp-teach`, `slp-summarize` and `slp-session` write it; `slp-teach` reads it to plan a lesson, and `slp-exam`, `slp-exercises` and `slp-quiz` draw on it. The only thing it records about you is which sessions studied each concept. The app doesn't show it. Format: [wiki/](wiki.md).

## Agents

- **[researcher](researcher.md)**: verifies a fact or maps a topic, with sources. Shared by every topic
- **[teacher-\<slug>](teacher.md)**: one per topic, offered by `slp-init`. A persona the agent adopts while teaching: who would teach that subject in real life
