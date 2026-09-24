export const NAV = [
  ['introduction', [
    ['overview', 'overview'],
    ['getting-started', 'getting started'],
    ['install', 'installation'],
    ['setup', 'setup'],
    ['init', 'init'],
    ['cli', 'uv run slp'],
    ['windows', 'three windows'],
    ['language', 'language'],
    ['dictation', 'dictation'],
    ['profiles', 'profiles'],
  ]],
  ['skills', [
    ['slp-session', 'slp-session', 'plan'],
    ['slp-setup', 'slp-setup', 'setup'],
    ['slp-init', 'slp-init', 'setup'],
    ['slp-summarize', 'slp-summarize', 'prep'],
    ['slp-teach', 'slp-teach', 'prep'],
    ['slp-exercises', 'slp-exercises', 'prac'],
    ['slp-exam', 'slp-exam', 'prac'],
    ['slp-grade', 'slp-grade', 'feed'],
    ['slp-review', 'slp-review', 'rev'],
  ]],
  ['agents', [
    ['researcher', 'researcher', 'agent'],
    ['teacher', 'teacher-<slug>', 'agent'],
  ]],
  ['folders', [
    ['topics', 'topics/<slug>', 'dir'],
    ['topic-json', 'topic.json', 'file'],
    ['learning-md', 'learning.md', 'file'],
    ['notes', 'notes/', 'dir'],
    ['exams', 'exams/', 'dir'],
    ['exercises', 'exercises/', 'dir'],
    ['progress', 'progress/', 'dir'],
    ['agent-dir', 'agent/', 'dir'],
  ]],
  ['project', [
    ['contributing', 'contributing'],
  ]],
];

export const DOCS = NAV.flatMap(([, items]) => items.map(([id, label, tag]) => ({ id, label, tag })));
