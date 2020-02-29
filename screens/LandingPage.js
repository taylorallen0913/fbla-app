import React from 'react'
import { View, StyleSheet, Image, Button } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { Ionicons } from '@expo/vector-icons'

class LandingPage extends React.Component {
  state = {
    loaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      'montserrat-bold': require('../fonts/Montserrat-Bold.ttf'),
      ...Ionicons.font
    })
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }

    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.headerText}>FBLA Overseer</Text>
        </View>
        <View style={styles.logoView}>
          <Image
            style={{ width: 309.4, height: 126 }}
            source={require('../images/logo.png')}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            style={{ marginHorizontal: 30 }}
            onPress={() => this.props.navigation.navigate('Login')}
            title={'Login'}
          />
          <View style={{ margin: 15 }} />
          <Button
            style={{ marginHorizontal: 30 }}
            onPress={() => this.props.navigation.navigate('MasterRegister')}
            title={'Register'}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textView: {
    marginTop: 20
  },
  logoView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonView: {
    flex: 2,
    alignItems: 'center'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'montserrat-bold'
  }
})

export default LandingPage
