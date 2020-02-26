import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

class LandingPage extends React.Component {
    render() {
        return (
           <View style={styles.container}>
               <Text style={styles.header}>FBLA Overseer</Text>
               <View style={{ justifyContent: 'center', alignItems: 'center',}}>
                <Image 
                style={{ width: 265.2, height: 108, marginTop: 40 }}
                source={require('../images/logo.png')}
                />
               </View>
               <View style={{marginTop: 270}}>
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
           </View>  
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        marginTop: 10,
        fontSize: 52,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30
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

export default LandingPage