declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly NEXT_PUBLIC_SERVICE_URL: string | undefined;
  }
}
