import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from "react-native";
import React from "react";
import { Block, Button, Text, theme, NavBar } from "galio-framework";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";

const { height, width } = Dimensions.get("screen");

import materialTheme from "../constants/Theme";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class LoginScreen extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  handleLogin = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <DismissKeyboard>
        <Block flex style={styles.container}>
          <Block flex style={{ marginTop: "30%" }}>
            <Block>
              <Text center color="white" size={60}>
                Log In
              </Text>
            </Block>
            <Block flex space="between" style={styles.form}>
              <Block>
                <Text style={{ color: "white" }}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                ></TextInput>
              </Block>

              <Block style={{ marginTop: 32 }}>
                <Text style={{ color: "white" }}>Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  autoCapitalize="none"
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                ></TextInput>
              </Block>
            </Block>
          </Block>
          <Block flex space="between" style={styles.padded}>
            <Block flex space="around" style={{ zIndex: 2, marginTop: "20%" }}>
              <Block flex>
                <Block style={{ marginTop: "7%" }}>
                  <Button
                    shadowless
                    style={styles.button}
                    color={materialTheme.COLORS.BUTTON_COLOR}
                    onPress={this.handleLogin}
                    round
                  >
                    SIGN IN
                  </Button>
                </Block>
                <Block style={styles.errorMessage}>
                  {this.state.errorMessage && (
                    <Text style={styles.error}>{this.state.errorMessage}</Text>
                  )}
                </Block>
                <TouchableOpacity
                  style={{ alignContent: "center" }}
                  onPress={() =>
                    this.props.navigation.navigate("MasterRegister")
                  }
                >
                  <Text
                    style={{
                      color: "#C0C0C0",
                      fontSize: 13,
                      textAlign: "center"
                    }}
                  >
                    Don't Have An Account?{" "}
                    <Text style={{ fontWeight: "500", color: "#E9446A" }}>
                      Sign Up
                    </Text>
                  </Text>
                </TouchableOpacity>
              </Block>
            </Block>
          </Block>
        </Block>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginHorizontal: 30,
    marginTop: "20%"
  },
  inputTitle: {
    color: "white",
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "white"
  }
});

export default LoginScreen;
