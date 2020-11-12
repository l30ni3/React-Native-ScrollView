import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import moment from "moment";
import ModalView from "./Modal";

export const Item = (props) => {
  const { title, timeToComplete, backgroundColor } = props;

  const time = moment(new Date(timeToComplete)).format("mm:ss");
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    try {
      // React Hook: Toggle Modal
      setModalVisible((modalVisible) => !modalVisible);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.touchable, { backgroundColor: backgroundColor }]}
      onPress={() => toggleModal()}
    >
      <View style={[styles.slide, { backgroundColor: backgroundColor }]}>
        <Text style={{ ...styles.slideTitle }}>{title}</Text>
        <Text style={{ ...styles.slideTime }}>{time} Min </Text>
      </View>
      <ModalView
        visible={modalVisible}
        toggle={toggleModal}
        color={backgroundColor}
        title={title}
        time={time}
      ></ModalView>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
  },
  slide: {
    padding: 15,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
  },
  slideTitle: {
    flex: 3,
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
    justifyContent: "flex-end",
  },
});
