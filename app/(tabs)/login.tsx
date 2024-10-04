import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import authStore from '../store/auth';
export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const login = authStore((state) => state.login);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
    } else {
      try {
        // Handle login logic here (e.g., authenticate against a backend)
        Alert.alert('Success', `Logged in as ${email}`);

        // Store the user data securely (passwords shouldn't be stored in plaintext in real applications)
        login(email, password);

        // Navigate to home screen after login
      } catch (e) {
        Alert.alert('Error', 'Failed to save user data.');
      }
    }
  };

  useEffect(() => {
    // Check if the user is already logged in
    isAuth();
  }, []);

  const isAuth = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user?.length > 0) {
        // If the user is already logged in, redirect to the home page
        router.push('/incomes');
        return <View>User exist</View>;
      }
    } catch (e) {
      console.error('Error reading user data:', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 8,
  },
});
