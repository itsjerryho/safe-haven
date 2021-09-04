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
    style={[styles.category, backgroundColor]}
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
        <Text style={styles.question}>Choose your category</Text>
        <FlatList
          data={CATEGORIES}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.preferenceContainer}>
        <Text style={styles.question}>Preference</Text>
        <DropDownPicker
          containerStyle={styles.containerStyle}
          dropDownContainerStyle={{
            width: 350,
            borderRadius: 15,
          }}
          open={open}
          value={genderPreference}
          items={GENDERS}
          setOpen={setOpen}
          setValue={setGenderPreference}
          dropDownDirection="BOTTOM"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.matchButton} onPress={handleFindMatch}>
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
  },
  welcomeContainer: {
    margin: 20,
  },
  categoryContainer: {
    marginTop: 5,
    marginLeft: 20,
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
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
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
  buttonText: {
    fontSize: 20,
    textAlign: "center",
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
});

export default ServiceScreen;
