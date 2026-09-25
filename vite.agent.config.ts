// Dev config for agent sandboxes: macOS FSEvents is blocked there, so native
// file watching silently misses edits; polling works. /__agent_stop lets a
// later sandboxed call stop the server, since cross-call kill is denied.
import { mergeConfig, type Plugin } from 'vite'
import base from './vite.config'

const agentStop: Plugin = {
  name: 'agent-stop',
  configureServer(server) {
    server.middlewares.use('/__agent_stop', (_req, res) => {
      res.end('stopping\n')
      setTimeout(() => process.exit(0), 50)
    })
  },
}

export default mergeConfig(base, {
  server: { watch: { usePolling: true, interval: 300 } },
  plugins: [agentStop],
})
