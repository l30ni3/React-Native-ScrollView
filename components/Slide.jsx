import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import moment from "moment";
import ModalView from "./Modal";
import { slideStyles } from "../styles/styles";

export const Slide = (props) => {
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
      style={[slideStyles.touchable, { backgroundColor: backgroundColor }]}
      onPress={() => toggleModal()}
    >
      <View style={[slideStyles.slide, { backgroundColor: backgroundColor }]}>
        <Text style={{ ...slideStyles.slideTitle }}>{title}</Text>
        <Text style={{ ...slideStyles.slideTime }}>{time} Min </Text>
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

export default Slide;
