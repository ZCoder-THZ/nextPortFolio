import { View, SafeAreaView, Text, Button } from 'react-native';
import React from 'react';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router'; // Ensure Stack is imported correctly

const DetailScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
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
