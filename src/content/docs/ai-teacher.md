---
tag: agent layer
endpoint: agent/
---

# AI teacher

Studying alone fails at the same point: nobody tells you what you got wrong. The agent plays the teacher. It explains from what you already know, asks before it tells, grades against a rubric and writes down your mistakes so they come back in review.

It never replaces the work. You read, you answer, you produce. It gives feedback.

## Key terms

- **LLM**: a language model. Reads text, writes text. Claude, GPT, Gemini, or a local one via Ollama
- **agent**: an LLM that can use tools: read and write files, search the web, run commands. Claude Code, Codex, Gemini CLI, opencode. You talk to it in the third window
- **skill**: a Markdown file with instructions for one job, in the Agent Skills format: `name` + `description` frontmatter, steps below. The agent loads it when you call it or when your request matches its description

## What the teacher does

| role | skill |
| --- | --- |
| checks your level before teaching | [slp-init](slp-init.md), [slp-teach](slp-teach.md) |
| explains, node by node | [slp-teach](slp-teach.md) |
| condenses your material | [slp-summarize](slp-summarize.md) |
| builds exams and exercises | [slp-exam](slp-exam.md), [slp-exercises](slp-exercises.md) |
| grades and gives feedback | [slp-grade](slp-grade.md) |
| brings back what fades | [slp-review](slp-review.md) |
| verifies before stating | [researcher](researcher.md) |

## Memory

The agent keeps no memory between sessions. The topic folder is the memory: `learning.md` holds what you've shown and what you got wrong, `progress/` holds where you are. Every skill reads them before writing.

## Agents

- **[researcher](researcher.md)**: verifies a fact or maps a topic, with sources. Shared by every topic
- **[teacher-\<slug>](teacher.md)**: one per topic, created by `slp-init`. A persona who would teach that subject in real life

// a structured knowledge base per topic (OKF / llm-wiki) is planned, not built. See [roadmap](roadmap.md)
