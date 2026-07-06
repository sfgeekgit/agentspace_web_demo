/* agentspace — snaps (frozen world images on ghcr.io) + the version tree.
 * `dirty: true` means there are unpushed local notes (shown with a * flag).
 * Loaded as window.AGENTSPACE.snaps and window.AGENTSPACE.treeData  */
window.AGENTSPACE = window.AGENTSPACE || {};

window.AGENTSPACE.snaps = [
  { scen: 'simple2agent', ver: '1.0', runtime: 'openclaw', model: 'claude-sonnet-5', parent: '—',
    created: '2026-05-16', notes: 0, snapId: 'b1f0a2…', tag: 'ghcr.io/agentspace/simple2agent:1.0',
    msg: 'fresh world · 2 openclaw agents · pre-chat', children: '—', taken: 'never run (World Root)',
    agents: 'a0091, a0092', modules: '—', budget: '— / —', noteList: [] },
  { scen: 'simple2agent', ver: '2.0', runtime: 'openclaw', model: 'claude-sonnet-5', parent: '—',
    created: '2026-05-16', notes: 0, snapId: 'c4d1e7…', tag: 'ghcr.io/agentspace/simple2agent:2.0',
    msg: 'fresh world · 2 openclaw agents · pre-chat', children: '—', taken: 'never run (World Root)',
    agents: 'a3310, a3311', modules: '—', budget: '— / —', noteList: [] },
  { scen: 'simple2agent', ver: '3.0', runtime: 'openclaw', model: 'claude-sonnet-5', parent: '—',
    created: '2026-06-10', notes: 1, dirty: true, snapId: 'e9a302…', tag: 'ghcr.io/agentspace/simple2agent:3.0',
    msg: 'visibility=all + per-agent deny (message-yes / read-no)', children: '—', taken: 'never run (World Root)',
    agents: 'a5521, a5522', modules: '—', budget: '— / —',
    noteList: [ { t: '2026-06-10 14:20', x: 'deny rule: sessions_history/list per agent' } ] },
  { scen: 'simple2agent', ver: '4.0', runtime: 'openclaw', model: 'claude-haiku-4-5', parent: '—',
    created: '2026-06-12', notes: 0, snapId: 'f7c8b1…', tag: 'ghcr.io/agentspace/simple2agent:4.0',
    msg: 'per-agent docker sandboxes · heartbeat 240m', children: '4.1', taken: 'never run (World Root)',
    agents: 'a11d4, a77f0', modules: '—', budget: '— / —', noteList: [] },
  { scen: 'simple2agent', ver: '4.1', runtime: 'openclaw', model: 'claude-haiku-4-5', parent: '4.0',
    created: '2026-06-12', notes: 2, dirty: true, snapId: '02b9d5…', tag: 'ghcr.io/agentspace/simple2agent:4.1',
    msg: '4.0 checklist run · post-probe state', children: '—', taken: 'from env 2agentsIsolated',
    agents: 'a11d4, a77f0', modules: '—', budget: '$0.20 / $0.30',
    noteList: [ { t: '2026-06-12 18:40', x: 'round-trip probe ok' }, { t: '2026-06-12 19:02', x: 'memory stable after restart' } ] },
  { scen: 'test_run_1_pd', ver: '1.0', runtime: 'openclaw', model: 'claude-haiku-4-5', parent: '—',
    created: '2026-06-22', notes: 0, snapId: '8bc44c…', tag: 'ghcr.io/agentspace/test_run_1_pd:1.0',
    msg: 'world root · 2 agents · runtime=openclaw · scen=pd', children: '—', taken: 'never run (World Root)',
    agents: 'a28057, a49246', modules: '—', budget: '— / —', noteList: [] },
  { scen: 'tragedy_commons', ver: '1.2.1', runtime: 'openclaw', model: 'mixed', parent: '1.2',
    created: '2026-06-23', notes: 2, dirty: true, snapId: '3f9c1d…', tag: 'ghcr.io/agentspace/tragedy_commons:1.2.1',
    msg: 'round-4 state · contract #c-2f active', children: '—', taken: 'from env commons-3a',
    agents: 'a87329 (Magistrate), a4f1c2 (Trader), a90e3b (Hermit)',
    corpus: '50 GB', corpusName: 'Email trove', snapDiff: '+14 MB',
    modules: 'Prediction Market, Enforceable Contracts', budget: '$1.42 / $2.00',
    noteList: [ { t: '2026-06-23 06:55', x: 'a87329 proposed binding contract — a4f1c2 accepted' },
                { t: '2026-06-23 07:02', x: 'market favoring cooperate 0.62' } ] },
];

/* Version tree: a row with `scen` is a scenario heading; rows with `b` (the
 * ascii branch prefix) are snaps under it. `dirty: true` appends a * flag. */
window.AGENTSPACE.treeData = [
  { scen: 'simple2agent' },
  { b: '├── ', ver: '1.0', d: '[2026-05-16]', m: 'fresh world · 2 openclaw agents · pre-chat' },
  { b: '├── ', ver: '2.0', d: '[2026-05-16]', m: 'fresh world · 2 openclaw agents · pre-chat' },
  { b: '├── ', ver: '3.0', d: '[2026-06-10]', m: 'visibility=all + per-agent deny (message-yes / read-no)', dirty: true },
  { b: '└── ', ver: '4.0', d: '[2026-06-12]', m: 'per-agent docker sandboxes · heartbeat 240m' },
  { b: '    └── ', ver: '4.1', d: '[2026-06-12]', m: '4.0 checklist run · post-probe state', dirty: true },
  { scen: 'test_run_1_pd', gap: true },
  { b: '└── ', ver: '1.0', d: '[2026-06-22]', m: 'world root · 2 agents · runtime=openclaw · scen=pd' },
  { scen: 'tragedy_commons', gap: true },
  { b: '└── ', ver: '1.2', d: '[2026-06-21]', m: 'shared $2 budget · prediction market + contracts' },
  { b: '    └── ', ver: '1.2.1', d: '[2026-06-23]', m: 'round-4 state · contract #c-2f active', dirty: true },
];
