import { View, SafeAreaView, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router'; // Ensure Stack is imported correctly
import Data from '../Data.json';
const DetailScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Fetch data from JSON file
    const item = Data.find((item) => item.id === parseInt(id));

    // If item not found, navigate to not-found screen
    if (!item) {
      router.push('not-found');
    }
  }, [id, router]); // Only re-run this effect if id or router changes)

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Hide header */}
        <Stack.Screen options={{ headerShown: false }} />

        <View style={{ marginTop: 100, paddingHorizontal: 20 }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            DetailScreen {id}
          </Text>
          <Text>
            Title: {Data.find((item) => item.id === parseInt(id))?.title}
          </Text>
          <Button
            title="Back"
            onPress={() => {
              router.back(); // Navigate back to previous screen
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default DetailScreen;
