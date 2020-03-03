import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";

class LoadingScreen extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    Permissions.askAsync(Permissions.LOCATION);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const { uid } = firebase.auth().currentUser;
        var userDb = firebase.firestore().collection("users");
        userDb
          .doc(uid)
          .get()
          .then(doc => {
            if (doc.data().role == "member") {
              if (doc.data().tutorialCompleted === true) {
                this.props.navigation.navigate("Member");
              } else {
                this.props.navigation.navigate("MemberTutorial");
              }
            } else if (doc.data().role == "officer") {
              if (doc.data().tutorialCompleted === true) {
                this.props.navigation.navigate("Officer");
              } else {
                this.props.navigation.navigate("OfficerTutorial");
              }
            }
          });
      }
      this.props.navigation.navigate("Auth");
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LoadingScreen;
