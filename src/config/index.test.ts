import { getConfig, setConfig } from "./";

const mockDefaultConfig = {
  locale: "en-GB",
  currency: "GBP",
  api: {
    baseURL: "http://dummy.url"
  },
  auth0: {
    domain: "dummy.auth0.com",
    clientId: "FakeHash32kIl1SPIpzsKpGzCh"
  },
  cdnUrl: "https://fake.azure.net/",
  quoteWebsiteDomain: "https://fake-env.com"
};

jest.mock("./config-default", () => {
  return jest.fn().mockImplementation(() => {
    return mockDefaultConfig;
  });
});

afterEach(() => {
  setConfig(mockDefaultConfig);
});

const mockEnvironmentConfig = {
  locale: "es-AR",
  currency: "ARS",
  auth0: {
    domain: "custom.dummy.auth0.com",
    clientId: "customFakeHash"
  },
  api: {
    baseURL: "http://custom.dummy.url"
  },
  cdnUrl: "https://custom.fake.azure.net/",
  quoteWebsiteDomain: "https://custom.fake-env.com"
};

describe("setConfig", () => {
  it("set correct config values correctly", () => {
    setConfig(mockEnvironmentConfig);
    expect(getConfig("locale")).toEqual("es-AR");
    expect(getConfig("auth0")).toEqual({
      domain: "custom.dummy.auth0.com",
      clientId: "customFakeHash"
    });
  });
});

describe("getConfig", () => {
  it("retrieves correct config", () => {
    setConfig(mockEnvironmentConfig);
    expect(getConfig()).toEqual(mockEnvironmentConfig);
  });

  it("keeps default values if no new config is given", () => {
    expect(getConfig("currency")).toEqual("GBP");
  });
});
