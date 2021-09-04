import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './Welcome';
import SignupPage from './Signup';
import ConsultantProfile from './ConsultantProfile';


export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            // tabBarIcon: ({ focused, color, size }) => {
            //   let iconName;

            //   if (route.name === "Explore") {
            //     return <Feather name="search" size={24} color="black" />;
            //   } 
            // }
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Welcome" component={WelcomePage} />
        <Tab.Screen name="Signup" component={SignupPage} />
        <Tab.Screen name="ConsultantProfile" component={ConsultantProfile} />
        
      
      </Tab.Navigator>
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

