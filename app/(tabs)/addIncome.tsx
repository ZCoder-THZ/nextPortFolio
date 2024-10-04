import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';

const MyBareForm = () => {
  const [description, setDescription] = useState('');
  const [income, setIncome] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (!description || !income) {
      Alert.alert('Validation Error', 'All fields are required!');
    } else {
      const createIncome = async () => {
        try {
          const response = await axios.post('http://172.18.0.1:4000/incomes', {
            description,
            income: parseInt(income),
          });
          Alert.alert(
            'Form Submitted',
            `Description: ${description}, Amount: ${income}`
          );
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      };
      createIncome();
      setDescription('');
      setIncome('');
      router.replace({ pathname: '/', params: { refreshed: true } });
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add Income</Text>

        <Text style={styles.label}>Income Title</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter your Income Title"
        />

        <Text style={styles.label}>Income Amount</Text>
        <TextInput
          style={styles.input}
          value={income}
          onChangeText={setIncome}
          placeholder="Enter income amount"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyBareForm;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
