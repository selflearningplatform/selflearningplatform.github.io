export const NAV = [
  ['introduction', [
    ['overview', 'overview'],
    ['prerequisites', 'prerequisites'],
    ['install', 'installation'],
    ['getting-started', 'getting started'],
  ]],
  ['ai teacher', [
    ['ai-teacher', 'why an agent'],
    ['skills', 'skills'],
    ['slp-session', 'slp-session', 'plan'],
    ['slp-setup', 'slp-setup', 'setup'],
    ['slp-init', 'slp-init', 'setup'],
    ['slp-summarize', 'slp-summarize', 'prep'],
    ['slp-teach', 'slp-teach', 'prep'],
    ['slp-exercises', 'slp-exercises', 'prac'],
    ['slp-exam', 'slp-exam', 'prac'],
    ['slp-grade', 'slp-grade', 'feed'],
    ['slp-review', 'slp-review', 'rev'],
    ['researcher', 'researcher', 'agent'],
    ['teacher', 'teacher-<slug>', 'agent'],
    ['profiles', 'profiles'],
  ]],
  ['visual interface', [
    ['deploy', 'deploy'],
    ['editor', 'notes', 'view'],
    ['exam-app', 'exams', 'view'],
    ['settings', 'settings', 'view'],
    ['dictation', 'dictation'],
    ['shortcuts', 'shortcuts'],
  ]],
  ['filesystem', [
    ['topics', 'topics/<slug>', 'dir'],
    ['topic-json', 'topic.json', 'file'],
    ['learning-md', 'learning.md', 'file'],
    ['notes', 'notes/', 'dir'],
    ['exams', 'exams/', 'dir'],
    ['exercises', 'exercises/', 'dir'],
    ['progress', 'progress/', 'dir'],
    ['settings-json', 'settings.json', 'file'],
    ['agent-dir', 'agent/', 'dir'],
  ]],
  ['project', [
    ['contributing', 'contributing'],
    ['roadmap', 'roadmap'],
  ]],
];

export const DOCS = NAV.flatMap(([, items]) => items.map(([id, label, tag]) => ({ id, label, tag })));
