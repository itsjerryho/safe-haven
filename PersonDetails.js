import * as React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

function PersonDetails(props) {
  const name = props.route.params.name
  const gender = props.route.params.gender
  const age = props.route.params.age
  const issue = props.route.params.issue

  const handleContinue = (event) => {
    console.log("Continue to chat");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>It's {name}</Text>
          <Text style={styles.detailText}>Gender: {gender}</Text>
          <Text style={styles.detailText}>Age: {age}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.detailText}>
          Today, {name} wish to talk about:{" "}
        </Text>
        <Text style={styles.issueText}>{issue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  textContainer: {
    margin: 20,
  },
  name: {
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  detailText: {
    fontSize: 20,
    fontStyle: "italic",
  },
  issueText: {
    fontSize: 20,
    fontStyle: "italic",
    color: "#d62828",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    height: 40,
    width: 150,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  buttonText: {
    fontSize: 20,
  },
});

export default PersonDetails;
