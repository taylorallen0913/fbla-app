import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase'

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

class OfficerRegisterScreen extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    }

    handleSignUp = () => {
        var db = firebase.firestore();
        firebase
            .auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                db.collection('users').doc(userCredentials.user.uid).set({
                    role: "officer",
                    chapters: new Array
                })
                return userCredentials.user.updateProfile({
                    displayName: this.state.name,
                    photoURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEX///+kqa+gpqyqr7Seo6r5+vqfpKuzt7zo6eqcoajCxcne4OLLztG7v8Pv8PHW2Nvi4+X19vaxtbrBxMjt7u/Iy8+prbPS1Nej01dWAAAFKklEQVR4nO2cWbujIAyGj4jghla7/f9/Ot1YtJtYETPP996ci9ExaUIIEPL3BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEOXV1XbVlXexJYkBHktmRDsxuVvX+exJVqUQ5lwlgxgPCn/GyV3/Vg9rWRaxZZtCfKUv1Lvjkh3seX7lUwV7/W7wlUWW8af2CUv/XPgq4yyGesvBrxTHGPLORslng12mzHGo1HFlnQmaqiJ4Incn9v2XMoTH2rJaKo4UJDxvnUyma6Vwv1nklYshavf/ilRa0p3lmRlDBl/onVmQSG7V490ynmGt2tL+CONK/zbzKVy7MyJpeOp9b/0pQHvdKn11NN60i3A2QjO+s9P9vbJ8zqyLUImpiroqigI5W+l9b2vUmfWn+nkNp0x4ZTwYYMSJ2PEWpuQ1VMeP/s9vgV8w+PJvBBWrsXYaScVE9dFO+2nnMi+xl57XTr1DT17UsndTGycnIi1jJSbmtjIJofGzLjph/xnO1QPgzA5/R2pfxQSm2/Hh4bCIwvTEwaN+UJqDT0Cow6/NBb7enbzyVA6PRC/prFbQM+Ghcc7mQ6mJJZQegeR+bxEKqvRGgqfl8ycTyH5NnObz0ukNNRDymcc2uSbgobaHD75idkUIBFp1Iz5sCE1W5icxmMH1GR6JGb8doa05YxMLx4Hs+8y/R39ho9nR8SIO/noM9eBxmuGiYfyXj6ZYyqPBVdMdNiYfBRh8u7puwKRMQJPNIkxoSCxxP9ztqL4pJGYm1+ExFxxxUbTSeHUPExlM/HPLvMnWcWehpNIaO5YI4qvpy21IGhC1y78y95SbX4MOqPwij1ATPjHfezSDllGJZDeqRzJP8wZ0h40kitV2Fsrsnf7vJVTN0TLR284NQgJ719MjLverbiZfIqzHezp9U3HtB0Ms+48KjulsHsxphtokAhxOlZ503VN3h5PYlTURyvKaLpxcSljgl8Q4+JERlTBi6P2I1VeI3qKLvqg/FDjbYboPraUP1E9lcuOeDuVkCEriw86sqIk7KGaRr2+bnEtO1XEChLf0dWJeFKSiaSmGkJfkR9TrmvYrzefeH+ktFaaRnaZ6ZVMU6mObf4fjD4AAAAAAABAQJqqVrJPT+kcTmkvVV1td1WcVUrw53vMflze50xVW1xd5eppH3S+mkKorS2Q8ze9L+Yryfst6djICfui3nC5mRFZL2w/DePbKHPL5FPrhMUQcgMh5/C9uccPsCS6p+5GI/C6U/holjQDwZ+bZkQOOEMFGSvkuTpk8zlUZ1kMteSHmArmroJMqGVOWSo5CF0ioqN2bozharlN+kYNfCNeuHGqEdhp2fGSn5z/O1rZ6dGphln+Lr1zuhqr/NspQXzf3OMHWtuDKdLdUtvdY1odqTe2sCqOn7YiqAVvn+CBf8PP2FES7mqrHekRaqZM95ygHmRGQoTiU/PtoOXnjW9VfIhPh71+barii7Wnfdu/JOx34t3FMJc+Q7fN8b+BswwmIw3eoiufcVFsCUyHlvBR3ETTdVdRehiu0NvJuOm6BXDmKmz4XEPnTis3yppznXkmeZyeGbOupM8jUs+MWY0T5mHa86x7k31W8wsC34rz1RVHhAM0XBJoGAZouCTQMAzQcEmgYRig4ZJAwzDwCBqu256nfyi4xhafvrS/7gr4cfBVrHEk9KiGCHbC9YZjwRgr1mmoev/W6h3bd0ru1zoPypXcXK0iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABOIfEJUm1PN+qUcAAAAASUVORK5CYII="
                })
            })
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        return (
            <DismissKeyboard>
            <View style={styles.container}>
                <Text style={styles.greeting}>
                    Register as an Officer
                </Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputText}>Full Name</Text>
                        <TextInput 
                            style={styles.input}
                            autoCapitalize="none" 
                            onChangeText={name => this.setState({ name })}
                            value={this.state.name}
                            ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
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

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignContent: "center", marginTop: 32}}>
                    <Text style={{color: "#414959", fontSize: 13, textAlign: "center"}}>
                        Already have an account? <Text style={{ fontWeight: "500", color: "#E9446A" }} onPress={() => this.props.navigation.navigate("Login")}>Login</Text>
                    </Text>
                </TouchableOpacity>
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
        marginHorizontal: 30,
        backgroundColor: "#000080",
        borderRadius: 4,
        height: 52,
        alignContent: "center",
        justifyContent: "center"
    }
});

export default OfficerRegisterScreen;