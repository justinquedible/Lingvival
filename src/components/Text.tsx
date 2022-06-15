import { StyleSheet, Text as ReactText, TextProps } from "react-native";

const Text = (props: TextProps) => <ReactText style={[styles.container, props.style]}>{props.children}</ReactText>;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Text;
