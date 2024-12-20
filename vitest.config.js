import { fileURLToPath } from 'node:url'
import { defineConfig, configDefaults } from 'vitest/config'

/// <reference types="vitest/config" />
export default defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: [
        'test/vitest/setup-file.ts'
      ],
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        provider: 'istanbul', // or 'v8'
        reporter: ['text', 'json', 'html'],
        // reportsDirectory: './tests/unit/coverage'
      },
    }
  })
