import React, { Component, useState } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjro67Rf_Y2diw602gk5uVQcABE0nhT-g",
  authDomain: "safe-haven-4131e.firebaseapp.com",
  projectId: "safe-haven-4131e",
  storageBucket: "safe-haven-4131e.appspot.com",
  messagingSenderId: "440482454181",
  appId: "1:440482454181:web:9c4fa813db716c5fac0b4c"
};

const app = initializeApp(firebaseConfig);

const DismissKeyboardHOC = (Comp) => {
    return ({ children, ...props }) => (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Comp {...props}>{children}</Comp>
      </TouchableWithoutFeedback>
    );
  };
const DismissKeyboardView = DismissKeyboardHOC(View);

const config = {
    iosClientId:
        "440482454181-3p6h52gla2c4hdqs8e3ddjc4sugbimb8.apps.googleusercontent.com",
    scopes: ["profie", "email"]
}

function signUp(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
    });
    console.log('new user signed up');
}


const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    return (
        <DismissKeyboardView style={styles.form}>
          
            <View style={styles.form}>
                <Text style={styles.header}>Sign Up</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={username => setUsername(username)}
                ></TextInput>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={email => setEmail(email)}
                ></TextInput>
                <TextInput 
                    style={styles.input}
                    placeholder="New Password"
                    onChangeText={password => setPassword(password)}
                ></TextInput>
                <TextInput 
                    style={styles.input}
                    placeholder="Confirm Password"
                    onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
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
                    onPress={signUp(email, password)}
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