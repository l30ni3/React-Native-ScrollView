import * as React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HoriontalScollView from "./components/HoriontalScollView";
import StatusBarBackground from "./components/StatusBar";
import { globalStyles } from "./styles/styles";

function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.contentWrapper}>
      <View style={globalStyles.headerWrapper}>
        <StatusBarBackground style={{ backgroundColor: "white" }} />
        <Image
          style={globalStyles.menuIcon}
          source={require("./assets/menu.png")}
        />
      </View>
      <View style={globalStyles.titleWrapper}>
        <Image
          style={globalStyles.logo}
          source={require("./assets/logo.png")}
        />
        <Text style={globalStyles.title}>Bereit?</Text>
        <Text style={globalStyles.subtitle}>
          Klicke zum Start auf eine der unteren Challenges!
        </Text>
      </View>
      <View style={globalStyles.dividerWrapper}>
        <ImageBackground
          source={require("./assets/mainscreen_bg.png")}
          style={globalStyles.bg}
        />
      </View>
      <View style={globalStyles.sliderWrapper}>
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
