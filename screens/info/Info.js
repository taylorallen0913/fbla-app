import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Info extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.header}>About FBLA</Text>
                <Text style={styles.body}>
                    FBLA is a high school club
                </Text>
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
    },
    body: {
        margin: 20,
        fontSize: 15,
        fontWeight: "normal"
    }
});

export default Info