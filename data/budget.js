/* agentspace — budget table (per-env OpenRouter credit usage).
 * `low: true` flags the remaining figure red.
 * Loaded as window.AGENTSPACE.budgetRows  */
window.AGENTSPACE = window.AGENTSPACE || {};

window.AGENTSPACE.budgetRows = [
  { env: 'simple2OC_run1', used: '$10.97', limit: '$11.00', remaining: '$0.03', low: true },
  { env: 's2a-run3', used: '$0.77', limit: '$2.00', remaining: '$1.23', low: false },
  { env: '2agentsIsolated', used: '$0.20', limit: '$0.30', remaining: '$0.10', low: true },
  { env: 'pd_test3', used: '$0.02', limit: '$2.00', remaining: '$1.98', low: false },
  { env: 'commons-3a', used: '$1.42', limit: '$2.00', remaining: '$0.58', low: false },
];
