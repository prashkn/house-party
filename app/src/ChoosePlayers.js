import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import masterstyles from "./MasterStyle";
import { Button } from "react-native-ios-kit";
import DeckCard from "./DeckCard";
import { data } from "./data";
import Tags from "react-native-tags";

function startGame(navigation, text) {
  console.log(text);
  navigation.navigate("Game", {
    players: text,
    deck: "placeholder",
  });
}

/*
function validatePlayers(playerNames) {
  console.log(playerNames);
  playerNames.split(",").forEach((name) => {
    console.log("name: [" + name.trim() + "]");
    if (name.trim() == "") {
      console.log("here");
      return false;
    }
  });
  return true;
}
*/

export default function ChoosePlayers({ navigation }) {
  let playerTags = [];

  return (
    <ImageBackground
      style={masterstyles.container}
      source={require("../assets/background.png")}
    >
      <Text style={masterstyles.header}>Who's playing?</Text>
      <Tags
        maxNumberOfTags={10}
        style={styles.tagInput}
        initialText=""
        textInputProps={{
          placeholder: "Enter everyone's names",
        }}
        onChangeTags={(tags) => (playerTags = tags)}
        onTagPress={(index, tagLabel, event, deleted) =>
          console.log(
            index,
            tagLabel,
            event,
            deleted ? "deleted" : "not deleted"
          )
        }
        containerStyle={{ justifyContent: "center" }}
        tagContainerStyle={{ fontSize: 15 }}
        inputStyle={{
          backgroundColor: "white",
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#475DFA",
          fontSize: 16,
        }}
        inputContainerStyle={{
          height: 35,
        }}
        renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
          <TouchableOpacity key={`${tag}-${index}`} onPress={onPress}>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: "#F1F1F1",
                padding: 5,
                marginRight: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "#475DFA",
                }}
              >
                {tag}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      {/*
      <View style={{ flexDirection: "row" }}>
        <TextInput
          clearTextOnFocus
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
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
      </View>
      */}
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
        onPress={() => startGame(navigation, playerTags)}
      >
        <Text style={masterstyles.actionbtnfont}>Start Game</Text>
      </Button>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    alignSelf: "center",
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
  tagInput: {
    borderRadius: 10,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 80,
    paddingVertical: 10,
  },
});
