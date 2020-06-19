import React from "react";
import { StyleSheet, Text, View } from "react-native";

class TBTC extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 0.365,
          flexDirection: "row",
        }}
      >
        <View style={styles.sBTCrow}>
          <Text style={{ color: "white" }}>BTC</Text>
        </View>
        <View style={styles.sBTCrow}>
          <Text style={{ color: "white" }}>$$$$</Text>
        </View>
        <View style={styles.sBTCrow}>
          <Text style={{ color: "white" }}>$$$$-1</Text>
        </View>
        <View style={styles.sBTCrow}>
          <Text style={{ color: "white" }}>$$$+1</Text>
        </View>
        <View style={styles.sBTCrow}>
          <Text style={{ color: "white" }}>$$$%</Text>
        </View>
        <View style={styles.sBTCrow}>
          <Text style={{ color: "white" }}>$$$Coin</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sBTCrow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "auto",
    backgroundColor: "#454d55",
    borderColor: "#95999c",
    borderWidth: 1,
  },
});

export default TBTC;
