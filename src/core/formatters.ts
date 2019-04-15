import moment from "moment";
import "moment/locale/en-gb";
import { getConfig } from "../config";

/* Currency formatter */
function createCurrencyFormatter(locale: string, currency: string) {
  return function(value: number) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency
    }).format(value);
  };
}

const { locale, currency } = getConfig();
const formatPrice = createCurrencyFormatter(locale, currency);

/* Date formatter */
moment.updateLocale(locale);
const formatDate = (date: moment.MomentInput): string => {
  return moment(date).format("L");
};

/* Percentage formatter */
function createPercentageFormatter(locale: string) {
  return (value: number) => value.toLocaleString(locale) + "%";
}
const formatPercentage = createPercentageFormatter(locale);
export { formatPrice, formatDate, formatPercentage };
