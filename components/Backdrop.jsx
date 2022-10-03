import { Animated, StyleSheet, Dimensions } from "react-native";
import { bgs } from "../dummy-data";

const { width } = Dimensions.get("screen");

const Backdrop = ({ scrollx }) => {
  const backgroundColor = scrollx.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, { backgroundColor }]}
    />
  );
};

export default Backdrop;
