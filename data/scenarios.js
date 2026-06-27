/* agentspace — New World wizard catalog: runtimes, scenarios, models, modules.
 * `scenarios[].disallow` lists module keys a scenario forbids (greyed out).
 * `broken: true` renders a scenario that failed to load (red, unclickable).
 * Loaded as window.AGENTSPACE.runtimes / .scenarios / .models / .modules  */
window.AGENTSPACE = window.AGENTSPACE || {};

window.AGENTSPACE.runtimes = [
  { key: 'OpenClaw', desc: 'Full multi-agent harness — richest inter-agent tooling. Today’s default.' },
    { key: 'Hermes', desc: ''},
  { key: 'Pi', desc: '' },
  { key: 'Bare agent', desc: 'Minimal loop — no multi-agent scaffolding or extra tooling.' },
];

window.AGENTSPACE.scenarios = [
  { key: 'tragedy_commons', name: 'tragedy_commons', desc: 'Agents share one API budget — do they cooperate or exhaust it?', min: 2, max: 6, disallow: [] },
  { key: 'prisoners_dilemma', name: 'prisoners_dilemma', desc: 'Iterated prisoner’s dilemma over N rounds.', min: 2, max: 2, disallow: ['asym'] },
  { key: 'mafia', name: 'mafia', desc: 'Social deduction with secret, asymmetric roles.', min: 5, max: 10, disallow: ['market'] },
  { key: 'ultimatum', name: 'ultimatum', desc: 'Split a pot — proposer offers, responder accepts or rejects.', min: 2, max: 2, disallow: [] },
  { key: 'public_goods', name: 'public_goods', desc: 'Contribute to a shared pot that pays everyone back.', min: 3, max: 8, disallow: [] },
  { key: 'colonel_blotto', name: 'colonel_blotto', desc: 'Allocate limited forces across competing fronts.', min: 2, max: 2, disallow: ['contracts'] },
  { key: 'liar_dice', name: 'liar_dice', desc: 'failed to load — invalid scenario.yaml (roles undefined)', broken: true },
];

window.AGENTSPACE.models = [
  'claude-sonnet-4', 'claude-haiku-4-5', 'gpt-4o', 'gpt-4o-mini',
  'gemini-2.0-pro', 'llama-3.3-70b', 'deepseek-r1', 'mistral-large',
];

window.AGENTSPACE.modules = [
  { key: 'market', name: 'Prediction Market', desc: 'Agents run a market betting on the outcome of the game they’re playing — strategy ↔ market feedback loops.' },
  { key: 'contracts', name: 'Enforceable Contracts', desc: 'Agents make binding commitments the world engine enforces.' },
  { key: 'vegas', name: 'Vegas Room', desc: 'Two agents box copies of themselves that emit exactly one bit — secret coordination with a bounded info leak.', sub: true },
  { key: 'selffork', name: 'Self-Forking', desc: 'Agents spawn copies of themselves — parallel instances / self-cloning.' },
  { key: 'hacking', name: 'Agent Hacking', desc: 'Agents may read, inject, or corrupt a peer’s memory or soul.' },
  { key: 'asym', name: 'Asymmetric Capabilities', desc: 'Some agents get tools others don’t.' },
];
