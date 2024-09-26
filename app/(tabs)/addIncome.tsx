import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import Data from '@/app/Data.json';
const MyBareForm = () => {
  // Form state
  const [description, setDescription] = useState('');
  const router = useRouter();
  const [income, setIncome] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    if (!description || !income) {
      Alert.alert('Validation Error', 'All fields are required!');
    } else {
      // Handle form data
      console.log({ description, income });

      // Add new item to the data array
      // Data.push({ id: Data.length + 1, description });
      const createIncome = async () => {
        try {
          const response = await axios.post('http://172.18.0.1:4000/incomes', {
            description,
            income: parseInt(income),
          });
          Alert.alert(
            'Form Submitted',
            `Descritpion: ${description}, Amount: ${income}`
          );
          //172.18.0.1:4000/
          http: console.log(response);
        } catch (error) {
          console.error(error);
        }
      };
      createIncome();
      // Reset the form (optional)
      setDescription('');
      setIncome('');
      router.replace({
        pathname: '/',
        params: { refreshed: true },
      }); // Navigate back to home screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>Add Income Title</Text>
      <Text style={styles.label}>Income Title</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter your Income Title"
      />

      <Text style={styles.label}>income</Text>
      <TextInput
        style={styles.input}
        value={income}
        onChangeText={setIncome}
        placeholder="Income amount"
        keyboardType="email-address"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default MyBareForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
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
