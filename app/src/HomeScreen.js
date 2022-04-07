import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-ios-kit";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>House Party</Text>
      <Button
        inline
        rounded
        style={styles.actionbtn}
        onPress={() => navigation.navigate("ChoosePlayers")}
      >
        <Text style={styles.actionbtnfont}>Quick Play</Text>
      </Button>
      <Button
        inline
        rounded
        style={styles.actionbtn}
        onPress={() => navigation.navigate("ChooseDeck")}
      >
        <Text style={styles.actionbtnfont}>Choose Deck</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAAD54",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginTop: 100,
    paddingBottom: 180,
    fontSize: 30,
    color: "#475DFA",
    fontWeight: "bold",
  },
  actionbtn: {
    backgroundColor: "#475DFA",
    marginBottom: 10,
    width: "80%",
  },
  actionbtnfont: {
    color: "white",
    textAlign: "center",
    fontSize: "16px",
    fontSize: 16,
  },
});
