import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import masterstyles from "./MasterStyle";
import { Button } from "react-native-ios-kit";
import DeckCard from "./DeckCard";
import { data } from "./data";

function startGame(navigation, text) {
  navigation.navigate("Game", {
    players: text,
    deck: "txt",
  });
}

export default function ChoosePlayers({ route, navigation }) {
  const { players } = route.params;

  const placeHolder =
    players == "" ? "Samyak, Garima, Ayesha, Sowmya, Trisha" : players;
  const [text, onChangeText] = React.useState(placeHolder);

  return (
    <View style={masterstyles.container}>
      <Text style={masterstyles.header}>Who's playing?</Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          clearTextOnFocus
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        {/*
        <Icon
          name="arrow-right-box"
          type="material-community"
          color="#475DFA"
          style={{ marginTop: 108, marginLeft: 15 }}
          onPress={() =>
            navigation.navigate("Game", {
              players: text,
            })
          }
        />
        */}
      </View>
      {/*
      <View style={{ flexDirection: "row", marginLeft: 40 }}>
        {data.map((deck) => (
          <DeckCard name={deck.name} description={deck.description} />
        ))}
      </View>
        */}
      <Button
        inline
        rounded
        style={[masterstyles.actionbtn, styles.btn]}
        onPress={() => startGame(navigation, text)}
      >
        <Text style={masterstyles.actionbtnfont}>Start Game</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    alignSelf: "center",
    marginTop: 80,
    marginLeft: 40,
    backgroundColor: "white",
    width: "80%",
    borderColor: "#475DFA",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    color: "gray",
  },
  btn: {
    marginLeft: 40,
    marginTop: 20,
  },
});
