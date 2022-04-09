import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import masterstyles from "./MasterStyle";

export default function CreateDeck() {
  return (
    <View style={masterstyles.container}>
      <Text style={masterstyles.header}>Create a new Deck</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
