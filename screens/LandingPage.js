import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class LandingPage extends React.Component {
    render() {
        return (
           <View style={styles.container}>
               <Text style={styles.header}>FBLA Overseer</Text>
               <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={{color: "#414959", fontSize: 13, textAlign: "center"}}>
                        <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>Login</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("MasterRegister")}>
                    <Text style={{color: "#414959", fontSize: 13, textAlign: "center"}}>
                        <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>Register</Text>
                    </Text>
                </TouchableOpacity>
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
        backgroundColor: "#4d79ff",
        borderRadius: 4,
        height: 52,
        alignContent: "center",
        justifyContent: "center",
        margin: 30
    }
});

export default LandingPage