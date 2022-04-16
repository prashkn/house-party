import React from "react";
import { StyleSheet, Text, Alert, Image, ImageBackground } from "react-native";
import { Button } from "react-native-ios-kit";
import masterstyles from "./MasterStyle";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/background.png")}
    >
      <Image
        style={styles.logo}
        source={require("../assets/house_party.png")}
      />
      <Button
        inline
        rounded
        style={masterstyles.actionbtn}
        onPress={() =>
          navigation.navigate("ChoosePlayers", {
            players: "",
          })
        }
      >
        <Text style={masterstyles.actionbtnfont}>Quick Play</Text>
      </Button>
      <Button
        inline
        rounded
        style={[masterstyles.actionbtn, { backgroundColor: "gray" }]}
        onPress={() =>
          Alert.alert(
            "Feature Disabled",
            "This feature is not yet avaiable. Coming out soon!",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ]
          )
        }
      >
        <Text style={masterstyles.actionbtnfont}>Create a new Deck</Text>
      </Button>
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
  logo: {
    width: 300,
    height: 300,
  },
});
