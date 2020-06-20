import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { API } from "@aws-amplify/api";

class TBTC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buda: null,
      dolar: 0,
    };
  }

  componentDidMount() {
    this.getDolar();
    this.getData();
    setInterval(() => {
      this.getData();
    }, 15000);
  }

  async getDolar() {
    let res = await fetch("https://mindicador.cl/api/dolar", {
      method: "get",
    });

    const data = await res.json();
    let dolar = parseFloat(data.serie[0].valor);
    console.log("dolar:", dolar);
    this.setState({
      dolar,
    });
  }

  async getData() {
    // this.setState({
    //   showingAlert: false,
    // })
    const myInit = {
      headers: {},
    };
    const path = "/getData";
    try {
      let data = await API.get("getData", path, myInit);
      this.setState({
        buda: data.buda,
      });
    } catch (e) {
      console.log("catch(e):", e);
    }
  }

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
