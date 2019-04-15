import AuthorizationInterface from "./Authorization";

export default interface ProfileInterface {
  email: string;
  name?: string;
  picture?: string;
  nickname?: string;
  user_metadata?: { partnerId: string };
  app_metadata?: {
    authorization: AuthorizationInterface;
    partnerId: string;
  };
  authorization?: AuthorizationInterface;
  partnerId?: string;
  email_verified?: boolean;
  clientID?: string;
  updated_at?: string;
  user_id?: string;
  identities?: [
    {
      user_id: string;
      provider: string;
      connection: string;
      isSocial: boolean;
    }
  ];
  created_at?: string;
  sub?: string;
}
