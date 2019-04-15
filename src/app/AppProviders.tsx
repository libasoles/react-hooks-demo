import * as React from "react";

import { APIProvider, ConfigProvider, ModalProvider } from "./context";
import { setConfig } from "../config";
import config from "../config/config";

interface Props {
  children: JSX.Element;
}

function AppProviders({ children }: Props) {
  setConfig(config);

  return (
    <ConfigProvider>
      <APIProvider>
        <ModalProvider>{children}</ModalProvider>
      </APIProvider>
    </ConfigProvider>
  );
}

export default AppProviders;
