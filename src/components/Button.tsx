import { StyleSheet, Pressable, TextStyle } from "react-native";
import { Text } from "../components/exports";

interface ContainerStyleProps {
  backgroundColor?: string;
}

interface ButtonProps {
  containerStyle?: ContainerStyleProps;
  textStyle?: TextStyle;
  onPress: () => void;
  title: string;
}

const Button = (props: ButtonProps) => (
  <Pressable style={[styles.container, props.containerStyle]} onPress={props.onPress}>
    <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Button;
