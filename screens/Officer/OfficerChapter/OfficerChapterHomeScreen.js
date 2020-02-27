import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class OfficerChapterHomeScreen extends React.Component {

    render() {
        const { params } = this.props.navigation.state;
        
        const id = params ? params.id : null;
        const description = params ? params.description : null;
        const name = params ? params.name : null;
        const school = params ? params.school : null; 
        return (
            <View>
                <Text style={{fontSize: 40, fontWeight: "bold"}}>Officer Chapter Screen</Text>

                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("MeetingScreen", {
                    id: id
                })}>
                    <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>Start Meeting</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
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
        marginTop: 200,
        marginHorizontal: 30,
        backgroundColor: "#000080",
        borderRadius: 4,
        height: 52,
        alignContent: "center",
        justifyContent: "center"
    }
});

export default OfficerChapterHomeScreen