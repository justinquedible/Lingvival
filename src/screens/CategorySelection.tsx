import * as React from "react";
import { StyleSheet } from "react-native";
import { Screen, View, Text, Spacer, Button } from "../components/exports";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function CategorySelection({ navigation }: any) {
  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <Screen>
      <View style={styles.backButton}>
        <FontAwesome.Button name="arrow-circle-left" backgroundColor="gray" onPress={onGoBack}>
          Choose a Different Language
        </FontAwesome.Button>
      </View>
      <View style={styles.categories}>
        <Text style={styles.header1}>Category 1</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  header1: {
    fontSize: 30,
  },
  categories: {
    marginTop: 20,
  },
});
