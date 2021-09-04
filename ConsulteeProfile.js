import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const GENDERS = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Others", value: "Others" },
  { label: "Prefer not to specify", value: "Prefer not to specify" },
];

export const ConsulteeProfile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [open, setOpen] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();
    console.log(gender);

    const trimmedName = name.trim();
    const trimmedAge = age.trim();

    //TODO: Handle signup

    // Reset all states
    setName("");
    setAge("");
    setGender("Male");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Sign up as a consultee!</Text>
        <Text style={styles.subHeader}>
          Hello! we would like to get to know you better
        </Text>
      </View>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />
      <DropDownPicker
        containerStyle={styles.containerStyle}
        dropDownContainerStyle={{
          width: 300,
          borderRadius: 15,
        }}
        open={open}
        value={gender}
        items={GENDERS}
        setOpen={setOpen}
        setValue={setGender}
        dropDownDirection="BOTTOM"
      />
      <View style={{ marginTop: 20 }}>
        <Text style={styles.disclaimer}>
          Don't worry! You will be staying anonymous!
        </Text>
      </View>
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  header: {
    fontSize: 30,
    fontStyle: "italic",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 15,
  },
  disclaimer: {
    fontSize: 15,
    textAlign: "center",
  },
  textInput: {
    color: "black",
    width: 300,
    height: 50,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
  },
  containerStyle: {
    width: 300,
    borderRadius: 20,
    margin: 10,
  },
  signupButton: {
    height: 40,
    width: 150,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    fontSize: 20,
    textAlign: "center",
  },
});
