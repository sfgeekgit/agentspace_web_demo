/* agentspace — environments (running + stopped world containers).
 * Powers the Envs table, env detail panel, and Watch picker.
 * Loaded as window.AGENTSPACE.envs  */
window.AGENTSPACE = window.AGENTSPACE || {};

window.AGENTSPACE.envs = [
  { name: 'pd_test3', snap: 'test_run_1_pd:1.0', host: 'localhost', status: 'active',
    started: '2026-06-22 23:43', runtime: '10h 54m', used: '$0.02', limit: '$2.00',
    container: '8bc44cba7913…e152ada', created: '2026-06-23T06:43:46+00:00',
    agents: 'a28057, a49246', flags: 'agent_to_agent=True  fs_isolation=sandbox',
    model: 'openrouter/anthropic/claude-haiku-4-5', modules: '—' },
  { name: 'commons-3a', snap: 'tragedy_commons:1.2.1', host: 'do · sfo3-02', status: 'active',
    started: '2026-06-23 06:11', runtime: '00h 47m', used: '$1.42', limit: '$2.00',
    container: '3f9c1d44a02b…7be9c10', created: '2026-06-23T13:11:02+00:00',
    agents: 'a87329, a4f1c2, a90e3b', flags: 'agent_to_agent=True  fs_isolation=sandbox',
    model: 'mixed · sonnet-4 / gpt-4o / haiku', modules: 'Prediction Market, Enforceable Contracts' },
  { name: '2agentsIsolated', snap: 'simple2agent:4.0', host: 'localhost', status: 'dormant',
    started: '2026-06-12 18:09', runtime: '10d 16h', used: '$0.20', limit: '$0.30',
    container: 'a11d4f90c7e2…0b3a55f', created: '2026-06-12T18:09:20+00:00',
    agents: 'a11d4, a77f0', flags: 'agent_to_agent=True  fs_isolation=sandbox',
    model: 'openrouter/anthropic/claude-sonnet-4', modules: '—' },
  { name: 'simple2OC_run1', snap: 'simple2agent:1.0', host: 'localhost', status: 'stopped',
    started: '—', runtime: '21m', used: '$10.97', limit: '$11.00',
    container: 'c0091abf12d4…9f1e002', created: '2026-05-16T09:02:11+00:00',
    agents: 'a0091, a0092', flags: 'agent_to_agent=True  fs_isolation=shared',
    model: 'openrouter/anthropic/claude-sonnet-4', modules: '—' },
  { name: 's2a-run3', snap: 'simple2agent:2.0', host: 'localhost', status: 'stopped',
    started: '—', runtime: '—', used: '$0.77', limit: '$2.00',
    container: 'd3310ee45a91…42c7b18', created: '2026-05-16T11:40:55+00:00',
    agents: 'a3310, a3311', flags: 'agent_to_agent=True  fs_isolation=shared',
    model: 'openrouter/anthropic/claude-sonnet-4', modules: '—' },
];
