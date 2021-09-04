import React, { Component, useState } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-community/picker'

const ConsultantProfile = () => {
    const [gender, setGender] = useState("Male");
    const [year, setYear] = useState("< 1 year");

    return(
        <View style={styles.container}>
            <Text style={styles.title}>We are happy to have you joining us!</Text>
            <Text style={styles.subtitle}>Just to find out more about your background...</Text>
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
            <View style={{display: 'flex', 
                          flexDirection: 'row', 
                          width: '100%', 
                          justifyContent: 'flex-start', 
                          alignItems: 'center',
                          paddingLeft: 30}}>
                <Text style={styles.fieldText}>Years of Experience</Text>
                <Picker
                    selectedValue={year}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setYear(itemValue)}
                >
                    <Picker.Item label="< 1 year" value="<1" />
                    <Picker.Item label="1 - 5 years" value="1-5" />
                    <Picker.Item label="> 5 years" value=">5" />
                </Picker>
            </View>
            
        </View>
    );
    
}
    
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },

    title: {
        fontSize: 20,
        margin: 20,
    },

    subtitle: {
        fontSize: 15
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
        paddingLeft: 10,
        paddingRight: 10,
    }

});
    
export default ConsultantProfile;