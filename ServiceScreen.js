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
    style={[styles.category, selected ? styles.selectedCategory : ""]}
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
    const backgroundColor = isSelected ? "#D1EBB1" : "#ffffff";
    const color = "black";

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
        <Text style={styles.question}>
          What would you like to talk about today?
        </Text>
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
          style={{ borderColor: "#D1EBB1", borderWidth: 2 }}
          containerStyle={styles.containerStyle}
          dropDownContainerStyle={{
            width: 350,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: "#D1EBB1",
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
    backgroundColor: "#ffffff",
  },
  welcomeContainer: {
    margin: 10,
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
    color: "#687C15",
    marginBottom: "2%",
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
    marginTop: 100,
  },
  matchButton: {
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
    fontSize: 15,
  },
  category: {
    width: 350,
    padding: 15,
    marginVertical: 8,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#D1EBB1",
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
  selectedCategory: {
    borderColor: "#ffffff",
    backgroundColor: "#D1EBB1",
  },
});

export default ServiceScreen;
