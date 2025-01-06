import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./components/Home";
import Login from "./components/Login";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="login"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#4b0150",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                color: "#fff",
              },
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="login"
              component={Login}
              options={{ title: "UoV Student Care" }}
            />
            <Stack.Screen
              name="home"
              component={Home}
              options={{ title: "UoV Student Care" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
