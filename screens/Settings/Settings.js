import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import * as firebase from "firebase";
import { Accordion, Block, Text, Button } from "galio-framework";
import { Card, Icon } from "react-native-elements";

const { height, width } = Dimensions.get("screen");

import materialTheme from "../../constants/Theme";

class Settings extends React.Component {
  componentDidMount() {
    const user = firebase.auth().currentUser;
    const { email, displayName, uid } = firebase.auth().currentUser;
    console.log(uid);
  }

  render() {
    return (
      <Block style={styles.container}>
        <Block shadow>
          <Card title="SUPPORT">
            <Block style={styles.button}>
              <Button shadowless round color="info" size="small" onPress={() => {this.props.navigation.navigate("BugReportScreen")}}>
                REPORT A BUG
              </Button>
            </Block>
            <Block style={styles.button}>
              <Button shadowless round color="info" size="small">
                CONTACT US
              </Button>
            </Block>
            <Block style={styles.button}>
              <Button shadowless round color="info" size="small">
                FAQ
              </Button>
            </Block>
            <Block style={styles.button}>
              <Button shadowless round color="info" size="small" onPress={() => {this.props.navigation.navigate("PrivacyPolicyScreen")}}>
                PRIVACY POLICY
              </Button>
            </Block>
            <Block style={styles.button}>
              <Button shadowless round color="info" size="small" onPress={() => {this.props.navigation.navigate("TOSScreen")}}>
                TERMS OF SERVICE
              </Button>
            </Block>
          </Card>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    alignItems: "center",
    margin: "2%"
  }
});

export default Settings;
