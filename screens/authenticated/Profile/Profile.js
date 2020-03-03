import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from "react-native";
import { TextInput } from "react-native-paper";
import * as firebase from "firebase";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class Profile extends React.Component {
  state = {
    email: "",
    displayName: "",
    uid: "",
    role: "",
    name: "",
    password: "",
    photoURL: "",
    isLoaded: false
  };

  componentDidMount() {
    const user = firebase.auth().currentUser;
    this.setState({ displayName: user.displayName });
    this.setState({ photoURL: user.photoURL }, () =>
      this.setState({ isLoaded: true })
    );
    const { email, displayName, uid } = firebase.auth().currentUser;
    this.setState({ email, displayName, uid });
  }

  saveChanges = () => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: this.state.displayName
      })
      .then(() => {})
      .catch(err => console.log(err));
  };

  render() {
    return (
      <DismissKeyboard>
        <View style={{ paddingTop: 30, paddingBottom: 30 }}>
          {this.state.isLoaded ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: 10
              }}
            >
              <Image
                style={{ width: 100, height: 100, resizeMode: "center" }}
                source={require("../../../assets/profilepic.png")}
              />
            </View>
          ) : null}
          <View style={{ padding: "1%" }}>
            <Text style={styles.text}>Display Name:</Text>
            <TextInput
              autoCapitalize="none"
              onChangeText={displayName => this.setState({ displayName })}
              value={this.state.displayName}
              keyboardShouldPersistTaps={true}
            />
          </View>
          <View style={{ padding: "1%" }}>
            <Text style={styles.text}>User ID:</Text>
            <TextInput
              autoCapitalize="none"
              value={this.state.uid}
              editable={false}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.saveChanges();
            }}
          >
            <Text
              style={{ color: "#FFF", fontWeight: "500", textAlign: "center" }}
            >
              {" "}
              Save Changes{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 10
  },
  button: {
    marginTop: "10%",
    margin: 20,
    marginHorizontal: 30,
    backgroundColor: "#0066cc",
    borderRadius: 4,
    height: 52,
    alignContent: "center",
    justifyContent: "center"
  }
});

export default Profile;
