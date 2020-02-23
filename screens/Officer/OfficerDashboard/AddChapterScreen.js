import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicatorComponent } from 'react-native'
import * as firebase from 'firebase'

class AddChapterScreen extends React.Component {
    state = {
        name: "",
        description: "",
        school: ""
    }

    generateClassID = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    restOfCreateChapter = (officerData, id, uid) => {
        var db = firebase.firestore();
        officerData.push(id)
        db.collection('users').doc(uid).set({ chapters: officerData }, { merge : true })
        this.props.navigation.navigate("OfficerHome")
    }

    createChapter = () => {
        const { uid } = firebase.auth().currentUser;
        var db = firebase.firestore();
        const id = this.generateClassID(5)
        var newChapter = 
        {
        name: this.state.name,
        description: this.state.description,
        school: this.state.school,
        officers: [uid],
        members: new Array,
        id: id
        } 
        db.collection('chapters').doc(id).set(newChapter)

        var officerData = []
        db.collection('users').doc(uid).get()
            .then((doc) => {
                officerData = doc.data().chapters
                this.restOfCreateChapter(officerData, id, uid)
        })
        
    }

    render() {
        return (
            <View>
                <View style={styles.form}>
                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputText}>Chapter Name</Text>
                        <TextInput 
                            style={styles.input}
                            autoCapitalize="none" 
                            onChangeText={name => this.setState({ name })}
                            value={this.state.name}
                            ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputText}>Chapter Description</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none"
                            onChangeText={description => this.setState({ description })}
                            value={this.state.description}
                            ></TextInput>
                    </View>
                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputText}>School</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none"
                            onChangeText={school => this.setState({ school })}
                            value={this.state.school}
                            ></TextInput>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.createChapter}>
                    <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>Create Chapter</Text>
                </TouchableOpacity>
            </View>
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
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignContent: "center",
        justifyContent: "center"
    }
});

export default AddChapterScreen