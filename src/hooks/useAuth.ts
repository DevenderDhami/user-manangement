import { useAuthStore } from "../services/authStore";

// Define the User type (should match your actual user data structure)
interface User {
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthHook {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (userData: User, token: string) => void;
  logout: () => void;
}

export const useAuth = (): AuthHook => {
  const { isAuthenticated, user, token, login, logout } = useAuthStore((state:any) => ({
    isAuthenticated: state.isAuthenticated,
    user: state.user,
    token: state.token,
    login: state.login,
    logout: state.logout,
  }));

  return { isAuthenticated, user, token, login, logout };
};
