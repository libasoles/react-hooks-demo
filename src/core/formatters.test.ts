import { formatPrice, formatDate, formatPercentage } from "./formatters";

jest.mock("../config", () => ({
  getConfig: () => ({
    locale: "es-GB",
    currency: "GBP"
  })
}));

describe("formatPrice", () => {
  it("should format a float with the correct currency symbol", () => {
    expect(formatPrice(15.2)).toEqual("£15.20");
  });
});

describe("formatDate", () => {
  it("should format a UTC date as dd/mm/yyyy", () => {
    expect(formatDate("2017-12-28T12:08:55.385Z")).toEqual("28/12/2017");
  });

  it("should format a timestamp", () => {
    expect(formatDate(1554320182391)).toEqual("03/04/2019");
  });
})

describe("formatPercentage", () => {
  it("should format a float like adding percentage symbol", () => {
    expect(formatPercentage(20.47)).toEqual("20.47%");
  });
})