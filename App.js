import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import ChatStack from './components/ChatComponent/ChatStack'

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
        <Tab.Screen name="Chat" component={ChatStack} />
        {/* <Tab.Screen name="Wishlist" component={WishlistStack} />
        <Tab.Screen name="Inbox" component={InboxScreen} />
        <Tab.Screen name="Profile" component={LoginStack} />
        <Tab.Screen name="ProfileScreen" component={ProfileStack} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9fa3cc",
    alignItems: "center",
    justifyContent: "center",
  },
});

