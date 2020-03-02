import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Info from '../../Info/Info'

class OfficerInfoScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Info />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });

export default OfficerInfoScreen