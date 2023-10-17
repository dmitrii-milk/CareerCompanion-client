/// <reference types="vite/client" />
export interface ImportMetaEnv {
    readonly VITE_ENV: string
    readonly VITE_PORT: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}