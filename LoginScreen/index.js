import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [shouldShowError, setShouldShowError] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // TODO: handle validation

    setShouldShowError(false);

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setShouldShowError(true);
      return;
    }

    // TODO: Handle login
    // if successful --> redirect to next screen
    // Otherwise --> show error

    // reset input
    setUsername("");
    setPassword("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.textInput}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
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
        <TouchableOpacity
          onPress={() => console.log("Redirect to sign up screen")}
        >
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
