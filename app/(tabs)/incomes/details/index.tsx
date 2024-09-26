import { View, SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import axios from 'axios';
import Data from '../../../Data.json';
import { DataState } from '../../../types';

const DetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [data, setData] = React.useState<DataState | null>(null);

  const fetchData = async () => {
    if (id) {
      try {
        const response = await axios.get(
          `http://172.18.0.1:4000/incomes/${id}`
        );
        setData(response.data.income);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  useEffect(() => {
    const item = Data.find((item) => item.id === parseInt(id ?? ''));
    if (!item) {
      router.push('not-found');
    } else {
      fetchData();
    }
  }, [id, router]);

  function formatDay(dateInput: any) {
    const date = new Date(dateInput);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear() + 1;
    day = day < 10 ? '0' + day : day;

    return `${day}/${month + 1}/${year}`;
  }

  const formattedDay = formatDay('2024-09-26');
  console.log(formattedDay);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.content}>
        <Text style={styles.title}>
          {data?.description || 'No description available'}
        </Text>
        <Text style={styles.label}>Income Amount:</Text>
        <Text style={styles.value}>{data?.income || 'N/A'}</Text>
        <Text style={styles.label}>Created At:</Text>
        <Text style={styles.value}>{formatDay(data?.created_at)}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Back"
            onPress={() => {
              router.back();
            }}
            color="#007BFF"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color="red"
            title="Delete"
            onPress={() => {
              router.back();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // Soft background
  },
  content: {
    marginTop: 100,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: '400',
    color: '#111',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#FFF',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default DetailScreen;
