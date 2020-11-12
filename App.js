import * as React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HoriontalScollView from "./components/HoriontalScollView";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.headerWrapper}>
        <Image style={styles.menuIcon} source={require("./assets/menu.png")} />
      </View>
      <View style={styles.titleWrapper}>
        <Image style={styles.logo} source={require("./assets/logo.png")} />
        <Text style={styles.title}>Bereit?</Text>
        <Text style={styles.subtitle}>
          Klicke zum Start auf eine der unteren Challenges!
        </Text>
      </View>
      <View style={styles.dividerWrapper}>
        <ImageBackground
          source={require("./assets/mainscreen_bg.png")}
          style={styles.bg}
        />
      </View>
      <View style={styles.sliderWrapper}>
        <HoriontalScollView
          itemsPerInterval={1}
          items={[
            {
              title: "Tätigkeitsvielfalt",
              timeToComplete: 120000,
              backgroundColor: "#FF9A3B",
            },
            {
              title: "Jacke wie Hose",
              timeToComplete: 120000,
              backgroundColor: "#5786FF",
            },
            {
              title: "Selbsterkenntnis",
              timeToComplete: 120000,
              backgroundColor: "#29CCC7",
            },
            {
              title: "Déjà-vu",
              timeToComplete: 190000,
              backgroundColor: "#5786FF",
            },
          ]}
        />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          headerShown={false}
          component={HomeScreen}
          options={{ headerMode: "none", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: "rgb(250, 251, 252)",
    flex: 1,
    justifyContent: "center",
  },
  headerWrapper: {
    backgroundColor: "rgb(255, 255, 255)",
    height: 94,
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 24,
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
