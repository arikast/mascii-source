import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

const MASCII_PARSER = '../mascii2-typescript'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'MASCII',
      formats: ['umd'],
      fileName: () => 'mascii.js',
    },
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@parser': fileURLToPath(new URL(`${MASCII_PARSER}/src`, import.meta.url)),
      // Stub Node's 'fs' module — MusicXmlGenerator.save is never called from the browser.
      fs: fileURLToPath(new URL('./src/stubs/fs.ts', import.meta.url)),
      // midi-writer-js is imported by the parser which lives outside this project root.
      // The alias ensures Vite resolves it from this project's node_modules.
      'midi-writer-js': fileURLToPath(
        new URL('./node_modules/midi-writer-js/build/index.js', import.meta.url),
      ),
    },
  },
  optimizeDeps: {
    include: ['antlr4'],
  },
})
