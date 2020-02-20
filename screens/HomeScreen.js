import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import * as firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
    state = {
        email: "",
        displayName: "",
        id: ""
    }

    componentDidMount() {
        const { email, displayName, uid } = firebase.auth().currentUser;

        this.setState( { email, displayName, uid } )
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>FBLA Chapter Manager</Text>
                <Text>Email: {this.state.email}</Text>
                <Text>User ID: {this.state.uid}</Text>
                <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
                    <Text style={{ textAlign: "center" }}>Logout</Text>
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
        marginTop: 32,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 36
    }
});

export default HomeScreen;