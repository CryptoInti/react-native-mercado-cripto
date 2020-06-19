import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Thead extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 0.365,
          flexDirection: "row",
        }}
      >
        <View style={styles.sETHrow}>
          <Text></Text>
        </View>
        <View style={styles.sETHrow}>
          <Text style={{ color: "white", fontSize: 11 }}>Buda</Text>
        </View>
        <View style={styles.sETHrow}>
          <Text style={{ color: "white", fontSize: 11 }}>CryptoMkt</Text>
        </View>
        <View style={styles.sETHrow}>
          <Text style={{ color: "white", fontSize: 11 }}>OrionX</Text>
        </View>
        <View style={styles.sETHrow}>
          <Text style={{ color: "white", fontSize: 11 }}>Satoshi Tango</Text>
        </View>
        <View style={styles.sETHrow}>
          <Text style={{ color: "white", fontSize: 11 }}>CoinMarketCap</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sETHrow: {
    flex: 1,
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#343a40",
    borderColor: "#95999c",
    borderWidth: 1,
  },
});

export default Thead;
