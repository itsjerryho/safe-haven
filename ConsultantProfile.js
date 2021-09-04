import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-community/picker'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get, child, onValue, push, update } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBjro67Rf_Y2diw602gk5uVQcABE0nhT-g",
    authDomain: "safe-haven-4131e.firebaseapp.com",
    databaseURL: "https://safe-haven-4131e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "safe-haven-4131e",
    storageBucket: "safe-haven-4131e.appspot.com",
    messagingSenderId: "440482454181",
    appId: "1:440482454181:web:9c4fa813db716c5fac0b4c"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

function updateUser(uid, username, email, role, gender, yearOfExperience) {

    set(ref(database, 'users/' + uid), {
        name: username,
        uid: uid,
        email: email,
        role: role,
        gender: gender,
        yearOfExperience: yearOfExperience
    })
    .then(() => {
        console.log("update success!")
    })
    .catch((error) => {
        console.log("update failed because: " + error)
    });
}

const ConsultantProfile = ({navigation}) => {
    const [gender, setGender] = useState("Male");
    const [year, setYear] = useState("< 1 year");

    var username = '';
    var email = '';
    var role = '';
    var uid = '';
      
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            uid = user.uid;

            const userRef = ref(database, 'users/' + uid);
            onValue(userRef, (snapshot) => {
                console.log("user info gotten: " + snapshot.val());
                username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
                email = (snapshot.val() && snapshot.val().email) || '';
                role = (snapshot.val() && snapshot.val().role) || '';
            });
            
        } else {
            // User is signed out
        }
    });

    function complete() {
        updateUser(uid, email, username, role, gender, year);
        navigation.navigate("PostSignup");
    }

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
            <TouchableOpacity
                    style={styles.button}
                    onPress={ 
                        () => complete()
                    }
                >
                    <Text style={styles.buttonText}>Complete</Text>
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

});
    
export default ConsultantProfile;