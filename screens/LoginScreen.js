import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase'

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

class LoginScreen extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    }

    handleLogin = () => {
        const { email, password } = this.state;

        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => this.setState({ errorMessage: error.message }))
    }

    onLoginWithGoogle = () => {
        var id_token = googleUser.getAuthResponse().id_token
    }

    render() {
        return (
            <DismissKeyboard>
            <View style={styles.container}>
                <Text style={styles.greeting}>
                    Log into FBLA Overseer
                </Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputText}>Email Address</Text>
                        <TextInput 
                            style={styles.input}
                            autoCapitalize="none" 
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                            ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputText}>Password</Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry 
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                            ></TextInput>
                    </View>
                </View>
                <View style={{marginTop: 0}}>
                    <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                        <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>Sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignContent: "center", marginTop: 10}} onPress={() => this.props.navigation.navigate("MasterRegister")}>
                        <Text style={{color: "#414959", fontSize: 13, textAlign: "center"}}>
                            New? <Text style={{ fontWeight: "500", color: "#E9446A" }}>Sign Up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </DismissKeyboard>
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
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        margin: 20,
        marginHorizontal: 30,
        backgroundColor: "#DAA520",
        borderRadius: 4,
        height: 52,
        alignContent: "center",
        justifyContent: "center"
    }
});

export default LoginScreen;