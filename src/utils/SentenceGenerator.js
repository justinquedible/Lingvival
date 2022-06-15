import randomItem from "random-item";
const reader = require("g-sheets-api");

const readerOptions = {
  apiKey: "AIzaSyDpyNJ9gBzY8WA_V5zEG0whaH8ashVBqyM",
  sheetId: "1rNNMigxCbFBnkDcI2q5F0WT2dBYZMCd0pG-P7R-6UDI",
  sheetName: "Lesson 1",
  returnAllResults: false,
};

async function generateSentence() {
  let sentences = { Occitan: "", English: "", French: "" };
  let randNum = Math.random();
  await reader(readerOptions, (results) => {
    if (randNum < 0) {
      const subjectPronouns = results.filter((result) => result["Word Type"] === "Subject Pronoun");
      let subjectPronoun = randomItem(subjectPronouns);
      for (let key in sentences) {
        sentences[key] = subjectPronoun[key] + " ";
      }

      const verbConjugations = results.filter(
        (result) =>
          result["Word Type"] === "Verb Conjugation" &&
          result["Person"] === subjectPronoun["Person"] &&
          result["Quantity"] === subjectPronoun["Quantity"]
      );

      let verbConjugation = randomItem(verbConjugations);
      for (let key in sentences) {
        sentences[key] += verbConjugation[key];
      }
    } else {
      const articles = results.filter((result) => result["Word Type"] === "Article");
      let article = randomItem(articles);
      for (let key in sentences) {
        sentences[key] = article[key] + " ";
      }

      // const nouns = results.filter(
      //   (result) =>
      //     result["Word Type"] === "Noun" &&
      //     result["Gender"] === article["Gender"] &&
      //     result["Person"] === article["Person"] &&
      //     result["Quantity"] === article["Quantity"]
      // );
      // let noun = randomItem(nouns);
      // for (let key in sentences) {
      //   sentences[key] += noun[key] + " ";
      // }

      // const verbConjugations = results.filter(
      //   (result) =>
      //     result["Word Type"] === noun["Verb Conjugation"] &&
      //     result["Person"] === noun["Person"] &&
      //     result["Quantity"] === noun["Quantity"]
      // );

      // let verbConjugation = randomItem(verbConjugations);
      // for (let key in sentences) {
      //   sentences[key] += verbConjugation[key];
      // }
    }
  });
  return sentences;
}

export { generateSentence };
