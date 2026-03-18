/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_PATH: string;
  readonly VITE_OAUTH_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
