import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import masterstyles from "./MasterStyle";
import { data } from "./data";

export default function Game({ route, navigation }) {
  const { players, deck } = route.params;

  const playerList = players.split(",");
  playerList.forEach((player) => player.trim());

  const promptList = [];
  data.forEach((deck) => {
    deck.questions.forEach((question) => promptList.push(question));
  });

  const [promptedText, setPromptedText] = React.useState(promptList[0]);
  const [chosenAnimation, setChosenAnimation] = React.useState("bounce");

  const generateNewPrompt = () => {
    var randomNum = Math.floor(Math.random() * promptList.length);
    setPromptedText(promptList[randomNum]);
    setChosenAnimation("bounce");
  };

  return (
    <View style={styles.container} onTouchStart={generateNewPrompt}>
      <Animatable.Text animation={chosenAnimation} style={styles.prompt}>
        {promptedText}
      </Animatable.Text>
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
  prompt: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#475DFA",
  },
});
