import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

class RegisterScreen extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.container}>Register Screen</Text>
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

export default RegisterScreen;