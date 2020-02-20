import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>
                    Welcome back
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    }
});

export default LoginScreen;