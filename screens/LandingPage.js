import React from "react";
import { StyleSheet, Image, Dimensions, StatusBar } from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import materialTheme from "../constants/Theme";

class LandingPage extends React.Component {
  render() {
    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex center>
          <Image
            source={require("../assets/logo.png")}
            style={{
              height: height * 0.7,
              width: width * 0.7,
              marginTop: "-30%",
              zIndex: 1,
              resizeMode: "contain"
            }}
          />
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2, marginTop: "-90%" }}>
            <Block>
              <Block>
                <Text color="white" size={60}>
                  FBLA
                </Text>
              </Block>
              <Block row>
                <Text color="white" size={60}>
                  Overseer
                </Text>
              </Block>
              <Text size={15} color="rgba(255,255,255,0.6)">
                An FBLA Manager to Increase
              </Text>
              <Text size={15} color="rgba(255,255,255,0.6)">
                Organizational Efficency
              </Text>
            </Block>
            <Block center style={{ marginTop: "-60%" }}>
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() =>
                  this.props.navigation.navigate("MasterRegister", {
                    transition: "bottomTransition"
                  })
                }
                round
              >
                GET STARTED
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
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
  }
});

export default LandingPage;
