import {
  Image,
  Button,
  Text,
  FlatList,
  StyleSheet,
  Platform,
} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const lists = [
    { id: 1, title: 'List 1', amount: 100, date: '2022-01-01' },
    { id: 2, title: 'List 2', amount: 100, date: '2022-01-01' },
    { id: 3, title: 'List 3', amount: 100, date: '2022-01-01' },
    { id: 4, title: 'List 4', amount: 100, date: '2022-01-01' },
  ];
  return (
    <SafeAreaView>
      <FlatList
        data={lists}
        renderItem={({ item }) => (
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">{item.title}</ThemedText>
            <ThemedText type="defaultSemiBold">{item.amount}</ThemedText>
            <ThemedText type="default">{item.date}</ThemedText>
            <Link
              href={{
                pathname: `details/[id]`,
                params: { id: item.id },
              }}
            >
              View detail
            </Link>
          </ThemedView>
        )}
        keyExtractor={(item) => item.id.toString()}
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
