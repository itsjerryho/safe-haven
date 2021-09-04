import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";

const Welcome = ({navigation, route}) => {
    
    return(
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to Safe Haven</Text>
            <Image style={styles.logo} source={require('./assets/crafts.png')}/>
            <TouchableOpacity
                onPress={() => {
                    console.log("pressed")
                    navigation.navigate("Signup")
                }} 
                style={styles.signUpButton}
            >
                <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity 
                style={styles.loginButton}
                onPress={
                    () => navigation.navigate("Login")
                }>
                <Text style={styles.underlinedText}>Login here</Text>
            </TouchableOpacity>
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

    welcomeText: {
        fontSize: 25,
        margin: 20,
        marginBottom: 70
    },

    logo: {
    height: 230,
    width: 230,
    marginBottom: 50
    
    },

    signUpButton: {
        width: '50%',
        height: 40,
        borderRadius: 20,
        backgroundColor: '#C4C4E8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 20,
        textAlign: 'center'
    },

    signUpText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#59599D'
    },

    loginText: {
    marginTop: 20,
    fontSize: 15
    },

    loginButton: {
    
    },

    underlinedText: {
    fontSize: 15,
    textDecorationLine: 'underline'
    }
});
    
export default Welcome;