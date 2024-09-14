import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Data from '@/app/Data.json';
const MyBareForm = () => {
  // Form state
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    if (!title || !amount) {
      Alert.alert('Validation Error', 'All fields are required!');
    } else {
      // Handle form data
      console.log({ title, amount });
      Alert.alert('Form Submitted', `Name: ${title}, Email: ${amount}`);
      // Add new item to the data array
      Data.push({ id: Data.length + 1, title });
      // Reset the form (optional)
      setTitle('');
      setAmount('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter your Subject"
      />

      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default MyBareForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
