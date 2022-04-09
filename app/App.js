import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/HomeScreen";
import ChoosePlayers from "./src/ChoosePlayers";
import CreateDeck from "./src/CreateDeck";
import Game from "./src/Game";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChoosePlayers" component={ChoosePlayers} />
        <Stack.Screen name="CreateDeck" component={CreateDeck} />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{ orientation: "landscape" }}
        />
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
