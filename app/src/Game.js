import React, { useState } from "react";
import { StyleSheet, ImageBackground, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import masterstyles from "./MasterStyle";
import { Button } from "react-native-ios-kit";
import { data } from "./data";

export default function Game({ route, navigation }) {
  const maxQuestionstoAsk = 40;
  const { players, deck } = route.params;

  const promptList = [];
  data.forEach((deck) => {
    deck.questions.forEach((question) => promptList.push(question));
  });

  function getRandomPlayer() {
    let randNum = Math.floor(Math.random() * (players.length - 1));
    while (players[randNum] == "")
      randNum = Math.floor(Math.random() * (players.length - 1));
    console.log(players[randNum]);
    return players[randNum];
  }

  const [promptedText, setPromptedText] = React.useState("Tap to start!");
  const [chosenAnimation, setChosenAnimation] = React.useState("bounce");
  const [amntOfQuestions, setAmntOfQuestions] = React.useState(1);

  const generateNewPrompt = () => {
    setAmntOfQuestions(amntOfQuestions + 1);

    var randomNum = Math.floor(Math.random() * (promptList.length - 1));
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
        <Animatable.Text
          animation={chosenAnimation}
          iterationDelay={3000}
          style={styles.prompt}
          iterationCount={"infinite"}
        >
          {promptedText}
        </Animatable.Text>
      )}
      {amntOfQuestions >= maxQuestionstoAsk && (
        <Animatable.Text
          animation={chosenAnimation}
          iterationCount={"infinite"}
          iterationDelay={5000}
          delay={10000}
          style={styles.prompt}
        >
          Game Over! {"\n"} Play Again?
          <Button
            inline
            rounded
            style={[masterstyles.actionbtn, styles.btn]}
            onPress={() => navigation.navigate("ChoosePlayers")}
          >
            <Text style={masterstyles.actionbtnfont}>Start a new Game</Text>
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
    marginLeft: 25,
    marginTop: 30,
  },
});
