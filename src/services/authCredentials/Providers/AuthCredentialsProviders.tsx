import React from 'react';
import {createContext, useState} from 'react';

import {AuthCredentials} from '@domain';

import {AuthCredentialsService} from '../authCredentialsTypes';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: false,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    setIsLoading(true);
    setAuthCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{
        authCredentials,
        isLoading,
        saveCredentials,
        removeCredentials,
      }}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
