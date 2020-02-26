import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
class MasterRegisterScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>FBLA Manager App</Text>
                <View style={{marginTop: 370}}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("MemberRegister")}>
                        <Text style={{color: "#414959", fontSize: 13, textAlign: "center"}}>
                            <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>I am a member</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("OfficerRegister")}>
                        <Text style={{color: "#414959", fontSize: 13, textAlign: "center"}}>
                            <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>I am an officer</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>  
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        fontSize: 36,
        textAlign: "center",
        marginBottom: "25%"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#000080",
        borderRadius: 4,
        height: 52,
        alignContent: "center",
        justifyContent: "center",
        margin: 17
    }
});

export default MasterRegisterScreen;