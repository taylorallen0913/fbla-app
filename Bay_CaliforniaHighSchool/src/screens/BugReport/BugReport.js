import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { Button, Block } from "galio-framework";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class BugReport extends React.Component {
  state = {
    bugName: "",
    bugDescription: ""
  };

  render() {
    return (
      <DismissKeyboard>
        <View>
          <Text style={styles.header}>Report a Bug</Text>
          <View style={styles.form}>
            <View>
              <Text style={styles.inputText} style={{ marginTop: 30 }}>
                Bug Name
              </Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              ></TextInput>
            </View>

            <View style={{ marginTop: "5%" }}>
              <Text style={styles.inputText} style={{ marginBottom: "5%" }}>
                Describe The Problem
              </Text>
              <TextInput
                multiline={true}
                textAlignVertical="top"
                style={{ height: 220, borderColor: "gray", borderWidth: 1 }}
                onChangeText={text => this.setState({ meetingNotes: text })}
                value={this.state.text}
              />
            </View>
            <Block center style={{ marginTop: "10%" }}>
              <Button
                color="#000080"
                onPress={() => this.props.navigation.goBack()}
              >
                Report
              </Button>
            </Block>
          </View>
        </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    margin: 20
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
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
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D"
  },
  button: {
    marginTop: "20%",
    marginHorizontal: 30,
    backgroundColor: "#000080",
    borderRadius: 4,
    height: 52,
    alignContent: "center",
    justifyContent: "center"
  }
});

export default BugReport;
