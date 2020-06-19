import React from "react";
import { StyleSheet, Text, View } from "react-native";

class TETH extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 0.365,
          flexDirection: "row",
        }}
      >
        <View style={styles.sETHrow}>
          <Text style={{ color: "white" }}>ETH</Text>
        </View>
        <View style={styles.sETHrow}>
          <Text style={{ color: "white" }}>$$$$</Text>
        </View>
        <View style={styles.sETHrow}>
          <Text style={{ color: "white" }}>$$$$-1</Text>
        </View>
        <View style={styles.sETHrow}>
          <Text style={{ color: "white" }}>$$$+1</Text>
        </View>
        <View style={styles.sETHrow}>
          <Text style={{ color: "white" }}>$$$%</Text>
        </View>
        <View style={styles.sETHrow}>
          <Text style={{ color: "white" }}>$$$Coin</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sETHrow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "auto",
    backgroundColor: "#343a40",
    borderColor: "#95999c",
    borderWidth: 1,
  },
});

export default TETH;
