import React from 'react'
import {
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  Keyboard,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import { CheckBox } from 'react-native-elements'
import { Block, Button, Text, theme } from 'galio-framework'
import * as firebase from 'firebase'

const { height, width } = Dimensions.get('screen')

import materialTheme from '../constants/Theme'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

class OfficerRegisterScreen extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    errorMessage: null,
  }

  handleSignUp = () => {
    var db = firebase.firestore()
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        db.collection('users')
          .doc(userCredentials.user.uid)
          .set({
            role: 'officer',
            chapters: new Array(),
            tutorialCompleted: false,
          })
        return userCredentials.user.updateProfile({
          displayName: this.state.name,
        })
      })
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <DismissKeyboard>
        <Block flex style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Block flex style={{ marginTop: '10%' }}>
            <Block>
              <Text center color="white" size={53}>
                Register as an Officer
              </Text>
            </Block>
            <Block flex space="between" style={styles.form}>
              <Block style={{ marginTop: '8%' }}>
                <Text style={(styles.inputText, { color: 'white' })}>
                  Full Name
                </Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  onChangeText={name => this.setState({ name })}
                  value={this.state.name}
                ></TextInput>
              </Block>

              <Block style={{ marginTop: '8%' }}>
                <Text style={(styles.inputText, { color: 'white' })}>
                  Email Address
                </Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                ></TextInput>
              </Block>

              <Block style={{ marginTop: '6%' }}>
                <Text style={(styles.inputText, { color: 'white' })}>
                  Password
                </Text>
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
            <Block flex space="around" style={{ zIndex: 2, marginTop: '25%' }}>
              <CheckBox
                center
                title="I agree to FBLA Overseer's Terms & Conditions"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                onPress={() => {
                  this.setState({ checked: true })
                }}
                checked={this.state.checked}
                textStyle={{ color: 'white' }}
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderWidth: 0,
                }}
              />
              <Block style={{ margin: '5%' }} />
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={this.handleSignUp}
                round
              >
                SIGN UP
              </Button>
              <Text
                center
                style={{ color: 'grey', marginTop: '5%' }}
                onPress={() => {
                  this.props.navigation.navigate('TOSScreen')
                }}
              >
                Terms and Conditions
              </Text>
              <Block flex style={styles.errorMessage}>
                {this.state.errorMessage && (
                  <Text style={styles.error}>{this.state.errorMessage}</Text>
                )}
              </Block>
            </Block>
          </Block>
        </Block>
      </DismissKeyboard>
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
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  form: {
    marginHorizontal: 30,
    marginTop: '7%',
  },
  inputTitle: {
    color: 'white',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: 'white',
  },
})

export default OfficerRegisterScreen
