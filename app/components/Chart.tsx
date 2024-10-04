import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { LineChart, ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const Chart = () => {
  // Example data for daily, monthly, and yearly views
  const dailyData = [100, 150, 120, 80, 200, 130, 90]; // Example daily income/expenses
  const monthlyData = [1200, 1800, 1600, 1400, 2100, 1700]; // Example monthly
  const yearlyData = [15000, 18000, 17000, 19000]; // Example yearly

  return (
    <View style={{ marginBottom: 30 }}>
      <Text style={styles.title}>Daily Income & Expenses</Text>

      <LineChart
        data={{
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              data: dailyData, // Set daily income/expense data here
              color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`, // Blue for income
              strokeWidth: 2,
            },
          ],
        }}
        width={screenWidth - 30}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={{ paddingLeft: 0 }}
      />
    </View>
  );
};

const chartConfig = {
  backgroundColor: '#e26a00',

  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 2, // Keep 2 decimal places for numbers
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
    paddingLeft: 0,

    paddingRight: 0,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

export default Chart;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
});
