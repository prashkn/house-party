import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DeckCard({ name, description }) {
  const [selected, setSelected] = React.useState(false);
  const styles = StyleSheet.create({
    card: {
      height: 250,
      width: "50%",
      backgroundColor: "#83A9E3",
      borderRadius: 30,
      marginTop: 35,
      borderWidth: selected ? 5 : 0,
      borderColor: "#336BC3",
      marginRight: 15,
    },
    text: {
      marginTop: "25%",
      textAlign: "center",
      fontSize: 16,
      fontWeight: "bold",
      color: "#336BC3",
    },
  });
  return (
    <View style={styles.card} onTouchStart={() => setSelected(!selected)}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
}
