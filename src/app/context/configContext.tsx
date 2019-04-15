import * as React from "react";

import ConfigInterface from "../../types/Config";
import { getConfig } from "../../config";

const ConfigContext = React.createContext(getConfig());

interface ConfigProps {
  config?: ConfigInterface;
  children: React.ReactNode;
}

function ConfigProvider({ config, children }: ConfigProps) {
  return (
    <ConfigContext.Provider value={config || getConfig()}>
      {children}
    </ConfigContext.Provider>
  );
}

function useConfig() {
  return React.useContext(ConfigContext);
}

export { ConfigProvider, useConfig };
