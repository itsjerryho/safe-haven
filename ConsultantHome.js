import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'
import PersonDetails from './PersonDetails';

const Stack = createNativeStackNavigator();

function ConsultantHome() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Details"
          component={PersonDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ConsultantHome;
