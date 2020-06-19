import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Clipboard,
} from "react-native";
import ImgETH from "./imgETH";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      name: "",
      address: "",
      copied: false,
    };
    // this.showModal = this.showModal.bind(this);
    // this._onPressBotton = this._onPressBotton.bind(this);
  }
  // showModal = (name, address) => {
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //     name,
  //     address,
  //   });
  // };

  _onPressButton = (coin) => {
    console.log("coin: ", coin);
    if (coin === "BTC") {
      Clipboard.setString("1HMugYDr83APw8zY8DKKTK7Y6b1eF8C89J");
      alert(
        "se copio a tu porta papeles la siguiente direccion de BTC: 1HMugYDr83APw8zY8DKKTK7Y6b1eF8C89J"
      );
    } else if (coin === "ETH") {
      Clipboard.setString("0xdC7E0F118CB2A1e719464D2b47aC8AC0B2bd8475");
      alert(
        "se copio a tu porta papeles la siguiente direccion de ETH 0xdC7E0F118CB2A1e719464D2b47aC8AC0B2bd8475"
      );
    }
  };

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
            backgroundColor: "#17A2B6",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Achso!</Text>
          <Text style={{ color: "white" }}>Donaciones.</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => this._onPressButton("BTC")}>
              <Image
                source={{
                  width: 64,
                  height: 64,
                  uri:
                    "https://www.mercadocripto.cl/static/media/btc.7ef52b06.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._onPressButton("ETH")}>
              <ImgETH />
            </TouchableOpacity>
          </View>
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
