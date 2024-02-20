import {User, UserAPI} from '../User';

export interface AuthCredentials {
  token: string;
  refreshToken: string;
  tokenExpiresAt: string;
  user: User;
}

export interface FieldIsAvailableAPI {
  message: string;
  isAvailable: boolean;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string; //'bearer';
    token: string; // 'NA.GCfDf81QRs0q4VxyFSEvWs8kZ-DoZnl5zKLn8UDY8ntedjZCPgxVxfFijlQy';
    refreshToken: string; // 'NA.1zDdVxH7KJlG5zKLn8UDY8ntedjZCPgxVxfFijlQy';
    expires_at: string; // '2021-08-25T14:00:00.000Z';
  };
  user: UserAPI;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}

export interface SignUpDataAPI {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface ForgotPasswordParam {
  email: string;
}
