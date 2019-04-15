import * as React from "react";
import { useState } from "react";

import Page from "./components/Page";
import useDeals, { DealsListInterface } from "./dashboard/dealsTable/useDeals";
import Loading from "../components/Loading";
import DealsTable from "./dashboard/DealsTable";
import NewDealButton from "./dashboard/NewDealButton";
import useQuoteWebsite from "./dashboard/newDealsButton/useQuoteWebsite";
import useAuthorization, { Permissions } from "../../auth/useAuthorization";

function Dashboard() {
  const initialState = {
    list: [],
    campaignId: ""
  };
  const [deals, setDeals] = useState<DealsListInterface>(initialState);
  useDeals(setDeals);

  const { userCan } = useAuthorization();
  const canCreateNewDeal = userCan(Permissions.CreateNewDeal);
  const newDealLink = useQuoteWebsite(deals.campaignId);

  return (
    <Page>
      {!deals.list.length && <Loading />}
      {<DealsTable data={deals.list} />}
      {canCreateNewDeal && <NewDealButton link={newDealLink} />}
    </Page>
  );
}

export default Dashboard;
