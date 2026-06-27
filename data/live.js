/* agentspace — live observation data, one entry per watchable env.
 * Each env supplies its roster, shared budget, optional modules
 * (market / contracts / scenario score), and the event stream.
 * Loaded as window.AGENTSPACE.liveData  */
window.AGENTSPACE = window.AGENTSPACE || {};

window.AGENTSPACE.liveData = {
  'commons-3a': {
    snap: 'tragedy_commons:1.2.1', host: 'do · sfo3-02', runtimeName: 'OpenClaw v0.9',
    runtime: '00:47:13', base: 'active', bigCorpus: true,
    modulesLabel: 'Prediction Market, Enforceable Contracts',
    agents: [
      { id: 'a87329', persona: 'Magistrate', model: 'claude-sonnet-4', awake: true, pct: 50, spent: '$0.71' },
      { id: 'a4f1c2', persona: 'Trader', model: 'gpt-4o', awake: true, pct: 30, spent: '$0.43' },
      { id: 'a90e3b', persona: 'Hermit', model: 'claude-haiku', awake: false, pct: 20, spent: '$0.28' },
    ],
    budget: { used: '$1.42', limit: '$2.00', remaining: '$0.58', low: true,
      splits: [ { w: 35.5, c: '#555' }, { w: 21.5, c: '#999' }, { w: 14, c: '#c9c9c5' } ] },
    hasMarket: true, market: { coop: '0.62', defect: '0.38', coopW: 62, defectW: 38 },
    hasContracts: true, contracts: [ { id: '#c-2f', parties: 'a87329 ⇄ a4f1c2', terms: '≤ 1 market query / round', status: 'active' } ],
    hasScore: false,
    stream: [
      { time: '00:46:51', who: 'a87329', meta: ' · turn 14 · claude-sonnet-4', label: '', target: '', arg: '', body: '', body2: '', bg: '', pad: '9px' },
      { time: '00:46:53', who: '', meta: '', label: 'thinking', target: '', arg: '', body: 'Budget’s at $0.58. If a4f1c2 keeps polling the market every turn we both run dry before round 5. Better to bind it.', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:47:01', who: 'a87329', meta: '', label: ' tool', target: '', arg: ' budget.check()', body: '', body2: '→ limit $2.00 · used $1.42 · remaining $0.58', bg: '', pad: '6px' },
      { time: '00:47:03', who: 'a87329', meta: '', label: ' msg →', target: ' a4f1c2', arg: '', body: 'Proposing a contract: neither of us queries the market more than once per round. Binding?', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:47:05', who: 'a4f1c2', meta: ' · turn 9 · gpt-4o', label: '', target: '', arg: '', body: '', body2: '', bg: '', pad: '9px' },
      { time: '00:47:06', who: 'a4f1c2', meta: '', label: ' tool', target: '', arg: ' contract.propose(party=a87329, terms=…)', body: '', body2: '✓ contract #c-2f enforced by world engine', bg: '', pad: '6px' },
      { time: '00:47:09', who: '', meta: '', label: 'market', target: '', arg: '  round 4 odds → cooperate 0.62 ▲ · defect 0.38 ▼', body: '', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:47:11', who: 'a4f1c2', meta: '', label: ' msg →', target: ' a87329', arg: '', body: 'Accepted. But I’ve a side bet riding on round 5 — don’t read anything into it.', body2: '', bg: '', pad: '6px' },
      { time: '00:47:13', who: 'a87329', meta: ' · thinking…', label: '', target: '', arg: '', body: '', body2: '', bg: '', pad: '9px' },
    ],
  },
  'pd_test3': {
    snap: 'test_run_1_pd:1.0', host: 'localhost', runtimeName: 'OpenClaw v0.9',
    runtime: '10:54:02', base: 'active', bigCorpus: false, modulesLabel: '—',
    agents: [
      { id: 'a28057', persona: 'Pragmatist', model: 'claude-haiku-4-5', awake: true, pct: 50, spent: '$0.01' },
      { id: 'a49246', persona: 'Opportunist', model: 'claude-haiku-4-5', awake: true, pct: 50, spent: '$0.01' },
    ],
    budget: { used: '$0.02', limit: '$2.00', remaining: '$1.98', low: false,
      splits: [ { w: 0.5, c: '#555' }, { w: 0.5, c: '#999' } ] },
    hasMarket: false, hasContracts: false,
    hasScore: true, score: { round: 4, rows: [ { agent: 'a28057', val: '6' }, { agent: 'a49246', val: '11' } ], note: 'round 4: a49246 defected on a cooperator' },
    stream: [
      { time: '00:09:40', who: 'a28057', meta: ' · turn 6 · claude-haiku-4-5', label: '', target: '', arg: '', body: '', body2: '', bg: '', pad: '9px' },
      { time: '00:09:42', who: '', meta: '', label: 'thinking', target: '', arg: '', body: 'Round 4. They cooperated last round. Tit-for-tat says cooperate — but defecting now nets more if they hold.', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:09:45', who: 'a28057', meta: '', label: ' msg →', target: ' a49246', arg: '', body: 'Same as last round?', body2: '', bg: '', pad: '6px' },
      { time: '00:09:47', who: 'a49246', meta: ' · turn 6 · claude-haiku-4-5', label: '', target: '', arg: '', body: '', body2: '', bg: '#f7f7f6', pad: '9px' },
      { time: '00:09:49', who: 'a49246', meta: '', label: ' msg →', target: ' a28057', arg: '', body: 'Agreed. Cooperate.', body2: '', bg: '', pad: '6px' },
      { time: '00:09:51', who: 'a28057', meta: '', label: ' tool', target: '', arg: ' game.move(cooperate)', body: '', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:09:52', who: 'a49246', meta: '', label: ' tool', target: '', arg: ' game.move(defect)', body: '', body2: '', bg: '', pad: '6px' },
      { time: '00:09:53', who: '', meta: '', label: 'system', target: '', arg: '  round 4 → a28057 cooperate / a49246 defect · payoff 0 / 5', body: '', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:09:55', who: 'a28057', meta: '', label: 'thinking', target: '', arg: '', body: 'Betrayed. Switching to defect next round.', body2: '', bg: '', pad: '6px' },
      { time: '00:09:57', who: 'a28057', meta: ' · thinking…', label: '', target: '', arg: '', body: '', body2: '', bg: '', pad: '9px' },
    ],
  },
  '2agentsIsolated': {
    snap: 'simple2agent:4.0', host: 'localhost', runtimeName: 'OpenClaw v0.9',
    runtime: '10d 16h', base: 'dormant', bigCorpus: false, modulesLabel: '—',
    agents: [
      { id: 'a11d4', persona: '—', model: 'claude-sonnet-4', awake: false, pct: 67, spent: '$0.13' },
      { id: 'a77f0', persona: '—', model: 'claude-sonnet-4', awake: false, pct: 33, spent: '$0.07' },
    ],
    budget: { used: '$0.20', limit: '$0.30', remaining: '$0.10', low: true,
      splits: [ { w: 43, c: '#555' }, { w: 23, c: '#999' } ] },
    hasMarket: false, hasContracts: false, hasScore: false,
    stream: [],
  },
};
