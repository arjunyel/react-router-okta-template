interface ImportMetaEnv {
  readonly VITE_OKTA_DOMAIN: string;
  readonly VITE_OKTA_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
