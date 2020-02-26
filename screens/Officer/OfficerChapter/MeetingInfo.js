import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import * as firebase from 'firebase';

class MeetingInfo extends React.Component {
    
    state = {
        meetingId: "",
        isLoaded: false,
        attendance: [],
        isFetching: false,
        size: new Number,
        sizeLoaded: false
    }

    componentDidMount() {
        const { params } = this.props.navigation.state;
        const id = params.time.id
        this.setState({meetingId: id})
        this.setState({id: params.id}, () => { this.getAttendance() })
    }

    onRefresh = () => {
        this.setState({ chapters: [] })
        this.setState({ isFetching: true }, () => { this.getAttendance() });
    }

    getAttendance = () => {
        var db = firebase.firestore()
        db.collection('chapters').doc(this.state.id).get()
            .then(document => {
                let calendarData = document.data().calendar
                calendarData.forEach(elem => {
                    if(elem.id = this.state.meetingId) {
                        this.setState({attendance: elem.attendance}, () => this.setState({ isLoaded: true, isFetching: false }))
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
                this.setState({size: size}, () => this.setState({sizeLoaded: true, isFetching: false}))
            })
    }


    render() {
        const { isLoaded, attendance, sizeLoaded, size } = this.state
        const mapItems = attendance.map((item) => 
            <Text style={{fontSize: 20, margin: 20}} key={item.toString()}>
                {item}
            </Text>
        )

        return (
            <View>
                <Text style={styles.header}>Meeting Analytics</Text>
                <View>{mapItems}</View>
                <Text>
                    {
                        sizeLoaded ?
                        <Text>Percent of Members Who Attended the Meeting: {size / attendance.length * 100 + '%'}</Text> : null
                    }
                    {
                        isLoaded ?
                        this.getPercentAttended() : null
                    }
                </Text>
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