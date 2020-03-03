import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import * as firebase from "firebase";
import { Block } from "galio-framework";
import AppIntroSlider from "react-native-app-intro-slider";

const { height, width } = Dimensions.get("screen");

const slides = [
  {
    key: "create-chapter",
    title: "Create Your Local Chapter For Your Members To Join",
    titleStyle: { textAlign: "center" },
    image: require("../../assets/officer-tutorial/add-chapter.png"),
    imageStyle: { height: "80%", width: "80%" },
    backgroundColor: "#59b2ab"
  },
  {
    key: "chapter-management-screen",
    title: "Manage Your Chapter Simply",
    titleStyle: { textAlign: "center" },
    image: require("../../assets/officer-tutorial/chapter-management-screen.png"),
    imageStyle: { height: "80%", width: "80%" },
    backgroundColor: "#febe29"
  },
  {
    key: "meeting-screen",
    title: "Start Meetings And Log Crucial Data",
    titleStyle: { textAlign: "center" },
    image: require("../../assets/officer-tutorial/meeting-screen.png"),
    imageStyle: { height: "80%", width: "80%" },
    backgroundColor: "#22bcb5"
  },
  {
    key: "add-event-screen",
    title: "Add Events To Keep Members In The Loop",
    titleStyle: { textAlign: "center" },
    image: require("../../assets/officer-tutorial/add-event-screen.png"),
    imageStyle: { height: "80%", width: "80%" },
    backgroundColor: "#22bcb5"
  },
  {
    key: "calendar-screen",
    title: "Visualize Your Schedule With Calendar Capabilities",
    titleStyle: { textAlign: "center" },
    image: require("../../assets/officer-tutorial/calendar-screen.png"),
    imageStyle: { height: "80%", width: "80%" },
    backgroundColor: "#22bcb5"
  }
];

class OfficerTutorialScreen extends React.Component {
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
    this.props.navigation.navigate('Officer')
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

export default OfficerTutorialScreen;
