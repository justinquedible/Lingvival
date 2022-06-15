import { StyleSheet, View as ReactView, ViewProps } from "react-native";

const View = (props: ViewProps) => <ReactView style={[styles.container, props.style]}>{props.children}</ReactView>;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default View;
