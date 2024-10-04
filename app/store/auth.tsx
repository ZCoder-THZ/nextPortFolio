import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authStore = create((set) => ({
  isLoggedIn: false,
  user: {
    email: '',
    password: '',
  },
  login: (email: string, password: string) => {
    const data = { email, password };
    AsyncStorage.setItem('user', JSON.stringify(data)); // Store the user in AsyncStorage
    set({ isLoggedIn: true });
    set({ user: data });
  },
  logout: () => {
    set({ isLoggedIn: false });
    AsyncStorage.removeItem('user');
  },
}));

export default authStore;
