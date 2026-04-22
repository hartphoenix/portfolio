import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import type { Plugin } from 'vite'

function markdown(): Plugin {
  return {
    name: 'markdown',
    transform(src, id) {
      if (!id.endsWith('.md')) return
      const match = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
      if (!match) {
        return {
          code: `export const meta = {};\nexport const content = ${JSON.stringify(src)};`,
          map: null,
        }
      }
      const meta: Record<string, string> = {}
      for (const line of match[1].split('\n')) {
        const idx = line.indexOf(':')
        if (idx > 0) {
          meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim()
        }
      }
      return {
        code: `export const meta = ${JSON.stringify(meta)};\nexport const content = ${JSON.stringify(match[2])};`,
        map: null,
      }
    },
  }
}

export default defineConfig({
  plugins: [
    markdown(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
})
