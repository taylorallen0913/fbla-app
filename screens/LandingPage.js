import React from "react";
import { View, StyleSheet, Image, Dimensions, StatusBar, ImageBackground } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';

class LandingPage extends React.Component {
  render() {
    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex center>
          <Image
            source={require('../images/logo.png')}
            style={{ height: height * 0.85, width: width * 0.85, marginTop: '-40%', zIndex: 1, resizeMode: "contain" }}
          />
        </Block>
        <Block flex space="between" style={styles.padded}>
        <Block flex space="around" style={{ zIndex: 2, marginTop: '-50%'}}>
            <Block>
              <Block>
                <Text color="white" size={60}>FBLA</Text>
              </Block>
              <Block row>
                <Text color="white" size={60}>Overseer</Text>
              </Block>
              <Text size={16} color='rgba(255,255,255,0.6)'>
                FBLA Manager to Increase Organizational Efficency
              </Text>
            </Block>
            <Block center>
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => this.props.navigation.navigate('MasterRegister', {transition: 'bottomTransition'} )}>
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
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});

export default LandingPage;
