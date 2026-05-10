export function useAuth() {
  return {
    user: null,
    isAuthenticated: false,
    login: async () => undefined,
    register: async () => undefined,
    logout: async () => undefined
  };
}
