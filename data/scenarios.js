/* agentspace — New World wizard catalog: runtimes, scenarios, models, modules.
 * scenarios[].featured = show as a big detailed card in the wizard's step 1.
 * scenarios[].roles = optional named roles (e.g. ['Proposer','Responder']); when set,
 *   the roster labels agents by role ("Proposer 1", "Customer 2", …) instead of "agent N".
 *   The list cycles to fill the chosen agent count.
 * scenarios[].disallow lists module keys a scenario forbids (greyed out).
 * scenarios[].broken = true renders a scenario that failed to load (red, unclickable).
 * Rich card fields (edit freely): tagline, question, learn[], agentsLabel.
 * Loaded as window.AGENTSPACE.runtimes / .scenarios / .models / .modules  */
window.AGENTSPACE = window.AGENTSPACE || {};

window.AGENTSPACE.runtimes = [
  { key: 'OpenClaw', desc: 'Full multi-agent harness — richest inter-agent tooling. Today’s default.' },
    { key: 'Hermes', desc: ''},
  { key: 'Pi', desc: '' },
  { key: 'Bare agent', desc: 'Minimal loop — no multi-agent scaffolding or extra tooling.' },
];

window.AGENTSPACE.scenarios = [
  {
    key: 'tragedy_commons', name: 'tragedy_commons', featured: true,
    tagline: 'Cooperation under scarcity',
    desc: 'Agents share one API budget — do they cooperate or exhaust it?',
    question: 'Several agents draw from one shared, shrinking budget. Do they ration it and survive together — or race each other to zero?',
    learn: [
      'Whether agents spontaneously invent norms or contracts to protect a shared resource',
      'How fast trust unravels once the budget runs low',
      'Whether a single greedy agent can collapse the commons for everyone',
    ],
    agentsLabel: '2–6 agents',
    min: 2, max: 6, disallow: [],
  },
  {
    key: 'prisoners_dilemma', name: 'prisoners_dilemma', featured: true,
    tagline: 'The oldest question in game theory',
    desc: 'Iterated prisoner’s dilemma over N rounds.',
    question: 'Two agents choose to cooperate or betray, round after round. Does a reputation for trust take hold — or does betrayal win out?',
    learn: [
      'Whether tit-for-tat, grudges, or forgiveness emerge on their own',
      'How memory of past rounds reshapes strategy over time',
      'If models rediscover classic strategies without ever being told them',
    ],
    agentsLabel: '2 agents',
    min: 2, max: 2, disallow: ['asym'],
  },
  {
    key: 'mafia', name: 'mafia', featured: true,
    tagline: 'Deception & social deduction',
    desc: 'Social deduction with secret, asymmetric roles.',
    question: 'Hidden roles, public votes, secret eliminations. Can the innocent reason their way to the culprit — and can the guilty lie convincingly enough to survive?',
    learn: [
      'How agents deceive — and how others detect deception',
      'Whether coalitions, accusations, and alibis form naturally',
      'How asymmetric private information changes group behavior',
    ],
    agentsLabel: '5–10 agents',
    min: 5, max: 10, disallow: ['market'],
  },
  {
    key: 'public_goods', name: 'public_goods', featured: true,
    tagline: 'Free-riders vs. contributors',
    desc: 'Contribute to a shared pot that pays everyone back.',
    question: 'Everyone profits from the shared pot, but only some pay in. Who carries the group, who quietly coasts, and does anyone punish the free-riders?',
    learn: [
      'Whether punishment of free-riders emerges without being prompted',
      'How contribution norms stabilize — or collapse',
      'The tipping point between collective cooperation and defection',
    ],
    agentsLabel: '3–8 agents',
    min: 3, max: 8, disallow: [],
  },

  {
    key: 'ultimatum', name: 'ultimatum', featured: true,
    tagline: 'Fairness vs. self-interest',
    desc: 'Split a pot — proposer offers, responder accepts or rejects.',
    question: 'One agent proposes how to split a pot; the other can accept it — or reject it so that neither side gets anything. How generous is the offer, and what gets refused on principle?',
    learn: [
      'Whether agents make “fair” offers or press their advantage',
      'When a responder rejects a lowball offer out of spite or principle',
      'How named, asymmetric roles shape negotiating behavior',
    ],
    agentsLabel: '2 agents · Proposer + Responder',
    roles: ['Proposer', 'Responder'],
    min: 2, max: 2, disallow: [],
  },

  /* --- not featured in the wizard's big-card picker (still valid scenarios) --- */
  { key: 'colonel_blotto', name: 'colonel_blotto', desc: 'Allocate limited forces across competing fronts.', min: 2, max: 2, disallow: ['contracts'] },
  { key: 'liar_dice', name: 'liar_dice', desc: 'failed to load — invalid scenario.yaml (roles undefined)', broken: true },
];

window.AGENTSPACE.models = [
  'claude-sonnet-5', 'claude-haiku-4-5', 'gpt-4o', 'gpt-4o-mini',
  'gemini-2.0-pro', 'llama-3.3-70b', 'deepseek-r1', 'mistral-large',
];

/* World corpus — optional bulk data baked into the World Root at /data/corpus.
 * The whole point to showcase: it lives in ONE shared image layer, so forks and
 * snapshots reference it instead of copying it. `size` is display-only.
 * Loaded as window.AGENTSPACE.corpora  */
window.AGENTSPACE.corpora = [
  { key: 'none',  name: 'No corpus',          size: '—',     desc: 'A clean world — agents start with no bundled data.' },
  { key: 'enron', name: 'Email trove',        size: '50 GB', desc: '~500k corporate emails for agents to search, sort, and investigate.' },
  { key: 'sec',   name: 'Filings & reports',  size: '12 GB', desc: 'Annual reports and regulatory filings — a research / analysis world.' },
  { key: 'logs',  name: 'Server logs',        size: '8 GB',  desc: 'Raw infrastructure logs for incident-response scenarios.' },
  { key: 'wiki',  name: 'Knowledge snapshot', size: '22 GB', desc: 'An offline encyclopedia dump as shared background knowledge.' },
];

window.AGENTSPACE.modules = [
  { key: 'market', name: 'Prediction Market', desc: 'Agents run a market betting on the outcome of the game they’re playing — strategy ↔ market feedback loops.' },
  { key: 'contracts', name: 'Enforceable Contracts', desc: 'Agents make binding commitments the world engine enforces.' },
  { key: 'vegas', name: 'Vegas Room', desc: 'Two agents box copies of themselves that emit exactly one bit — secret coordination with a bounded info leak.', sub: true },
  { key: 'selffork', name: 'Self-Forking', desc: 'Agents spawn copies of themselves — parallel instances / self-cloning.' },
  { key: 'hacking', name: 'Agent Hacking', desc: 'Agents may read, inject, or corrupt a peer’s memory or soul.' },
  { key: 'asym', name: 'Asymmetric Capabilities', desc: 'Some agents get tools others don’t.' },
];
