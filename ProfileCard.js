import * as React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Foundation } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import PersonDetails from './PersonDetails';


function ProfileCard({ profileDetails, navigation }) {


  function onPress() {
    navigation.navigate("Details", {
      name: profileDetails.name,
      age: profileDetails.age,
      gender: profileDetails.gender,
      issue: profileDetails.issue
    })
  }


  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.profileWhole}>
        <View style={styles.profileTop}>
          <Text>{profileDetails.name}</Text>
          <Text>{profileDetails.age}</Text>
        </View>
        <View>
        </View>
          <Text>
            {profileDetails.issue}
          </Text>
          {profileDetails.issue === "family" ? <MaterialIcons name="family-restroom" size={24} color="black" /> 
                : profileDetails.issue === "relationship" ? <FontAwesome5 name="heart-broken" size={24} color="black" /> 
                : <Feather name="book-open" size={24} color="black" /> }

          <Text>{profileDetails.gender === "male" ? <Foundation name="male-symbol" size={24} color="black" /> : <Foundation name="female-symbol" size={24} color="black" />}</Text>

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  profileTop: {
    flexDirection: "row",
    width: '100%'
  },
  profileBottom: {

  }, 
  profileWhole: {
    borderRadius: 3,
    borderWidth: 2,
    flex: 1,
    backgroundColor: '#fdd7e4',
  }
})


export default ProfileCard