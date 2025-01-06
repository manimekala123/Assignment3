import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, Icon, TextInput } from "react-native-paper";

import { students } from "../assets/StudentsDb";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [isSecure, setIsSecure] = useState(true);
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    if (!data.username || !data.password) {
      setError("Please fill all fields");
      return;
    }

    const student = students.find((s) => s.username === data.username);

    if (!student || student.password !== data.password) {
      setError("Please check your username and password");
      return;
    }

    navigation.navigate("home", { student });
  };

  return (
        <View style={styles.body}>
          <Image source={require("../assets/logo.png")} style={styles.image} />

          <View style={styles.container}>
            <Text style={styles.h1}>Student Login</Text>

            <View style={styles.form}>
              <TextInput
                mode="outlined"
                label="Username"
                placeholder="Enter your username"
                style={styles.form.input}
                value={data.username}
                onChangeText={(text) => setData({ ...data, username: text })}
              />
              <TextInput
                mode="outlined"
                label="Password"
                placeholder="Enter your password"
                style={styles.form.input}
                value={data.password}
                onChangeText={(text) => setData({ ...data, password: text })}
                right={
                  <TextInput.Icon
                    icon="eye"
                    onPress={() => setIsSecure(!isSecure)}
                  />
                }
                secureTextEntry={isSecure}
              />

              <Button
                mode="contained"
                style={styles.button}
                onPress={handleLogin}
              >
                Login
              </Button>
            </View>

            {error && (
              <View style={styles.error}>
                <Icon source="alert-circle" size={20} style={styles.icon} />
                <Text>{error}</Text>
              </View>
            )}
          </View>

          <View style={styles.footer}>
            <Text style={styles.footer.text}>&copy; 2025 UoV Student Care</Text>
          </View>
        </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    width: "100%",
  },
  footer: {
    backgroundColor: "#4b0150",
    width: "100%",
    color: "#fff",
    padding: 20,
    text: {
      color: "#fff",
      textAlign: "center",
    },
  },
  form: {
    marginTop: 20,
    input: {
      width: "100%",
    },
  },
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    marginTop: 20,
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#4b0150",
    marginTop: 20,
  },
  error: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f4edf7",
    borderRadius: 5,
    flexDirection: "row",
    gap: 6,
  },
});
