import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Block } from "galio-framework";

class OfficerChapterHomeScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    return (
      <View>
        <Text
          style={{
            fontSize: 38,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "5%"
          }}
        >
          Chapter Management
        </Text>
        <Text style={{ textAlign: "center", fontSize: 35, marginTop: 50 }}>
          Chapter Code:{"\n"} <Text style={{ color: "red" }}>{id}</Text>
        </Text>
        <Text style={{ textAlign: "center", fontSize: 19, marginTop: 30 }}>
          For a member to join your chapter, give them this code.
        </Text>
        <Block center style={{ marginTop: "75%" }}>
          <Button
            color="#000080"
            onPress={() =>
              this.props.navigation.navigate("MeetingScreen", {
                id: id
              })
            }
          >
            Start Meeting
          </Button>
        </Block>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
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
    marginTop: "50%",
    marginHorizontal: 30,
    backgroundColor: "#000080",
    borderRadius: 4,
    height: 52,
    alignContent: "center",
    justifyContent: "center"
  }
});

export default OfficerChapterHomeScreen;
