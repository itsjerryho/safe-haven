import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './Welcome';
import SignupPage from './Signup';
import ConsultantProfile from './ConsultantProfile';
import ConsulteeProfile from './ConsulteeProfile'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();

  const isRegistered = false

  console.log(isRegistered)

  const SignUpProcess = () => {
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
            initialParams={{isRegistered: isRegistered}}
          />
          <Stack.Screen
            name="ConsultantProfile"
            component={ConsultantProfile}
          />
          <Stack.Screen
            name="ConsulteeProfile"
            component={ConsulteeProfile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  if (!isRegistered) {
    return <SignUpProcess />
  } else {
    return (
      <View>
        <Text>Hello world</Text>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9fa3cc",
    alignItems: "center",
    justifyContent: "center",
  },
});

