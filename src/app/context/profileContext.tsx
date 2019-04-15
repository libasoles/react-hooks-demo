import * as React from "react";

import ProfileInterface from "../../types/Profile";

const defaultData: ProfileInterface = {
  email: "",
  authorization: { roles: [], permissions: [] }
};

const ProfileContext = React.createContext(defaultData);

interface ProviderProps {
  data: ProfileInterface;
  children: React.ReactNode;
}

function ProfileProvider({ data = defaultData, children }: ProviderProps) {
  return (
    <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
  );
}

function useProfile() {
  return React.useContext(ProfileContext);
}

export { ProfileProvider, useProfile };
