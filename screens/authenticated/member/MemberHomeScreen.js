import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

class MemberHomeScreen extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>I am a member</Text>
            <Text>My Chapter</Text>
          </View>
        )
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });  

export default MemberHomeScreen