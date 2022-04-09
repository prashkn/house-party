import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-ios-kit";
import masterstyles from "./MasterStyle";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/house_party.png")}
      />
      <Button
        inline
        rounded
        style={masterstyles.actionbtn}
        onPress={() => navigation.navigate("ChoosePlayers")}
      >
        <Text style={masterstyles.actionbtnfont}>Quick Play</Text>
      </Button>
      <Button
        inline
        rounded
        style={masterstyles.actionbtn}
        onPress={() => navigation.navigate("CreateDeck")}
      >
        <Text style={masterstyles.actionbtnfont}>Create a new Deck</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD392",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 300,
  },
});
