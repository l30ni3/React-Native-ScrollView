import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import StatusBarBackground from "./StatusBar";

export const ModalView = (props) => {
  return (
    <View style={styles.centeredView}>
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
        <View style={{ ...styles.modalView, backgroundColor: props.color }}>
          <View style={styles.modalView}>
            <View style={styles.modalHeaderWrapper}>
              <StatusBarBackground style={{ backgroundColor: props.color }} />
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => props.toggle()}
              >
                <Image
                  style={styles.menuCloseIcon}
                  source={require("../assets/close.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalTextWrapper}>
              <Text style={styles.modalTitle}>{props.title}</Text>
              <Text style={styles.modalTime}>{props.time} Min</Text>
              <View style={styles.modalDescription}>
                <Text style={{ ...styles.modalDescriptionTitle }}>
                  CHALLENGES
                </Text>
                <View style={styles.divider} />
                <Text style={styles.modalDescriptionText}>
                  Um herauszufinden, welche Perspektiven zu dir passen könnten,
                  müssen wir erst einmal klären, welche Tätigkeiten dir
                  überhaupt gefallen. Dafür schauen wir gemeinsam, welche
                  Tätigkeiten dich ansprechen und welche nicht.
                </Text>
              </View>
            </View>
            <View style={styles.modalButtonWrapper}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.modalButton}
                onPress={() => props.toggle()}
              >
                <Text style={styles.modalbuttonText}>
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

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  modalHeaderWrapper: {
    height: 94,
    marginTop: 24,
    alignItems: "flex-end",
  },
  modalTextWrapper: {
    flex: 3,
    paddingVertical: 24,
  },
  modalButtonWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 50,
  },
  modalButton: {
    paddingVertical: 16,
    backgroundColor: "white",
    borderRadius: 4,
  },
  modalbuttonText: {
    color: "rgb(68, 97, 212)",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },
  modalTitle: {
    paddingBottom: 8,
    color: "rgb(255, 255, 255)",
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "600",
  },
  modalTime: {
    paddingBottom: 16,
    color: "rgb(255, 255, 255)",
    fontSize: 15,
    lineHeight: 20,
  },
  modalDescription: {},
  modalDescriptionTitle: {
    fontWeight: "bold",
    color: "rgb(255, 255, 255)",
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 18,
  },
  divider: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  modalDescriptionText: {
    color: "rgb(255, 255, 255)",
    fontSize: 14,
    lineHeight: 20.625,
  },
  menuCloseIcon: {
    height: 24,
    width: 24,
  },
});

export default ModalView;
