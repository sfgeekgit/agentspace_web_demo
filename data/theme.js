/* agentspace — slick UI theme tokens. Single source of truth for the palette.
 * The shell logic (agentspace - Home.dc.html / index.html) reads window.AS_THEME
 * to build every stateful/colored style it passes to the pages. Page templates
 * mirror these values for their structural one-offs. Maps 1:1 to CSS variables
 * when wired to a real backend.
 * Loaded as window.AS_THEME  */
window.AS_THEME = {
  // surfaces
  pageBg:   '#f7f8fa',
  sidebar:  '#ffffff',
  card:     '#ffffff',
  headBg:   '#fafbfc',
  // text
  ink:      '#0f172a',
  body:     '#374151',
  muted:    '#64748b',
  faint:    '#94a3b8',
  // lines
  line:     '#e5e7eb',
  lineSoft: '#f1f5f9',
  // accent (indigo)
  ac:       '#6366f1',
  acDk:     '#4338ca',
  acTint:   '#eef2ff',
  acBorder: '#c7d2fe',
  // status
  active:   '#059669',
  dormant:  '#d97706',
  stopped:  '#94a3b8',
  missing:  '#dc2626',
  warn:     '#f59e0b',
};
