import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: [
      { find: '@src', replacement: '/src' },
      {
        find: '@components',
        replacement: '/src/components',
      },
    ],
  },
});
