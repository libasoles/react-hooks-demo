import defaultConfig from "./config";
import ConfigInterface from "../types/Config";
import get from "lodash.get";

class Config {
  config: ConfigInterface;

  constructor(config: ConfigInterface) {
    this.config = config;
  }

  set(config: ConfigInterface) {
    this.config = config;
  }

  get(path?: string) {
    return path ? get(this.config, path): this.config;
  }
}

const config = new Config(defaultConfig);

export const setConfig = config.set.bind(config);
export const getConfig = config.get.bind(config);
