import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';

class LoadingScreen extends React.Component {
    
    constructor() {
        super();
        console.ignoredYellowBox = ['Setting a timer'];
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                const { uid } = firebase.auth().currentUser;
                var userDb = firebase.firestore().collection('users');
                userDb.doc(uid).get()
                    .then((doc) => {
                        if(doc.data().role == "member") this.props.navigation.navigate("Member");
                        else if(doc.data().role == "officer") this.props.navigation.navigate("Officer");
                    })
            }
            this.props.navigation.navigate("Auth");
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
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

export default LoadingScreen;