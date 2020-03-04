import React from 'react'
import {
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native'
import { Block, Button, Text, theme } from 'galio-framework'

const { height, width } = Dimensions.get('screen')

import materialTheme from '../constants/Theme'

class MasterRegisterScreen extends React.Component {
  render() {
    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex center style={{ marginTop: '30%' }}>
          <Block>
            <Text color="white" size={60}>
              Welcome!
            </Text>
          </Block>
          <Block flex center>
            <Image
              source={require('../assets/logo.png')}
              style={{
                height: height * 0.75,
                width: width * 0.75,
                marginTop: '-40%',
                zIndex: 1,
                resizeMode: 'contain',
              }}
            />
          </Block>
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2, paddingTop: '20%' }}>
            <Block flex>
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => this.props.navigation.navigate('MemberRegister')}
                round
              >
                JOIN FBLA
              </Button>
              <Block style={{ paddingVertical: '5%' }} />
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() =>
                  this.props.navigation.navigate('OfficerRegister')
                }
                round
              >
                I AM AN OFFICER
              </Button>
              <TouchableOpacity
                style={{ alignContent: 'center', marginTop: '15%' }}
              >
                <Text
                  style={{
                    color: '#C0C0C0',
                    fontSize: 13,
                    textAlign: 'center',
                  }}
                >
                  Already have an account?{' '}
                  <Text
                    style={{ fontWeight: '500', color: '#E9446A' }}
                    onPress={() => this.props.navigation.navigate('Login')}
                  >
                    Login
                  </Text>
                </Text>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
      </Block>
    )
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
})

export default MasterRegisterScreen
