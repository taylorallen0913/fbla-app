import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import * as firebase from "firebase";

class OfficerTutorialScreen extends React.Component {
  state = {
    uid: null
  };

  componentDidMount() {
    console.disableYellowBox = true;
    const { uid } = firebase.auth().currentUser;
    this.setState({ uid: uid });
  }

  changeIndex = index => {
    if (index === 2) {
      setTimeout(() => {
        this.props.navigation.navigate("Member");
      }, 3000);
      firebase
        .firestore()
        .collection("users")
        .doc(this.state.uid)
        .update({
          tutorialCompleted: true
        });
    }
  };

  render() {
    return (
      <Swiper
        loop={false}
        onIndexChanged={index => {
          this.changeIndex(index);
        }}
        style={styles.wrapper}
        showsButtons
      >
        <View style={styles.slide1}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/member-tutorial/home.png")}
              style={{
                height: height * 0.7,
                width: width * 0.7
              }}
            />
          </View>
          <Text style={styles.text}>Join Your Local FBLA Chapter</Text>
        </View>
        <View style={styles.slide2}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/member-tutorial/about.png")}
              style={{
                height: height * 0.7,
                width: width * 0.7
              }}
            />
          </View>
          <Text style={styles.text}>
            Access Relevant Information About FBLA
          </Text>
        </View>
        <View style={styles.slide3}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/member-tutorial/profile.png")}
              style={{
                height: height * 0.7,
                width: width * 0.7
              }}
            />
          </View>
          <Text style={styles.text}>Edit Your Profile With Ease</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  image: {
    justifyContent: "center",
    alignItems: "center"
  },
  slide1: {
    flex: 1,
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "5%"
  }
});

export default OfficerTutorialScreen;
