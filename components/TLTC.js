import React from "react";
import { StyleSheet, Text, View } from "react-native";

class TLTC extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 0.365,
          flexDirection: "row",
        }}
      >
        <View style={styles.sLTCrow}>
          <Text style={{ color: "white" }}>LTC</Text>
        </View>
        <View style={styles.sLTCrow}>
          <Text style={{ color: "white" }}>$$$$</Text>
        </View>
        <View style={styles.sLTCrow}>
          <Text style={{ color: "white" }}>$$$$-1</Text>
        </View>
        <View style={styles.sLTCrow}>
          <Text style={{ color: "white" }}>$$$+1</Text>
        </View>
        <View style={styles.sLTCrow}>
          <Text style={{ color: "white" }}>$$$%</Text>
        </View>
        <View style={styles.sLTCrow}>
          <Text style={{ color: "white" }}>$$$Coin</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sLTCrow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "auto",
    backgroundColor: "#454d55",
    borderColor: "#95999c",
    borderWidth: 1,
  },
});

export default TLTC;
