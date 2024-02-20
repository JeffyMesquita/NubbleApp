import {userAdapter} from '../User/userAdapter';

import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

function toAuthCredentials(
  authCredentialsAPI: AuthCredentialsAPI,
): AuthCredentials {
  return {
    token: authCredentialsAPI.auth.token,
    tokenExpiresAt: authCredentialsAPI.auth.expires_at,
    user: userAdapter.toUser(authCredentialsAPI.user),
    refreshToken: authCredentialsAPI.auth.refreshToken,
  };
}

export const authAdapter = {toAuthCredentials};
