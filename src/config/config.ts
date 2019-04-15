import ConfigInterface from "../types/Config";

const config: ConfigInterface = {
  locale: "en-GB",
  currency: "GBP",
  api: {
    baseURL: process.env.REACT_APP_API_BASE_URL || "/"
  },
  auth0: {
    domain: process.env.REACT_APP_AUTH0_DOMAIN || "dev.auth0.com",
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || "i7rRmwdiZcpx7zVwkIl1SPIpzsKpGzCh"
  },
  cdnUrl:process.env.REACT_APP_CDN_URL ||  "https://development.azureedge.net/",
  quoteWebsiteDomain: process.env.REACT_APP_QUOTE_WEBSITE_DOMAIN || "https://quote-dev.app.com"
};

export default config;
