import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import * as firebase from "firebase";

const { height, width } = Dimensions.get("screen");

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
    if (index === 4) {
      setTimeout(() => {
        this.props.navigation.navigate("Officer");
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
              source={require("../../assets/officer-tutorial/add-chapter.png")}
              style={{
                height: height * 0.7,
                width: width * 0.7
              }}
            />
          </View>
          <Text style={styles.text}>
            Create your Local FBLA Chapter for your Members to join
          </Text>
        </View>
        <View style={styles.slide2}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/officer-tutorial/chapter-management-screen.png")}
              style={{
                height: height * 0.7,
                width: width * 0.7
              }}
            />
          </View>
          <Text style={styles.text}>Manage your Chapter with ease</Text>
        </View>
        <View style={styles.slide3}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/officer-tutorial/add-event-screen.png")}
              style={{
                height: height * 0.7,
                width: width * 0.7
              }}
            />
          </View>
          <Text style={styles.text}>Add Events to keep your Chapter in the loop</Text>
        </View>
        <View style={styles.slide4}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/officer-tutorial/calendar-screen.png")}
              style={{
                height: height * 0.7,
                width: width * 0.7
              }}
            />
          </View>
          <Text style={styles.text}>Access your Chapter's Calendar to see what's coming up</Text>
        </View>
        <View style={styles.slide5}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/officer-tutorial/meeting-screen.png")}
              style={{
                height: height * 0.7,
                width: width * 0.7
              }}
            />
          </View> 
          <Text style={styles.text}>Start Meetings and Effortlessly view Attendance</Text>
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
  slide4: {
    flex: 1,
    backgroundColor: "#92BBD9"
  },
  slide5: {
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
