/// <reference types="vitest/config" />

import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [
      'test/vitest/setup-file.ts'
    ],
    exclude: [
      ...configDefaults.exclude,
      'e2e/*',
      'examples'
    ],
    root: fileURLToPath(new URL('./', import.meta.url)),
    coverage: {
      provider: 'istanbul', // or 'v8'
      reporter: ['lcov', 'json'],
    },
  },
  plugins: [
    vue(),
    tsconfigPaths(),
  ],
})
