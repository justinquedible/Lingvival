import { StyleSheet, View, ViewProps } from "react-native";

const Screen = (props: ViewProps) => <View style={[styles.container, props.style]}>{props.children}</View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Screen;
