/// <reference types="vitest" />
// eslint-disable-next-line n/no-unpublished-import
import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    exclude: ['build/**', 'node_modules/**'],
  },
});
