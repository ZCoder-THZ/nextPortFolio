import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import React from 'react';
import { useRouter, useSegments } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authStore from '../store/auth';
import { rules } from '../protected';

export default function Header() {
  const router = useRouter();
  const segments = useSegments();

  const { isLoggedIn } = authStore.getState() as any;

  const {
    user,
  }: {
    user: {
      email: string;
      password: string;
    };
  } = authStore.getState() as any;

  const logout = authStore((state: any) => state.logout);

  useEffect(() => {
    checkAuth(); // Trigger the authentication check
  }, [segments]); // Watch for changes in route segments

  const checkAuth = async () => {
    try {
      const token = await AsyncStorage.getItem('user');
      const currentRoute = `/${segments.join('/')}`; // Get the current path

      if (!token || !isLoggedIn) {
        if (rules.includes(currentRoute)) {
          router.push('/login'); // Redirect if not authenticated and trying to access a protected route
        }
      }
    } catch (e) {
      console.error('Error in auth check:', e);
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    logout();
    Alert.alert('Logged Out', 'You have been logged out successfully.');
    router.push('/login');
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{user ? user.email : 'Guest'}</Text>
      {isLoggedIn ? (
        <Button title="Logout" onPress={handleLogout} />
      ) : (
        <Button title="Login" onPress={() => router.push('/login')} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
  },
});
