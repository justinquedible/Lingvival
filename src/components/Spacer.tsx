import { StyleSheet, View as ReactView, ViewProps } from "react-native";

interface SpacerProps extends ViewProps {
  height: number;
}

const Spacer = (props: SpacerProps) => (
  <ReactView style={[styles.container, props.style, { height: props.height }]}>{props.children}</ReactView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Spacer;
