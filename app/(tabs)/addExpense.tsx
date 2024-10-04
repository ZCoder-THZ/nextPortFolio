import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    // Validate inputs
    if (!title || !amount) {
      Alert.alert('Error', 'Please enter both title and amount.');
      return;
    }

    if (isNaN(amount)) {
      Alert.alert('Error', 'Amount must be a number.');
      return;
    }

    // If inputs are valid
    Alert.alert('Expense Added', `Title: ${title}\nAmount: $${amount}`);

    // Reset the form
    setTitle('');
    setAmount('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <Text style={styles.header}>Add Expense</Text>

        {/* Expense Title Input */}
        <TextInput
          placeholder="Expense Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholderTextColor="#aaa"
        />

        {/* Expense Amount Input */}
        <TextInput
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          style={styles.input}
          placeholderTextColor="#aaa"
        />

        {/* Submit Button */}
        <TouchableOpacity onPress={handleAddExpense} style={styles.button}>
          <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
