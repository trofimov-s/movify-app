export interface Config {
  api: {
    baseUrl: string;
    token: string;
  };
}

export interface Environment {
  production: boolean;
  config: Config;
}
