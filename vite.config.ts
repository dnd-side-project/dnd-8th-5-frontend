import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      sentryVitePlugin({
        org: env.SENTRY_ORG,
        project: env.SENTRY_PROJECT,
        authToken: env.SENTRY_AUTH_TOKEN,
        sourcemaps: {
          assets: './dist/**/*.js.map',
          filesToDeleteAfterUpload: '**/*.map',
        },
      }),
    ],

    server: {
      open: true,
      port: 3000,
    },

    resolve: {
      alias: [
        { find: '@src', replacement: '/src' },
        { find: '@components', replacement: '/src/components' },
      ],
    },

    build: {
      sourcemap: true,
    },
  };
});
