import { createContext, useContext } from 'react';

type AuthContextValue = {
  user: null;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextValue>({ user: null, isAuthenticated: false });

export function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return <AuthContext.Provider value={{ user: null, isAuthenticated: false }}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
