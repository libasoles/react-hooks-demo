import { useProfile } from "../app/context/profileContext";
import AuthorizationInterface from "../types/Authorization";

export default function useAuthorization() {
  const profile = useProfile();
  const {
    roles,
    permissions
  }: AuthorizationInterface = profile.authorization || {
    roles: [],
    permissions: []
  };

  return {
    isAdmin: profile.authorization ? roles.includes(Roles.Admin) : false,
    userCan: (action: string) => permissions && permissions.includes(action)
  };
}

export enum Roles {
  User = "User",
  Admin = "Admin"
}

export enum Permissions {
  CreateNewDeal = "create:new-deal",
  CreateNewUser = "create:new-user",
  ReadCommission = "read:commission"
}
