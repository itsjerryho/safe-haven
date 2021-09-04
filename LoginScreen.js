import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBjro67Rf_Y2diw602gk5uVQcABE0nhT-g",
  authDomain: "safe-haven-4131e.firebaseapp.com",
  databaseURL:
    "https://safe-haven-4131e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "safe-haven-4131e",
  storageBucket: "safe-haven-4131e.appspot.com",
  messagingSenderId: "440482454181",
  appId: "1:440482454181:web:9c4fa813db716c5fac0b4c",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldShowError, setShouldShowError] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // TODO: handle validation

    setShouldShowError(false);

    const trimmedUsername = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setShouldShowError(true);
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const uid = user.uid;
        console.log("sign in success");

        const db = getDatabase();
        const userRef = ref(db, "users/" + uid);
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          const role = data.role;
          if (role === "consultant") {
            navigation.navigate("Home");
          } else {
            navigation.navigate("Service");
          }
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setShouldShowError(true);
      });

    // reset input
    setEmail("");
    setPassword("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      {shouldShowError && (
        <Text style={styles.errorText}>
          Invalid username/password! Please try again 😢
        </Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.redirectText}>
        <Text>Do not have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.underlined}>Click here to sign up!</Text>
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
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 30,
    color: "#687C15",
    textAlign: "center",
    marginTop: 50,
    marginBottom: "2%",
    fontWeight: "bold",
  },
  textInput: {
    width: "80%",
    height: 50,
    marginTop: "5%",
    paddingLeft: 20,
    borderWidth: 3,
    borderColor: "#CBCBCB",
    borderRadius: 50,
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
  buttonText: {
    fontSize: 20,
    color: "#687C15",
    textAlign: "center",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
  redirectText: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  underlined: {
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
