import * as React from "react";

import { getConfig } from "../../config";
import Api from "../../core/axiosApi";
import ApiInterface from "../../types/Api";
import { ApiConfigInterface } from "../../types/Config";

const APIContext = React.createContext({} as ApiInterface);

interface ApiProps {
  client?: ApiInterface;
  children: React.ReactNode;
}

function APIProvider({ client, children }: ApiProps) {
  const apiConfig = getConfig("api") as ApiConfigInterface;
  const defaultClient = new Api(apiConfig);

  return (
    <APIContext.Provider value={client || defaultClient}>
      {children}
    </APIContext.Provider>
  );
}

function useApi() {
  return React.useContext(APIContext);
}

export { APIProvider, useApi };
