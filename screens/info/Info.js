import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Info extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.header}>About FBLA</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold",
        margin: 20
    }
});

export default Info