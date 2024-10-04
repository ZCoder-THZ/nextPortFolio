import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from '../components/Header';
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerTitle: () => <Header />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'bar-chart' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'pie-chart' : 'pie-chart-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="addIncome"
        options={{
          title: 'Add Income',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'add-circle' : 'add-circle-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="addExpense"
        options={{
          title: 'Add Expense',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'remove-circle' : 'remove-circle-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="incomes/index"
        options={{
          title: 'Incomese',
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'grid-sharp' : 'grid-outline'}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="incomes/details/index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
