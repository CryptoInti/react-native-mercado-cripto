import React from "react";
import { StyleSheet, Text, View } from "react-native";

class PriceTable extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "flex-start",
        }}
      >
        <View style={{ flex: 1, backgroundColor: "powderblue" }} />
        <View style={{ flex: 1, backgroundColor: "skyblue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
        <View style={{ flex: 1, backgroundColor: "orange" }} />
        <View style={{ flex: 1, backgroundColor: "indigo" }} />
        <View style={{ flex: 1, backgroundColor: "purple" }} />
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

export default PriceTable;
