import React, { useState } from "react";
import { StyleSheet, ImageBackground, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import masterstyles from "./MasterStyle";
import { Button } from "react-native-ios-kit";
import { data } from "./data";

export default function Game({ route, navigation }) {
  const maxQuestionstoAsk = 40;
  const { players, deck } = route.params;

  const playerList = [];
  players.split(",").forEach((player) => playerList.push(player.trim()));

  const promptList = [];
  data.forEach((deck) => {
    deck.questions.forEach((question) => promptList.push(question));
  });

  function getRandomPlayer() {
    const randNum = Math.floor(Math.random() * playerList.length);
    return playerList[randNum];
  }

  /*
  deck.forEach((question) => {
    promptList.push(question);
  });
  */

  const [promptedText, setPromptedText] = React.useState(promptList[0]);
  const [chosenAnimation, setChosenAnimation] = React.useState("bounce");
  const [amntOfQuestions, setAmntOfQuestions] = React.useState(1);

  const generateNewPrompt = () => {
    setAmntOfQuestions(amntOfQuestions + 1);

    var randomNum = Math.floor(Math.random() * promptList.length);
    const question = promptList[randomNum];

    let prompted = "";
    question.forEach((phrase, idx) => {
      if (idx != question.length - 1) {
        prompted += phrase + getRandomPlayer();
      } else {
        prompted += phrase;
      }
    });

    setPromptedText(prompted);
    setChosenAnimation("bounce");
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/background.png")}
      onTouchStart={generateNewPrompt}
    >
      {amntOfQuestions < maxQuestionstoAsk && (
        <Animatable.Text animation={chosenAnimation} style={styles.prompt}>
          {promptedText}
        </Animatable.Text>
      )}
      {amntOfQuestions >= maxQuestionstoAsk && (
        <Animatable.Text animation={chosenAnimation} style={styles.prompt}>
          Game Over! {"\n"} Play Again?
          <Button
            inline
            rounded
            style={[masterstyles.actionbtn, styles.btn]}
            onPress={() =>
              navigation.navigate("ChoosePlayers", {
                players: playerList.join(", "),
              })
            }
          >
            <Text style={masterstyles.actionbtnfont}>Create a new Deck</Text>
          </Button>
        </Animatable.Text>
      )}
    </ImageBackground>
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
    width: "80%",
    textAlign: "center",
  },
  btn: {
    marginLeft: 40,
    marginTop: 30,
  },
});
