import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from '@react-native-community/picker'
import DropDownPicker from "react-native-dropdown-picker";


const CATEGORIES = [
  { id: "1", label: "Relationship", value: "Relationship" },
  { id: "2", label: "Study", value: "Study" },
  { id: "3", label: "Family", value: "Family" },
  { id: "4", label: "Others", value: "Others" },
];

const GENDERS = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Anything", value: "Anything" },
];

const Category = ({ item, onPress, backgroundColor, textColor, selected }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.input, backgroundColor]}
  >
    <View style={styles.otherContainer}>
      <Text style={[styles.title, textColor]}>{item.label}</Text>
      {item.label === "Others" && selected && (
        <TextInput
          style={[styles.title, styles.specifyText, textColor]}
          placeholder="Please specify"
        />
      )}
    </View>
  </TouchableOpacity>
);

const ServiceScreen = ({ name }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [genderPreference, setGenderPreference] = useState("Male");
  const [open, setOpen] = useState(false);

  const handleFindMatch = (event) => {
    event.preventDefault();
  };

  const handleSelected = (item) => {
    setSelectedId(item.id);
  };

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    const backgroundColor = isSelected ? "#cdcdcd" : "#ffffff";
    const color = isSelected ? "white" : "black";

    return (
      <Category
        selected={isSelected}
        item={item}
        onPress={() => handleSelected(item)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeMessage}>Hi {name}</Text>
        <Text style={styles.question}>What is on your mind today?</Text>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.questionCategory}>Choose your category</Text>
        <FlatList
          data={CATEGORIES}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </View>
      <View style={styles.preferenceContainer}>
        <View style={{display: 'flex', 
                      flexDirection: 'row', width: '100%', 
                      justifyContent: 'flex-start', 
                      alignItems: 'center', 
                      paddingLeft: 10,
                      marginTop: 20}}>
            <Text style={styles.fieldText}>Gender Preference</Text>
            <Picker
                selectedValue={genderPreference}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setGenderPreference(itemValue)}
            >
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="I prefer not to say" value="na" />
            </Picker>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleFindMatch}>
          <Text style={styles.buttonText}>Start Match!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: 'white'
  },
  welcomeContainer: {
    margin: 20,
  },
  categoryContainer: {
    marginTop: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginLeft: '10%'
  },
  preferenceContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  welcomeMessage: {
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  question: {
    fontSize: 20,
    fontStyle: "italic",
    marginTop: 10,
  },
  questionCategory: {
    fontSize: 20,
    fontStyle: "italic",
    marginTop: 10,
    marginLeft: '-20%'
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  matchButton: {
    height: 40,
    width: 150,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
 
  category: {
    width: 350,
    padding: 15,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 15,
  },
  otherContainer: {
    display: "flex",
    flexDirection: "row",
  },
  specifyText: {
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
  },
  containerStyle: {
    width: 350,
    borderRadius: 15,
    marginTop: 10,
  },
  roleButton: {
    width: "40%",
    height: 50,
    backgroundColor: "#D1EBB1",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderColor: "#687C15",
    borderStyle: 'solid',
    borderWidth: 4

  },
  selectedRoleButton: {
      width: "40%",
      height: 50,
      backgroundColor: "#D1EBB1",
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
      borderColor: "white",

  },
  fieldText: {
    fontSize: 15,
    width: 100
  },

  picker: {
      height: 50,
      width: 200,
      margin: 10,
      marginRight: 0,
      paddingRight: 10,
      borderWidth: 3,
      borderColor: "#CBCBCB",
      borderRadius: 50,
      marginTop: "5%",
      paddingLeft: 20,
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
    textAlign: 'center'
  },  

  list: {
    width: '100%',
 
  },
  button: {
    width: "50%",
    height: 50,
    backgroundColor: "#D1EBB1",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  buttonText: {
      fontSize: 20,
      color: "#687C15",
      textAlign: "center",
      fontWeight: "bold"
  },

});

export default ServiceScreen;