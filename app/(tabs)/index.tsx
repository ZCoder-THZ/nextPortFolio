import {
  Image,
  Button,
  Text,
  View,
  Alert,
  FlatList,
  StyleSheet,
  Platform,
} from 'react-native';
import axios from 'axios';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useNavigation, Link } from 'expo-router';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const navigation = useNavigation(); // To listen for navigation focus

  const fetchData = async () => {
    try {
      const response = await axios.get('http://172.18.0.1:4000/incomes');
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteIncome = async (id) => {
    Alert.alert(
      'Confirmation', // Title
      'Are you sure you want to submit?', // Message
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Submit',
          onPress: async () => {
            try {
              await axios.delete(`http://172.18.0.1:4000/incomes/${id}`);
              setData(data.filter((item) => item.id !== id));
              Alert.alert('Income deleted successfully');
            } catch (error) {
              console.error(error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  useEffect(() => {
    // Fetch data when the screen is focused (e.g., after navigation back from another screen)
    const unsubscribe = navigation.addListener('focus', fetchData);

    // Cleanup the listener on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView>
      <FlatList
        data={data || []}
        renderItem={({ item }) => (
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">{item?.income}</ThemedText>
            <ThemedText type="defaultSemiBold">{item.description}</ThemedText>
            <ThemedText type="default">{item.created_at}</ThemedText>
            <View style={{ flexDirection: 'row' }}>
              <Link
                style={{ textDecorationLine: 'underline', color: '#007AFF' }}
                href={{
                  pathname: `incomes/details`,
                  params: { id: item.id },
                }}
              >
                View detail
              </Link>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  color: 'red',
                  marginLeft: 8,
                }}
                onPress={() => deleteIncome(item.id)}
              >
                Delete Income
              </Text>
            </View>
          </ThemedView>
        )}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()} // Fallback to avoid key warning
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
