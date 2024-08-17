import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const AuthService = {
  signIn: async (credentials: { email: string; password: string }) => {
    const response = await apiClient.post('/login', credentials);
    return response.data;
  },

  signUp: async (userData: { email: string; password: string }) => {
    const response = await apiClient.post('/register', userData);
    return response.data;
  },

  getUser: async (id: number) => {
    const response = await apiClient.get(`/users/${id}`);
    return response.data; // returns user data
  }
};
