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
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.redirectText}>
        <Text>Do not have an account? </Text>
        <TouchableOpacity
          onPress={() => console.log("Redirect to sign up screen")}
        >
          <Text>Click here to sign up!</Text>
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
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    fontStyle: "italic",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  textInput: {
    width: 300,
    height: 40,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
  },
  loginButton: {
    height: 40,
    width: 150,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: 20,
    textAlign: "center",
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
});
