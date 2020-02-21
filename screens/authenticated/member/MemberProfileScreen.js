import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase';

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
                <Text>Role: {this.state.role}</Text>
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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export default MemberProfileScreen