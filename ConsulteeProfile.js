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
import { Picker } from '@react-native-community/picker'

const GENDERS = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Others", value: "Others" },
  { label: "Prefer not to specify", value: "Prefer not to specify" },
];

const ConsulteeProfile = () => {
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
        <Text style={styles.header}>Complete your profile!</Text>
        <Text style={styles.subHeader}>
          Hello! we would like to get to know you better
        </Text>
      </View>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />
      <View style={{display: 'flex', 
                  flexDirection: 'row', width: '100%', 
                  justifyContent: 'flex-start', 
                  alignItems: 'center', 
                  paddingLeft: 30,
                  marginTop: 20}}>
        <Text style={styles.fieldText}>Gender</Text>
        <Picker
            selectedValue={gender}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="I prefer not to say" value="na" />
        </Picker>
     </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.disclaimer}>
          Don't worry! You will be staying anonymous!
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Complete</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ConsulteeProfile

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white'
  },
  headerContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  header: {
    fontSize: 30,
    color: "#687C15",
    textAlign: "center",
    marginTop: "10%",
    marginBottom: "5%",
    fontWeight: "bold"
  },
  subHeader: {
    fontSize: 15,
  },
  disclaimer: {
    fontSize: 15,
    textAlign: "center",
  },
 
  containerStyle: {
    width: 300,
    borderRadius: 20,
    margin: 30,
  },
  button: {
    width: "50%",
    height: 50,
    backgroundColor: "#D1EBB1",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    margin: 10,
  },

  buttonText: {
      fontSize: 20,
      color: "#687C15",
      textAlign: "center",
      fontWeight: "bold"
  },

  input: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    borderWidth: 3,
    borderColor: "#CBCBCB",
    borderRadius: 50,
    marginTop: "5%",
    paddingLeft: 20,
  },  
  fieldText: {
    fontSize: 15,
    width: 100,
    paddingLeft: 10
  },

  picker: {
      height: 50,
      width: 195,
      margin: 10,
      marginRight: 0,
      paddingRight: 10,
      borderWidth: 3,
      borderColor: "#CBCBCB",
      borderRadius: 50,
      marginTop: "5%",
      paddingLeft: 20,
  },
});
