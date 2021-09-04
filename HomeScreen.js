import * as React from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ProfileCard from "./ProfileCard";

const samplePeople = [
  {
    name: "wart0rtle98",
    age: 15,
    issue: "relationship",
    gender: "male",
    id: 12345,
  },
  {
    name: "charmander02",
    age: 14,
    issue: "family",
    gender: "female",
    id: 45678,
  },
  {
    name: "pikachu",
    age: 12,
    issue: "studies",
    gender: "female",
    id: 23456,
  },
  {
    name: "bulbasaur05",
    age: 16,
    issue: "relationship",
    gender: "male",
    id: 34567,
  },
];

function HomeScreen(props) {
  function renderItem({ item }) {
    const { id } = item;
    return (
      <ProfileCard
        key={id}
        profileDetails={item}
        navigation={props.navigation}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={samplePeople}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: 'white',
    paddingTop: 10
  },
});

export default HomeScreen;
