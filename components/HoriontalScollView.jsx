import React from "react";
import { View, ScrollView, Text } from "react-native";
import { Item } from "./Item";
import { StyleSheet } from "react-native";

export const HoriontalScollView = (props) => {
  const { items } = props;
  const itemsPerInterval =
    props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;

  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const init = (width) => {
    setWidth(width);
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  };

  const getInterval = (offset) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset + 1 < (width / intervals) * i) {
        return i;
      }
      if (i == intervals) {
        return i;
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.scrollViewDescr }}>CHALLENGES</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${70 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={true}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={(data) => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        snapToInterval={width / intervals}
        decelerationRate="fast"
      >
        {items.map((item, index) => {
          return (
            <Item
              key={index}
              title={item.title}
              timeToComplete={item.timeToComplete}
              backgroundColor={item.backgroundColor}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HoriontalScollView;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  scrollView: {
    marginHorizontal: 24,
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
  scrollViewDescr: {
    fontWeight: "bold",
    color: "rgb(24, 32, 51)",
    fontSize: 15,
    lineHeight: 20,
    paddingHorizontal: 24,
    marginBottom: 18,
  },
});
