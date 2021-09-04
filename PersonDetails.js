import * as React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Foundation } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



function PersonDetails(props) {

  const name = props.route.params.name
  const gender = props.route.params.gender
  const age = props.route.params.age
  const issue = props.route.params.issue


  return (
    <View>
      <Text>{name}</Text>
      <Text>{gender}</Text>
      <Text>{age}</Text>
      <Text>{issue}</Text>
    </View>
  )
}

export default PersonDetails