import { Text, View, FlatList, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import icons
import Chart from '../components/Chart';
import { useQuery } from '@tanstack/react-query'; // Import useQuery

// Function to fetch data using axios
const fetchAllData = async () => {
  const response = await axios.get('http://172.18.0.1:4000/incomes');
  return response.data.data;
};

export default function HomeScreen() {
  const navigation = useNavigation();

  // Use the useQuery hook to fetch data
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['incomes'],
    queryFn: fetchAllData,
    refetchInterval: 10000, // Refetch every 10 seconds
  });

  // Delete income handler
  const deleteIncome = async (id) => {
    Alert.alert(
      'Delete Confirmation',
      'Are you sure you want to delete this income?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              await axios.delete(`http://172.18.0.1:4000/incomes/${id}`);
              refetch(); // Refetch data after deleting an income
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

  // Return loading state
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  // Handle errors
  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Error fetching data</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Income Tracker</Text>

      {/* Chart */}
      <Chart />

      {/* Income List */}
      <View style={{ marginTop: 20 }}></View>
      <FlatList
        data={data || []}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <View>
                <Text style={styles.incomeText}>${item?.income}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.date}>{item.created_at}</Text>
              </View>
              <View style={styles.actions}>
                <Link
                  style={styles.viewLink}
                  href={{
                    pathname: `incomes/details`,
                    params: { id: item.id },
                  }}
                >
                  View Details
                </Link>
                <Ionicons
                  name="trash-outline"
                  size={24}
                  color="red"
                  onPress={() => deleteIncome(item.id)}
                />
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#343a40',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  incomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#28a745',
  },
  description: {
    fontSize: 16,
    color: '#6c757d',
    marginTop: 4,
  },
  date: {
    fontSize: 14,
    color: '#adb5bd',
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  viewLink: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  listContent: {
    paddingBottom: 16,
  },
});
