import React from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";
import masterstyles from "./MasterStyle";

export default function CreateDeck() {
  return (
    <ImageBackground
      style={masterstyles.container}
      source={require("../assets/background.png")}
    >
      <Text style={masterstyles.header}>Create a new Deck</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
