interface ImportMetaEnv {
  readonly VITE_API_URL?: string
  // add your VITE_... variables here
  readonly DEV: boolean
  readonly PROD: boolean
  readonly MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'vite/client' {
  interface ImportMeta {
    env: ImportMetaEnv
  }
}
