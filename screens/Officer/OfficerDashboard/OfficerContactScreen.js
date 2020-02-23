import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class OfficerContactScreen extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>Contact Screen</Text>
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

export default OfficerContactScreen