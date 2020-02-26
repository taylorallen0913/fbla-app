import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import * as firebase from 'firebase';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

class MeetingScreen extends React.Component {

    state = {
        id: "",
        timer: null,
        seconds: '00',
        miliseconds: '00',
        minutes: '00',
        meetingName: '',
        meetingNotes: '',
        meetingTime: ''
    }

    constructor( props ) {
        super( props );

        this.onButtonStop = this.onButtonStop.bind(this);
        this.start = this.start.bind(this);
    }

    componentDidMount() {
        this.start();
        const { params } = this.props.navigation.state; 
        const id = params ? params.id : null;
        this.setState({id: id})
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    start() {
        var self = this;
        let timer = setInterval(() => {
            var num = (Number(this.state.miliseconds) + 1).toString(),
                sec = this.state.seconds, min = this.state.minutes
            if( Number(this.state.miliseconds) == 60 ) {
                sec = (Number(this.state.seconds) + 1).toString();
                num = '00';
            }
            if( Number(this.state.seconds) == 60 ) {
                min = (Number(this.state.minutes) + 1).toString();
                sec = '00'
            }
            self.setState({
                minutes: min.length == 1 ? '0'+min : min,
                seconds: sec.length == 1 ? '0'+sec : sec,
                miliseconds: num.length == 1 ? '0'+num : num
            });
        }, 0);
        this.setState({timer});
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

    onButtonStop() {
        clearInterval(this.state.timer);
        this.setState({startDisabled: false, stopDisabled: true});
    }

    getCurrentDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        return today
    }

    getCurrentTime = () => {
        var today = new Date();
        return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    }

    endMeeting = () => {
        dateEvent = {
            name: this.state.meetingName,
            date: this.getCurrentDate(),
            time: this.getCurrentTime(),
            type: 'meeting',
            duration: this.state.minutes + ':' + this.state.seconds,
            notes: this.state.meetingNotes,
            id: this.generateClassID(5),
            attendance: new Array()
        } 
        firebase.firestore().collection('chapters').doc(this.state.id).update({
            calendar: firebase.firestore.FieldValue.arrayUnion(dateEvent)
        })
        this.props.navigation.goBack()
    }

    render() {
        return (
            <DismissKeyboard>
                <View>
                    <Text style={{fontSize: 40, fontWeight: "bold", textAlign: "center"}}>Meeting Screen</Text>                
                    <Text style={{fontSize: 30, textAlign: "center", margin: 30}}>{this.state.minutes}:{this.state.seconds}</Text>
                    <View style={styles.form}>
                        <View style={{marginTop: 32}}>
                            <Text >Meeting Name</Text>
                            <TextInput 
                                style={styles.input}
                                autoCapitalize="none" 
                                onChangeText={name => this.setState({ meetingName: name })}
                                value={this.state.meetingName}
                                ></TextInput>
                        </View>

                        <View style={{marginTop: 32}}>
                            <Text style={{marginBottom: 20}}>Meeting Notes</Text>
                            <TextInput
                                multiline={true}
                                textAlignVertical='top'
                                style={{height: 250, borderColor: 'gray', borderWidth: 1}}
                                onChangeText={(text) => this.setState({meetingNotes: text})}
                                value={this.state.text}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => this.endMeeting()}>
                        <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>End Meeting</Text>
                    </TouchableOpacity>
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
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignContent: "center",
        justifyContent: "center"
    }
});

export default MeetingScreen