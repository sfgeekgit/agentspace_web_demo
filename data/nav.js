/* agentspace — navigation structure (sidebar + per-section command menus).
 * Edit labels freely. `view: 1` marks a command that opens a real screen in
 * this demo; commands without it render as dimmed/not-yet-wired.
 * Loaded as window.AGENTSPACE.sections / .menus  */
window.AGENTSPACE = window.AGENTSPACE || {};

window.AGENTSPACE.sections = [
  { key: 'new',    label: 'New world' },
  { key: 'snaps',  label: 'Snaps' },
  { key: 'tree',   label: 'Tree' },
  { key: 'envs',   label: 'Envs' },
  { key: 'watch',  label: 'Watch' },
  { key: 'budget', label: 'Budget' },
  { key: 'fleet',  label: 'Fleet' },
  { key: 'about',  label: 'About' },
];

window.AGENTSPACE.menus = {
  snaps: {
    title: 'Snaps',
    sub: 'Frozen world images on ghcr.io. Fork one to start an env.',
    items: [
      { label: 'List snaps', view: 1 }, { label: 'Show snap', view: 1 }, { label: 'Snap tree', view: 1 },
      { label: 'Add note to snap' }, { label: 'Take snap', tail: '  commit a running env' },
      { label: 'Fork snap', view: 1, tail: '  start an env from a snap' }, { label: 'Pull snap' },
      { label: 'Push snap' }, { label: 'Rebuild index' },
    ],
  },
  envs: {
    title: 'Envs',
    sub: 'Running and stopped world containers.',
    items: [
      { label: 'List envs', view: 1 }, { label: 'Show env', view: 1 },
      { label: 'Start env' }, { label: 'Stop env' }, { label: 'Wake agents' },
      { label: 'Sleep env' }, { label: 'Kill env', tail: '  removes container' },
      { label: 'Watch logs', view: 1 }, { label: 'Exec command' },
    ],
  },
  budget: {
    title: 'Budget',
    sub: 'Shared OpenRouter credit limits — one key per env.',
    items: [ { label: 'Show budget', view: 1 }, { label: 'Top up budget' } ],
  },
};
