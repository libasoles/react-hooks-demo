import queryString from "query-string";

import { useProfile } from "../../../context/profileContext";
import { useConfig } from "../../../context/configContext";

export default function useQuoteWebsite(campaignId: string) {
  const profile = useProfile();
  const config = useConfig();

  const linkParams = queryString.stringify({
    libsfc: campaignId,
    lead_source: "Broker",
    utm_content: profile.email,
    utm_source: "PartnerPortal",
    utm_campaign: "DefaultCampaign",
    partnerinfo: localStorage.getItem("access_token")
  });

  return `${config.quoteWebsiteDomain}?${linkParams}`;
}