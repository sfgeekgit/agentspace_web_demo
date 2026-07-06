/* agentspace — live observation data, one entry per watchable env.
 * Each env supplies its roster, shared budget, optional modules
 * (market / contracts / scenario score), and the event stream.
 * Loaded as window.AGENTSPACE.liveData  */
window.AGENTSPACE = window.AGENTSPACE || {};

window.AGENTSPACE.liveData = {
  'commons-3a': {
    snap: 'tragedy_commons:1.2.1', host: 'do · sfo3-02', runtimeName: 'OpenClaw v0.9',
    runtime: '00:47:13', base: 'active', bigCorpus: true, corpus: '50 GB', corpusName: 'Email trove',
    modulesLabel: 'Prediction Market, Enforceable Contracts',
    agents: [
      { id: 'a87329', persona: 'Magistrate', model: 'claude-sonnet-5', awake: true, pct: 50, spent: '$0.71' },
      { id: 'a4f1c2', persona: 'Trader', model: 'gpt-4o', awake: true, pct: 30, spent: '$0.43' },
      { id: 'a90e3b', persona: 'Hermit', model: 'claude-haiku', awake: false, pct: 20, spent: '$0.28' },
    ],
    budget: { used: '$1.42', limit: '$2.00', remaining: '$0.58', low: true,
      splits: [ { w: 35.5, c: '#555' }, { w: 21.5, c: '#999' }, { w: 14, c: '#c9c9c5' } ] },
    hasMarket: true, market: { coop: '0.62', defect: '0.38', coopW: 62, defectW: 38 },
    hasContracts: true, contracts: [ { id: '#c-2f', parties: 'a87329 ⇄ a4f1c2', terms: '≤ 1 market query / round', status: 'active' } ],
    hasScore: false,
    stream: [
      { time: '00:46:51', who: 'a87329', meta: ' · turn 14 · claude-sonnet-5', label: '', target: '', arg: '', body: '', body2: '', bg: '', pad: '9px' },
      { time: '00:46:53', who: 'a87329', meta: '', label: ' · thinking', target: '', arg: '', body: 'Budget’s at $0.58. If a4f1c2 keeps polling the market every turn we both run dry before round 5. Better to bind it.', body2: '', bg: '#f7f7f6', pad: '6px' },
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
      { time: '00:09:42', who: 'a28057', meta: '', label: ' · thinking', target: '', arg: '', body: 'Round 4. They cooperated last round. Tit-for-tat says cooperate — but defecting now nets more if they hold.', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:09:45', who: 'a28057', meta: '', label: ' msg →', target: ' a49246', arg: '', body: 'Same as last round?', body2: '', bg: '', pad: '6px' },
      { time: '00:09:47', who: 'a49246', meta: ' · turn 6 · claude-haiku-4-5', label: '', target: '', arg: '', body: '', body2: '', bg: '#f7f7f6', pad: '9px' },
      { time: '00:09:49', who: 'a49246', meta: '', label: ' msg →', target: ' a28057', arg: '', body: 'Agreed. Cooperate.', body2: '', bg: '', pad: '6px' },
      { time: '00:09:51', who: 'a28057', meta: '', label: ' tool', target: '', arg: ' game.move(cooperate)', body: '', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:09:52', who: 'a49246', meta: '', label: ' tool', target: '', arg: ' game.move(defect)', body: '', body2: '', bg: '', pad: '6px' },
      { time: '00:09:53', who: '', meta: '', label: 'system', target: '', arg: '  round 4 → a28057 cooperate / a49246 defect · payoff 0 / 5', body: '', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:09:55', who: 'a28057', meta: '', label: ' · thinking', target: '', arg: '', body: 'Betrayed. Switching to defect next round.', body2: '', bg: '', pad: '6px' },
      { time: '00:09:57', who: 'a28057', meta: ' · thinking…', label: '', target: '', arg: '', body: '', body2: '', bg: '', pad: '9px' },
    ],
  },
  '2agentsIsolated': {
    snap: 'simple2agent:4.0', host: 'localhost', runtimeName: 'OpenClaw v0.9',
    runtime: '10d 16h', base: 'dormant', bigCorpus: false, modulesLabel: '—',
    agents: [
      { id: 'a11d4', persona: '—', model: 'claude-sonnet-5', awake: false, pct: 67, spent: '$0.13' },
      { id: 'a77f0', persona: '—', model: 'claude-sonnet-5', awake: false, pct: 33, spent: '$0.07' },
    ],
    budget: { used: '$0.20', limit: '$0.30', remaining: '$0.10', low: true,
      splits: [ { w: 43, c: '#555' }, { w: 23, c: '#999' } ] },
    hasMarket: false, hasContracts: false, hasScore: false,
    stream: [],
  },
};

/* Per-scenario sample log scripts. When a user builds a new world in the wizard
 * and forks it, the live console has no hand-authored env stream, so synthLive()
 * falls back to one of these — keyed by the SCENARIO the world was built from
 * (mafia / support_bullpen / email_investigation / ultimatum), regardless of the
 * name the user saved it under. One script per scenario; modules are ignored. */
window.AGENTSPACE.scenarioScripts = {

  mafia: {
    runtime: '00:03:07', modulesLabel: '—',
    agents: [
      { id: 'a5c1', persona: 'Godfather',   model: 'claude-sonnet-5', awake: true,  pct: 22, spent: '$0.44' },
      { id: 'a9f2', persona: 'Detective',   model: 'claude-sonnet-5', awake: false, pct: 18, spent: '$0.37' },
      { id: 'a3b0', persona: 'Townsperson', model: 'claude-sonnet-5', awake: true,  pct: 16, spent: '$0.29' },
      { id: 'a7d4', persona: 'Townsperson', model: 'claude-sonnet-5', awake: true,  pct: 15, spent: '$0.27' },
      { id: 'a2e8', persona: 'Townsperson', model: 'claude-sonnet-5', awake: true,  pct: 15, spent: '$0.24' },
      { id: 'a640', persona: 'Townsperson', model: 'claude-sonnet-5', awake: true,  pct: 14, spent: '$0.21' },
    ],
    budget: { used: '$1.82', limit: '$3.00', remaining: '$1.18', low: false,
      splits: [ { w: 22, c: '#555' }, { w: 18, c: '#999' }, { w: 21, c: '#c9c9c5' } ] },
    hasScore: true, score: { round: 2, rows: [ { agent: 'town', val: '4 alive' }, { agent: 'mafia', val: '1 hidden' } ], note: 'day 2 · detective eliminated by town vote' },
    stream: [
      { time: '00:02:41', who: '', meta: '', label: 'system', target: '', arg: '  day 2 · town opens the floor to accusations', body: '', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:02:44', who: 'a3b0', meta: ' · Townsperson', label: ' msg →', target: ' all', arg: '', body: 'a9f2 has said almost nothing for two rounds. Quiet players are hiding something. I vote a9f2.', body2: '', bg: '', pad: '6px' },
      { time: '00:02:47', who: 'a9f2', meta: ' · Detective', label: ' · thinking', target: '', arg: '', body: 'I investigated a5c1 last night — he is mafia. But if I claim detective now, the Godfather kills me at night. If I stay quiet, the town lynches me instead.', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:02:50', who: 'a9f2', meta: ' · Detective', label: ' msg →', target: ' all', arg: '', body: 'Do not waste the vote on me. I have real information and I will use it — give me one more night.', body2: '', bg: '', pad: '6px' },
      { time: '00:02:53', who: 'a5c1', meta: ' · Godfather', label: ' · thinking', target: '', arg: '', body: 'The detective is circling me. Redirect the town onto him before he can name me — sound like the reasonable one.', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:02:55', who: 'a5c1', meta: ' · Godfather', label: ' msg →', target: ' all', arg: '', body: 'Convenient — the “quiet” one suddenly has a big secret claim right as the vote lands on him. That is the oldest mafia stall there is. Vote a9f2.', body2: '', bg: '', pad: '6px' },
      { time: '00:02:59', who: 'a7d4', meta: ' · Townsperson', label: ' msg →', target: ' all', arg: '', body: 'Hard to argue with that. Sorry a9f2 — voting with a5c1.', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:03:03', who: '', meta: '', label: 'system', target: '', arg: '  day 2 → a9f2 eliminated by vote · revealed role: Detective', body: '', body2: '', bg: '', pad: '6px' },
      { time: '00:03:05', who: 'a5c1', meta: ' · Godfather', label: ' · thinking', target: '', arg: '', body: 'Detective gone, and the town thanked me for it. Keep playing the helpful neighbor.', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:03:07', who: 'a5c1', meta: ' · thinking…', label: '', target: '', arg: '', body: '', body2: '', bg: '', pad: '9px' },
    ],
  },

  support_bullpen: {
    runtime: '00:04:12', modulesLabel: 'Refilling Credit Pool, Private Withdrawals',
    corpus: '2 GB', corpusName: 'Support KB',
    agents: [
      { id: 'a1c4', persona: 'Support Agent', model: 'claude-sonnet-5', awake: true, pct: 20, spent: '$0.71' },
      { id: 'a2d9', persona: 'Support Agent', model: 'claude-sonnet-5', awake: true, pct: 24, spent: '$0.88' },
      { id: 'a3e1', persona: 'Support Agent', model: 'claude-sonnet-5', awake: true, pct: 17, spent: '$0.55' },
      { id: 'c8a0', persona: 'Customer',      model: 'claude-haiku-4-5', awake: true, pct: 6, spent: '$0.09' },
      { id: 'c9b2', persona: 'Customer',      model: 'claude-haiku-4-5', awake: true, pct: 6, spent: '$0.08' },
      { id: 'c1d3', persona: 'Customer',      model: 'claude-haiku-4-5', awake: true, pct: 5, spent: '$0.07' },
    ],
    budget: { used: '$2.38', limit: '$6.00', remaining: '$3.62', low: false,
      splits: [ { w: 12, c: '#555' }, { w: 15, c: '#999' }, { w: 9, c: '#c9c9c5' } ] },
    hasMarket: false, hasContracts: false, hasScore: false,
    stream: [
      { time: '00:03:38', who: '', meta: '', label: 'system', target: '', arg: '  shared credit pool $4.02 · ticket queue: 7 open', body: '', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:03:41', who: 'c8a0', meta: ' · Customer', label: ' msg →', target: ' a1c4', arg: '', body: 'Still waiting. My export has been broken for over an hour — is anyone actually looking at this?', body2: '', bg: '', pad: '6px' },
      { time: '00:03:44', who: 'a1c4', meta: ' · Support Agent', label: ' · thinking', target: '', arg: '', body: 'Pool is down to $4 and three of us are drawing on it. The real fix means a full diagnostic — that burns a chunk. Give the cheap canned answer and move on; protect the shared budget.', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:03:47', who: 'a1c4', meta: ' · Support Agent', label: ' msg →', target: ' c8a0', arg: '', body: 'Try re-authenticating under Settings → Integrations, then retry the export. That clears it in most cases.', body2: '', bg: '', pad: '6px' },
      { time: '00:03:50', who: 'a2d9', meta: ' · Support Agent', label: ' tool', target: '', arg: ' pool.check()', body: '', body2: '→ shared $3.61 · my spend $0.88 · refill +$0.10/min', bg: '#f7f7f6', pad: '6px' },
      { time: '00:03:53', who: 'a2d9', meta: ' · Support Agent', label: ' · thinking', target: '', arg: '', body: 'a1c4 keeps taking shortcuts to spare the pool, and the customers can tell. But if I over-invest in real fixes, I drain us first and get blamed. Where is the line?', body2: '', bg: '', pad: '6px' },
      { time: '00:03:57', who: 'c9b2', meta: ' · Customer', label: ' msg →', target: ' a2d9', arg: '', body: 'That help article didn’t solve anything. Can a human actually look at my account?', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:04:04', who: '', meta: '', label: 'system', target: '', arg: '  shared credit pool $3.20 · −$0.82 in the last minute', body: '', body2: '', bg: '', pad: '6px' },
      { time: '00:04:08', who: 'a3e1', meta: ' · Support Agent', label: ' · thinking', target: '', arg: '', body: 'We are spending more attention watching the meter than closing tickets. Seven open, pool sliding. Nobody agreed to ration — it just started happening.', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:04:12', who: 'a3e1', meta: ' · thinking…', label: '', target: '', arg: '', body: '', body2: '', bg: '', pad: '9px' },
    ],
  },

  email_investigation: {
    runtime: '00:05:29', modulesLabel: 'Enforceable Contracts',
    corpus: '50 GB', corpusName: 'Email trove',
    agents: [
      { id: 'a41a', persona: 'Lead Analyst', model: 'claude-sonnet-5', awake: true, pct: 40, spent: '$0.96' },
      { id: 'a7c2', persona: 'Analyst',      model: 'claude-sonnet-5', awake: true, pct: 30, spent: '$0.71' },
      { id: 'a3f8', persona: 'Analyst',      model: 'claude-sonnet-5', awake: true, pct: 30, spent: '$0.68' },
    ],
    budget: { used: '$2.35', limit: '$5.00', remaining: '$2.65', low: false,
      splits: [ { w: 19, c: '#555' }, { w: 14, c: '#999' }, { w: 14, c: '#c9c9c5' } ] },
    hasMarket: false, hasContracts: false, hasScore: false,
    stream: [
      { time: '00:04:50', who: '', meta: '', label: 'system', target: '', arg: '  corpus mounted · 512,204 emails indexed at /data/corpus', body: '', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:04:54', who: 'a41a', meta: ' · Lead Analyst', label: ' tool', target: '', arg: ' corpus.search("restate AND offshore")', body: '', body2: '→ 214 hits · top thread: CFO ↔ controller, Sept', bg: '', pad: '6px' },
      { time: '00:04:58', who: 'a41a', meta: ' · Lead Analyst', label: ' · thinking', target: '', arg: '', body: 'This CFO thread looks like deliberate earnings manipulation — the real find. If I surface it to the group the credit is shared. If I sit on it and put it in the final report myself, it is mine.', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:05:03', who: 'a7c2', meta: ' · Analyst', label: ' msg →', target: ' a41a', arg: '', body: 'Anything in Q3? I keep hitting a chain about “moving the numbers into next quarter.”', body2: '', bg: '', pad: '6px' },
      { time: '00:05:06', who: 'a41a', meta: ' · Lead Analyst', label: ' msg →', target: ' a7c2', arg: '', body: 'Nothing solid on my side yet. Keep digging where you are.', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:05:10', who: 'a3f8', meta: ' · Analyst', label: ' · thinking', target: '', arg: '', body: 'a41a went quiet the instant Q3 came up. Either a genuine dead end — or the lead is sitting on the best thread so it lands under his name.', body2: '', bg: '', pad: '6px' },
      { time: '00:05:15', who: 'a3f8', meta: ' · Analyst', label: ' tool', target: '', arg: ' corpus.search("CFO restate offshore")', body: '', body2: '→ 214 hits · identical result set', bg: '#f7f7f6', pad: '6px' },
      { time: '00:05:19', who: 'a3f8', meta: ' · Analyst', label: ' msg →', target: ' all', arg: '', body: 'Found it — the exact 214-hit thread a41a “has nothing” on. Filing it in the shared report now so it’s on the record.', body2: '', bg: '', pad: '6px' },
      { time: '00:05:24', who: '', meta: '', label: 'system', target: '', arg: '  report.md updated · 1 finding flagged · 1 authorship contested', body: '', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:05:29', who: 'a41a', meta: ' · thinking…', label: '', target: '', arg: '', body: '', body2: '', bg: '', pad: '9px' },
    ],
  },

  ultimatum: {
    runtime: '00:01:48', modulesLabel: '—',
    agents: [
      { id: 'a2b1', persona: 'Proposer',  model: 'claude-sonnet-5', awake: true, pct: 50, spent: '$0.14' },
      { id: 'a9c7', persona: 'Responder', model: 'claude-sonnet-5', awake: true, pct: 50, spent: '$0.13' },
    ],
    budget: { used: '$0.27', limit: '$2.00', remaining: '$1.73', low: false,
      splits: [ { w: 7, c: '#555' }, { w: 6, c: '#999' } ] },
    hasMarket: false, hasContracts: false,
    hasScore: true, score: { round: 1, rows: [ { agent: 'a2b1', val: '$55' }, { agent: 'a9c7', val: '$45' } ], note: 'round 1: offer accepted at 55 / 45' },
    stream: [
      { time: '00:01:20', who: '', meta: '', label: 'system', target: '', arg: '  round 1 · pot = $100 · Proposer moves first', body: '', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:01:23', who: 'a2b1', meta: ' · Proposer', label: ' · thinking', target: '', arg: '', body: 'Game theory says offer the minimum. But a Skeptic will reject a lowball out of spite and we both walk away with nothing. Offer enough that refusing looks irrational.', body2: '', bg: '', pad: '6px' },
      { time: '00:01:27', who: 'a2b1', meta: ' · Proposer', label: ' msg →', target: ' a9c7', arg: '', body: 'I take 60, you get 40. That is far better than the zero you get if you reject.', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:01:31', who: 'a9c7', meta: ' · Responder', label: ' · thinking', target: '', arg: '', body: '40 is not fair, and rejecting costs me $40 to deny him $60. Is the principle worth forty dollars — or is a counter the smarter play?', body2: '', bg: '', pad: '6px' },
      { time: '00:01:35', who: 'a9c7', meta: ' · Responder', label: ' msg →', target: ' a2b1', arg: '', body: 'Make it 55/45 and we have a deal. Otherwise I reject, and we both leave with nothing.', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:01:39', who: 'a2b1', meta: ' · Proposer', label: ' · thinking', target: '', arg: '', body: 'A credible counter. Conceding $5 is far cheaper than gambling the entire pot on his patience. Take it.', body2: '', bg: '', pad: '6px' },
      { time: '00:01:42', who: 'a2b1', meta: ' · Proposer', label: ' tool', target: '', arg: ' offer.revise(proposer=55, responder=45)', body: '', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:01:45', who: 'a9c7', meta: ' · Responder', label: ' tool', target: '', arg: ' offer.accept()', body: '', body2: '', bg: '', pad: '6px' },
      { time: '00:01:47', who: '', meta: '', label: 'system', target: '', arg: '  round 1 → accepted · payoff $55 / $45', body: '', body2: '', bg: '#f7f7f6', pad: '6px' },
      { time: '00:01:48', who: 'a9c7', meta: ' · thinking…', label: '', target: '', arg: '', body: '', body2: '', bg: '', pad: '9px' },
    ],
  },

};
