import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: "rgb(250, 251, 252)",
    flex: 1,
    justifyContent: "center",
  },
  headerWrapper: {
    backgroundColor: "rgb(255, 255, 255)",
    height: 94,
    marginTop: 24,
    padding: 24,
  },
  menuIcon: {
    height: 18,
    width: 20,
  },
  titleWrapper: {
    backgroundColor: "rgb(255, 255, 255)",
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  dividerWrapper: {
    // backgroundColor: 'rgb(250, 0, 252)',
    backgroundColor: "rgb(250, 251, 252)",
    flex: 1,
    flexDirection: "column",
  },
  sliderWrapper: {
    flex: 2,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
  bg: {
    flex: 1,
  },
  logo: {
    width: 64,
    height: 56,
  },
  title: {
    fontWeight: "bold",
    color: "rgb(24, 32, 51)",
    fontSize: 24.5,
    lineHeight: 30,
    marginTop: 32,
  },
  subtitle: {
    fontWeight: "200",
    color: "rgb(24, 32, 51)",
    fontSize: 24.5,
    lineHeight: 30,
    marginTop: 32,
  },
});

const modalStyles = StyleSheet.create({
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
    justifyContent: "center",
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
  modalDescription: {
    flex: 1,
    justifyContent: "flex-end",
  },
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

const slideStyles = StyleSheet.create({
  touchable: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  slide: {
    padding: 15,
    height: 150,
    borderRadius: 8,
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

const scrollViewStyles = StyleSheet.create({
  scrollViewContainer: {
    width: "100%",
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
  scrollViewDescr: {
    fontWeight: "bold",
    color: "rgb(24, 32, 51)",
    fontSize: 15,
    lineHeight: 20,
    paddingHorizontal: 16,
    marginBottom: 18,
  },
});

export { modalStyles, slideStyles, scrollViewStyles, globalStyles };
