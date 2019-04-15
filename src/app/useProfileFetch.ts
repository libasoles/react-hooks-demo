import { useApi } from "./context/apiContext";
import { Dispatch, useEffect } from "react";
import ApiInterface from "../types/Api";
import ProfileInterface from "../types/Profile";
import { useConfig } from "./context/configContext";

export default function useProfileFetch(setProfile: Dispatch<any>) {
  const api = useApi();
  const config = useConfig();

  async function getProfileData(
    domain: string,
    api: ApiInterface,
    setData: (profile: ProfileInterface[]) => void
  ) {
    const data = await api.get(
      "userinfo",
      {},
      {
        baseURL: `https://${domain}`,
        headers: {
          common: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          }
        }
      }
    );
    setData(data);
  }

  useEffect(() => {
    const { domain } = config.auth0;
    getProfileData(domain, api, setProfile);
  }, []);
}
