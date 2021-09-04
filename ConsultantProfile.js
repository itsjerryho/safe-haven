import React, { Component } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";

const ConsultantProfile = () => {
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>We are happy to have you joining us!</Text>
            <Text style={styles.subtitle}>Just to find out more about your background...</Text>
            
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
        fontSize: 15,
    },

});
    
export default ConsultantProfile;