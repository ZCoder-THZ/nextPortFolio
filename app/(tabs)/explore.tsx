import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { LineChart, ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const explore = () => {
  return (
    <View>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April'],
          datasets: [
            {
              data: [20, 45, 28, 80],
            },
          ],
        }}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2 decimal places
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier // Adds a smoothing effect to the line chart
      />
      <View style={{ marginTop: 24 }}></View>
      <ProgressChart
        data={{
          labels: ['Swim', 'Bike', 'Run'], // optional
          data: [0.4, 0.6, 0.8],
        }}
        width={screenWidth}
        height={220}
        strokeWidth={16}
        radius={32}
        hideLegend={false}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2 decimal places
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
      />
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({});
