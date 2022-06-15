import * as React from "react";
import { StyleSheet } from "react-native";
import { Screen, View, Text, Spacer, Button } from "../components/exports";
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps";
import { SVGMap } from "react-svg-map";
// @ts-ignore
import France from "@svg-maps/france.regions";
import { colors } from "../constants/colors";
import { Dimensions } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function LanguageSelection({ navigation }: any) {
  const languages: { [name: string]: string[] } = { Occitanie: ["Occitan"] };
  const [instruction, setInstruction] = React.useState("Pick a country!");
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedRegion, setSelectedRegion] = React.useState("");
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const renderGeography = (geo: any) => {
    let fillColor;
    let onClick;
    if (geo.properties.NAME_LONG === "France") {
      fillColor = "#00FF19";
      onClick = () => {
        setSelectedCountry(geo.properties.NAME_LONG);
        setInstruction("Pick a region!");
      };
    }
    return <Geography key={geo.rsmKey} geography={geo} fill={fillColor} onClick={onClick} />;
  };

  const WorldMap = () => (
    <ComposableMap height={0.8 * windowHeight} width={windowWidth}>
      <ZoomableGroup>
        <Geographies geography={geoUrl} fill="#D6D6DA" stroke={colors.white} strokeWidth={0.5}>
          {({ geographies }) => geographies.map(renderGeography)}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );

  const CountryMap = () => {
    let country;
    if (selectedCountry === "France") {
      country = {
        ...France,
      };
    }
    const onLocationClick = (e: any) => {
      setSelectedRegion(e.target.getAttribute("name"));
      setInstruction("Pick a language to learn!");
    };
    return <SVGMap map={country} onLocationClick={onLocationClick} />;
  };

  const onClickPickOtherCountry = () => {
    setSelectedCountry("");
    setSelectedRegion("");
    setInstruction("Pick a country!");
  };

  const onLanguagePress = () => {
    console.log("Language pressed!");
    navigation.navigate("CategorySelection");
  };

  return (
    <Screen>
      {selectedCountry !== "" && (
        <View style={styles.backButton}>
          <FontAwesome.Button name="arrow-circle-left" backgroundColor="gray" onPress={onClickPickOtherCountry}>
            Pick Another Country
          </FontAwesome.Button>
        </View>
      )}
      {selectedCountry !== "" && <Text style={styles.header1}>Country: {selectedCountry}</Text>}
      <Text style={styles.header1}>{instruction}</Text>
      <Spacer height={50} />
      {selectedRegion !== "" && (
        <View>
          <Text style={styles.header2}>Region: {selectedRegion}</Text>
          {languages[selectedRegion] !== undefined ? (
            <View>
              <Text style={styles.header4}>Available Languages to Learn!</Text>
              {languages[selectedRegion].map((language, index) => (
                <Button
                  key={index}
                  containerStyle={styles.langContainerButton}
                  textStyle={styles.langTextButton}
                  onPress={onLanguagePress}
                  title={language}
                />
              ))}
            </View>
          ) : (
            <Text style={styles.header3}>No Available Languages to Learn Yet :(</Text>
          )}
        </View>
      )}
      <Spacer height={50} />
      {selectedCountry === "" ? <WorldMap /> : <CountryMap />}
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
  header2: {
    fontSize: 20,
  },
  header3: {
    fontSize: 20,
    color: "red",
  },
  header4: {
    fontSize: 20,
    color: "limegreen",
  },
  langContainerButton: {
    backgroundColor: colors.occitan.primary,
  },
  langTextButton: {
    color: colors.occitan.secondary,
  },
});
