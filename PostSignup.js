import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";

const PostSignup = ({navigation, route}) => {
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Thank you for signing up!</Text>
            <Text style={styles.subtitle}>You will recieve an email from us once your profile has been verified!</Text>
        </View>
    );
    
}
    
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#D1EBB1',
        width: '100%',
        height: '100%'
    },

    title: {
        fontSize: 25,
        margin: 20,
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        margin: 20
    },
});
    
export default PostSignup;