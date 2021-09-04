import * as React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import PersonDetails from "./PersonDetails";

const ISSUE_ICONS = {
  family: <MaterialIcons name="family-restroom" size={24} color="black" />,
  relationship: <FontAwesome5 name="heart-broken" size={24} color="black" />,
  studies: <Feather name="book-open" size={24} color="black" />,
};

const GENDER_ICONS = {
  male: <Foundation name="male-symbol" size={24} color="black" />,
  female: <Foundation name="female-symbol" size={24} color="black" />,
};

function ProfileCard({ profileDetails, navigation }) {
  function onPress() {
    navigation.navigate("Details", {
      name: profileDetails.name,
      age: profileDetails.age,
      gender: profileDetails.gender,
      issue: profileDetails.issue,
    });
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.profileWhole}>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>{profileDetails.name}, </Text>
          <Text>{profileDetails.age}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>Issue: {profileDetails.issue}</Text>
          {ISSUE_ICONS[profileDetails.issue]}
        </View>
        <View>
          <Text style={styles.text}>
            Gender: {GENDER_ICONS[profileDetails.gender]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
  },
  profileWhole: {
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: "#D1EBB1",
  },
  text: {
    paddingHorizontal: 10,
  },
});

export default ProfileCard;
