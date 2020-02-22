import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase';
import Profile from '../Profile/Profile'

class MemberProfileScreen extends React.Component {
    state = {
        email: "",
        displayName: "",
        id: "",
        role: ""
    }
    componentDidMount() {
        var userDb = firebase.firestore().collection('users');
        const { email, displayName, uid } = firebase.auth().currentUser;
        this.setState( { email, displayName, uid } )
        userDb.doc(uid).get()
            .then(doc => {
                if(doc.exists) {
                    this.setState({role: doc.data().role});
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View style={styles.container}>
                <Profile role={this.state.role}/>
                <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
                    <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}> Logout </Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    button: {
        marginTop: 32,
        marginHorizontal: 30,
        backgroundColor: "#000080",
        borderRadius: 4,
        height: 52,
        alignContent: "center",
        justifyContent: "center",
      },
  });

export default MemberProfileScreen