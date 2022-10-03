import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Dimensions,
} from "react-native";
import { DATA } from "./dummy-data";

// Import components
import { Backdrop, Square, Indicator } from "./components";

// Define vars
const { width } = Dimensions.get("screen");

// Component
const App = () => {
  const scrollx = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollx={scrollx} />
      <Square scrollx={scrollx} />
      <Animated.FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollx } } }],
          { useNativeDriver: false }
        )}
        data={DATA}
        key={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems: "center", padding: 20 }}>
              <View
                style={{
                  flex: 0.7,
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: width / 2,
                    height: width / 2,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View style={{ flex: 0.3 }}>
                <Text
                  style={{
                    fontWeight: "800",
                    fontSize: 28,
                    marginBottom: 10,
                    color: "#fff",
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontWeight: "300", color: "#fff" }}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollx={scrollx} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
