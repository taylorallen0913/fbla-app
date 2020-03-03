import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import * as firebase from "firebase";
import { Block } from "galio-framework";
import AppIntroSlider from "react-native-app-intro-slider";

const { height, width } = Dimensions.get("screen");

const slides = [
  {
    key: "home",
    title: "Access Your Local Chapter With Ease",
    titleStyle: { textAlign: "center" },
    image: require("../../assets/member-tutorial/home.png"),
    imageStyle: { height: "80%", width: "80%" },
    backgroundColor: "#59b2ab"
  },
  {
    key: "about",
    title: "Obtain Relevant FBLA Information",
    titleStyle: { textAlign: "center" },
    image: require("../../assets/member-tutorial/about.png"),
    imageStyle: { height: "80%", width: "80%" },
    backgroundColor: "#febe29"
  },
  {
    key: "profile",
    title: "Effortlessly Change Your Profile",
    titleStyle: { textAlign: "center" },
    image: require("../../assets/member-tutorial/profile.png"),
    imageStyle: { height: "80%", width: "80%" },
    backgroundColor: "#22bcb5"
  }
];

class MemberTutorialScreen extends React.Component {
  state = {
    showRealApp: false,
    uid: null
  };

  componentDidMount() {
    console.disableYellowBox = true;

    const { uid } = firebase.auth().currentUser;
    this.setState({ uid: uid });
  }
  _onDone = () => {
    this.props.navigation.navigate('Member')
    firebase.firestore().collection('users').doc(this.state.uid).update({
      tutorialCompleted: true
    })
    this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          slides={slides}
          onDone={this._onDone}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  image: {
    width: "20%",
    height: "20%"
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    backgroundColor: "transparent",
    textAlign: "center",
    paddingHorizontal: 16
  },
  title: {
    fontSize: 22,
    color: "white",
    backgroundColor: "transparent",
    textAlign: "center",
    marginBottom: 16
  }
});

export default MemberTutorialScreen;
