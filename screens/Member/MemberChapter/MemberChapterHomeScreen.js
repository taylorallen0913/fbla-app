import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

class MemberChapterHomeScreen extends React.Component {

    state = {
        uid: "",
        id: "",
        items: {},
        meetingId: "",
        errorMessage: null,
        successMessage: null
    }

    componentDidMount() {
        const { uid } = firebase.auth().currentUser;
        const { params } = this.props.navigation.state;
        const id = params ? params.id : null;
        this.setState({id: id, uid: uid})
    }

    attendMeeting = () => {
        Keyboard.dismiss()
        var db = firebase.firestore()
        db.collection('chapters').doc(this.state.id).get()
            .then(doc => {
                let found = false
                let duplicate = false
                let data = doc.data().calendar
                for(let i = 0; i < data.length; i++) {
                    if(this.state.meetingId == data[i].id && !data[i].attendance.includes(this.state.uid)) {
                        let newData = data[i]
                        newData.attendance.push(this.state.uid)
                        this.setState({ errorMessage: null })
                        data[i] = newData
                        found = true;
                    }
                    db.collection('chapters').doc(this.state.id).update({ calendar: data })
                }
                if(found) {
                    this.setState({ successMessage: "Success: You were marked present"})
                }
                if(!found) {
                    this.setState({ errorMessage: "Error: Meeting code invalid or you have already marked presence" }, () => this.setState({ successMessage: null }))
                }
            })
    }

    render() {
        return (
            <DismissKeyboard>
                <View>
                    <Text style={{fontSize: 40, fontWeight: "bold", textAlign: "center"}}>Member Home</Text>
                    <View style={styles.form} style={{margin: 50}}>
                        <View style={{marginTop: 32}}>
                                <Text style={styles.inputText}>Attend a Meeting</Text>
                                <TextInput 
                                    style={styles.input}
                                    autoCapitalize="none" 
                                    onChangeText={meetingId => this.setState({meetingId: meetingId})}
                                    value={this.state.meetingId}
                                ></TextInput>
                                <TouchableOpacity style={styles.button} onPress={() => this.attendMeeting()}>
                                    <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>Confirm Attendance</Text>
                                </TouchableOpacity>
                                <View style={styles.errorMessage}>
                                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                                </View>
                                <View style={styles.successMessage}>
                                    {this.state.successMessage && <Text style={styles.success}>{this.state.successMessage}</Text>}
                                </View>
                        </View>
                    </View>
                </View>
            </DismissKeyboard>
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
    successMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    success: {
        color: "#32CD32",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
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
    typeInput: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
        marginBottom: 7
    },
    button: {
        marginTop: 50,
        marginHorizontal: 30,
        backgroundColor: "#000080",
        borderRadius: 4,
        height: 52,
        alignContent: "center",
        justifyContent: "center"
    },
    dateTimeText: {
        fontSize: 16,
        fontWeight: 'normal',
    },
});

export default MemberChapterHomeScreen