import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import moment from "moment";

export const Item = (props) => {
  const { title, timeToComplete, backgroundColor } = props;

  const time = moment(new Date(timeToComplete)).format("mm:ss");

  return (
    <View style={[styles.slide, { backgroundColor: backgroundColor }]}>
      <Text style={{ ...styles.slideTitle }}>{title}</Text>
      <Text style={{ ...styles.slideTime }}>{time} Min </Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  slide: {
    padding: 15,
    flex: 1,
    // justifyContent: "center",
    height: 150,
    borderRadius: 8,
    marginRight: 16,
  },
  slideTitle: {
    flex: 1,
    width: "80%",
    textAlign: "left",
    color: "rgb(255, 255, 255)",
    fontSize: 16.875,
    lineHeight: 20.625,
    fontWeight: "600",
  },
  slideTime: {
    flex: 1,
    width: "80%",
    textAlign: "left",
    color: "rgb(255, 255, 255)",
    fontSize: 16.875,
    lineHeight: 20.625,
  },
});
