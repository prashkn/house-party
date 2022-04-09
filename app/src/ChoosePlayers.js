import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import masterstyles from "./MasterStyle";
import { Icon } from "@rneui/themed";
import DeckCard from "./DeckCard";
import { data } from "./data";

export default function ChoosePlayers({ navigation }) {
  const [text, onChangeText] = React.useState(
    "Samyak, Garima, Ayesha, Sowmya, Trisha"
  );
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
      <View style={{ flexDirection: "row", marginLeft: 40 }}>
        {data.map((deck) => (
          <DeckCard name={deck.name} description={deck.description} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    alignSelf: "center",
    marginTop: 100,
    marginLeft: 40,
    backgroundColor: "white",
    width: "68%",
    borderColor: "#475DFA",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    color: "gray",
  },
});
