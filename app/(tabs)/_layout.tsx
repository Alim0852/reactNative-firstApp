import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
 <Tabs.Screen
        name="service"
        options={{
          title: 'Service',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'briefcase' : 'briefcase-outline'} // Use briefcase icons for the service tab
              color={color}
            />
          ),
        }}
      />
          <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'information-outline' : 'information-outline'}
              color={color}
            />
          ),
        }}
      />
 
    </Tabs>
  );
}
