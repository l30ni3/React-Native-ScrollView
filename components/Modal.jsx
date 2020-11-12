import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import StatusBarBackground from "./StatusBar";
import { modalStyles } from "../styles/styles";

export const ModalView = (props) => {
  return (
    <View style={modalStyles.centeredView}>
      <Modal
        animationType="fade"
        transparent={false}
        visible={props.visible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View
          style={{ ...modalStyles.modalView, backgroundColor: props.color }}
        >
          <View style={modalStyles.modalView}>
            <View style={modalStyles.modalHeaderWrapper}>
              <StatusBarBackground style={{ backgroundColor: props.color }} />
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => props.toggle()}
              >
                <Image
                  style={modalStyles.menuCloseIcon}
                  source={require("../assets/close.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={modalStyles.modalTextWrapper}>
              <Text style={modalStyles.modalTitle}>{props.title}</Text>
              <Text style={modalStyles.modalTime}>{props.time} Min</Text>
              <View style={modalStyles.modalDescription}>
                <Text style={{ ...modalStyles.modalDescriptionTitle }}>
                  CHALLENGES
                </Text>
                <View style={modalStyles.divider} />
                <Text style={modalStyles.modalDescriptionText}>
                  Um herauszufinden, welche Perspektiven zu dir passen könnten,
                  müssen wir erst einmal klären, welche Tätigkeiten dir
                  überhaupt gefallen. Dafür schauen wir gemeinsam, welche
                  Tätigkeiten dich ansprechen und welche nicht.
                </Text>
              </View>
            </View>
            <View style={modalStyles.modalButtonWrapper}>
              <TouchableOpacity
                activeOpacity={1}
                style={modalStyles.modalButton}
                onPress={() => props.toggle()}
              >
                <Text style={modalStyles.modalbuttonText}>
                  MIT ÜBUNGSRUNDE BEGINNEN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalView;
