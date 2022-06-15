import * as React from "react";
import { StyleSheet } from "react-native";
import { Screen, View, Text, Spacer, Button } from "../components/exports";
import { generateSentence } from "../utils/SentenceGenerator";

export default function Lesson({ navigation }: any) {
  const [OccitanSentence, setOccitanSentence] = React.useState("");
  const [EnglishSentence, setEnglishSentence] = React.useState("");
  const [FrenchSentence, setFrenchSentence] = React.useState("");

  const onGoBack = () => {
    navigation.goBack();
  };

  const genSentence = async () => {
    let sentence = await generateSentence();
    console.log(sentence);
    setOccitanSentence(sentence.Occitan);
    setEnglishSentence(sentence.English);
    setFrenchSentence(sentence.French);
  };

  return (
    <Screen>
      <View style={styles.categories}>
        <Button title="Generate Sentence" onPress={genSentence} />
      </View>
      <Text style={styles.header1}>{OccitanSentence}</Text>
      <Text style={styles.header1}>{EnglishSentence}</Text>
      <Text style={styles.header1}>{FrenchSentence}</Text>
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
