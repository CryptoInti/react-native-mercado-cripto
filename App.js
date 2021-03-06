import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import PriceTable from "./components/PriceTable";
import Thead from "./components/Thead";
import TBTC from "./components/TBTC";
import TETH from "./components/TETH";
import TLTC from "./components/TLTC";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  console.log("App ejecutandosensen");

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Thead />
      <TBTC />
      <TETH />
      <TLTC />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sBTCrow: {
    height: 77,
    backgroundColor: "#454d55",
  },
});
