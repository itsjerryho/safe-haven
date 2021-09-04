import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './Welcome';
import SignupPage from './Signup';
import ConsultantProfile from './ConsultantProfile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
        />
        <Stack.Screen
          name="Signup"
          component={SignupPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9fa3cc",
    alignItems: "center",
    justifyContent: "center",
  },
});

