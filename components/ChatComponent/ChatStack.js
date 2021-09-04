import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './ChatScreen';

const InnerStack = createStackNavigator();

const ChatStack = () => (
  <InnerStack.Navigator>
    <InnerStack.Screen
      name="ConversationScreen"
      component={ChatScreen}
      options={{ headerShown: false }}
    />
  </InnerStack.Navigator>
);

export default ChatStack;
