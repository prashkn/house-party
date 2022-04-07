import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-ios-kit";

export default function ChoosePlayers() {
  const [text, onChangeText] = React.useState(
    "Samyak, Garima, Ayesha, Sowmya, Trisha..."
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Who's playing?</Text>
      <TextInput
        clearTextOnFocus
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAAD54",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  header: {
    marginTop: 110,
    marginLeft: 40,
    fontSize: 30,
    color: "#475DFA",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    alignSelf: "center",
    marginTop: 80,
    backgroundColor: "white",
    width: "80%",
    borderColor: "#475DFA",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
});
