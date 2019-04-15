import { useEffect } from "react";

import DealInterface from "../../../../types/Deal";
import { useApi } from "../../../context/apiContext";
import ApiInterface from "../../../../types/Api";

export interface DealsListInterface {
  list: DealInterface[] | [];
  campaignId: string;
}

export default function useDeals(setDeals: (deals: DealsListInterface) => void) {
  const api = useApi();

  async function fetchDeals(
    api: ApiInterface,
    setData: (deals: DealsListInterface) => void
  ) {
    const response = await api.get("partners");
    setData({
      list: response.deals,
      campaignId: response.campaignId
    });
  }

  useEffect(() => {
    fetchDeals(api, setDeals);
  }, []);
}