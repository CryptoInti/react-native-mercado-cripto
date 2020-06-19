import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Footer extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "grey",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Achso!</Text>
        </View>
      </View>
    );
  }
}

// const stylesPrice = StyleSheet.create({
//   columnTop: {
//     flex: 1,
//     alignSelf: "stretch",
//     flexDirection: "row",
//   },
//   column: {
//     flex: 1,
//     alignSelf: "stretch",
//   },
//   row: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default Footer;
