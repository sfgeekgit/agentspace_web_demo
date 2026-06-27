/* agentspace — fleet (hosts that envs run on).
 * `cta: true` marks the "spin up new droplet" action row.
 * Loaded as window.AGENTSPACE.fleet  */
window.AGENTSPACE = window.AGENTSPACE || {};

window.AGENTSPACE.fleet = [
  { name: 'localhost', status: 'online', envs: '5 envs', meta: '1 active · 1 dormant · 3 stopped', clickable: true },
  { name: 'do · sfo3-02', status: 'online', envs: '1 env', meta: 'commons-3a (active) · 4 vCPU / 8 GB', clickable: true },
  { name: 'do · nyc1-07', status: 'online', envs: '0 envs', meta: 'idle · 2 vCPU / 4 GB', clickable: true },
  { name: '+ Spin up new droplet', status: '', envs: '', meta: 'provision a fresh DigitalOcean droplet on demand', cta: true },
];
