import React, { Component } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";

const DismissKeyboardHOC = (Comp) => {
    return ({ children, ...props }) => (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Comp {...props}>{children}</Comp>
      </TouchableWithoutFeedback>
    );
  };
const DismissKeyboardView = DismissKeyboardHOC(View);

const Signup = () => {
    
    return (
        <DismissKeyboardView style={styles.form}>
          
            <View style={styles.form}>
                <Text style={styles.header}>Sign Up</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Username"
                ></TextInput>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                ></TextInput>
                <TextInput 
                    style={styles.input}
                    placeholder="New Password"
                ></TextInput>
                <TextInput 
                    style={styles.input}
                    placeholder="Confirm Password"
                ></TextInput>

                <Text style={styles.body}>I want to be a</Text>
                <View style={styles.roleContainer}>
                    <TouchableOpacity
                        style={styles.roleButton}
                    >
                        <Text style={styles.buttonText}>Consultant</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.roleButton}
                    >
                        <Text style={styles.buttonText}>Consultee</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

            </View>
            
        </DismissKeyboardView>
    );
}

const styles = StyleSheet.create({
    form: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    backgroundColor: "#ffffff",
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

    header: {
    fontSize: 30,
    color: "#687C15",
    textAlign: "center",
    marginTop: "10%",
    marginBottom: "2%",
    fontWeight: "bold"
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
    height: 45,
    borderWidth: 3,
    borderColor: "#CBCBCB",
    borderRadius: 50,
    shadowColor: "black",
    shadowRadius: 2,
    shadowOffset: {width: 3,height: 3},
    shadowOpacity: 0.2,
    marginTop: "5%",
    paddingLeft: 20,
    },

    signUpText: {
    marginTop: "8%",
    display:"flex",
    flexDirection: "row",
    },

    smallText: {
    fontSize: 14,
    color: "#808080",
    },

    body: {
        fontSize: 18,
        margin: 30,
        marginBottom: 15
    },

    roleButton: {
        width: "40%",
        height: 50,
        backgroundColor: "white",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderColor: "#D1EBB1",
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

    roleContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Signup;