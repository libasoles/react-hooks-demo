export interface AuthConfigInterface {
  domain: string;
  clientId: string;
}

export interface ApiConfigInterface {
  baseURL: string;
}

export default interface ConfigInterface {
  locale: string;
  currency: string;
  api: ApiConfigInterface,
  auth0: AuthConfigInterface,
  cdnUrl: string;
  quoteWebsiteDomain: string;
}