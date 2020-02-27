import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableHighlightBase, Button } from 'react-native'
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';

class MeetingInfo extends React.Component {
    
    state = {
        meetingId: "",
        isLoaded: false,
        attendance: [],
        attendanceLoaded: false,
        size: 0,
        sizeLoaded: false,
        meetingNotes: new String,
        meetingNotesLoaded: false,
        ids: [],
        names: [],
        namesLoading: false
    }

    componentDidMount() {
        const { params } = this.props.navigation.state;
        const id = params.time.id
        this.setState({meetingId: id})
        this.setState({id: params.id}, () => {
            this.getAttendance();
            this.getPercentAttended();
            this.loadMeetingNotes();
        })
    }

    getAttendance = () => {
        var db = firebase.firestore()
        db.collection('chapters').doc(this.state.id).get()
            .then(document => {
                let attendanceArr = document.data().calendar
                attendanceArr.forEach(elem => {
                    if(elem.id = this.state.meetingId) {
                        this.setState({attendance: elem.attendance}, () => this.setState({ attendanceLoaded: true}))
                    }
                }) 
            })
    }

    getPercentAttended = () => {
        let size = 0
        firebase.firestore().collection('chapters').doc(this.state.id).get()
            .then((doc) => {
                let data = doc.data()
                size = data.members.length
                this.setState({ids: data.members })
                this.setState({size: size}, () => this.setState({sizeLoaded: true}))
            })
    }

    loadMeetingNotes = () => {
        var db = firebase.firestore()
        db.collection('chapters').doc(this.state.id).get()
            .then(document => {
                let calendarData = document.data().calendar
                calendarData.forEach(elem => {
                    if(elem.id = this.state.meetingId) {
                        this.setState({meetingNotes: elem.notes}, () => this.setState({ meetingNotesLoaded: true}))
                    }
                })
            })
    }

    render() {
        const { attendance, sizeLoaded, size, meetingNotesLoaded, attendanceLoaded } = this.state
        
        const mapItems = this.state.attendance.map((item, i) => 
        <Text style={{fontSize: 20, margin: 10, textAlign: "center"}} key={i}>
            {(item)}
        </Text>
        )

        return (
            <View>
                <Text style={styles.header}>Meeting Analytics</Text>
                <Text style={{fontSize: 15, margin:10}}>
                    {
                        sizeLoaded && attendanceLoaded ?
                        <Text>Percent attendance: {attendance.length / size * 100 + '%'}</Text> : null
                    }
                </Text>
                    {
                        meetingNotesLoaded ?
                        <Text style={{fontSize: 15, margin: 10}}>Meeting Notes:{'\n' + this.state.meetingNotes}</Text> : null
                    }
                <ScrollView>{mapItems}</ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold",
        margin: 20
    },
    body: {
        margin: 20,
        fontSize: 15,
        fontWeight: "normal"
    }
});

export default MeetingInfo