import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/HomeScreen";
import ChoosePlayers from "./src/ChoosePlayers";
import ChooseDeck from "./src/ChooseDeck";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChoosePlayers" component={ChoosePlayers} />
        <Stack.Screen name="ChooseDeck" component={ChooseDeck} />
      </Stack.Navigator>
    </NavigationContainer>
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
