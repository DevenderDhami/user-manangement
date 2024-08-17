import {create} from 'zustand';

interface User {
  email: string;
  id:string
  // Add more fields as needed
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (userData: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
  const storedToken = localStorage.getItem('token');
  const storedUser = localStorage.getItem('user');

  return {
    isAuthenticated: !!storedToken,
    user: storedUser ? JSON.parse(storedUser) : null,
    token: storedToken,
    login: (userData: User, token: string) => {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      set({ isAuthenticated: true, user: userData, token });
    },
    logout: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      set({ isAuthenticated: false, user: null, token: null });
    },
  };
});
