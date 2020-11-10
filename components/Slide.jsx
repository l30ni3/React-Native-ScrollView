import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export const Slide = (props) => {
  const { title, timeToComplete, backgroundColor } = props;

  return (
    <View style={[styles.slide, { backgroundColor: { backgroundColor } }]}>
      <Text style={{ ...styles.slideText }}>{title}</Text>
      <Text style={{ ...styles.slideText }}>{timeToComplete}</Text>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  slide: {
    backgroundColor: "rgb(255, 255, 255)",
    paddingHorizontal: 20,
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    height: 200,
  },
  slideText: {
    width: "100%",
    textAlign: "left",
    fontSize: 20,
  },
});
