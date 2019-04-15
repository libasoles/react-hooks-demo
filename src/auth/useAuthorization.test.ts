import useAuthorization from "./useAuthorization";

jest.mock("../app/context/profileContext", () => {

  return {
    useProfile: () => {
      return {
        authorization: {
          roles: ["Pawn"],
          permissions: ["read:commissions"]
        }
      };
    }
  };
});

describe("userCan", () => {
  it("should return false if user has no privilege", () => {
    const { userCan } = useAuthorization();
    expect(userCan("write:commissions")).toBe(false);
  });

  it("should return true for admins", () => {
    const { userCan } = useAuthorization();
    expect(userCan("read:commissions")).toBe(true);
  });
});
