import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { Block, Text, Button } from "galio-framework";
import * as firebase from "firebase";
import { ScrollView } from "react-native-gesture-handler";

class MeetingInfo extends React.Component {
  state = {
    meetingId: "",
    isLoaded: false,
    attendance: [],
    attendanceLoaded: false,
    size: 0,
    sizeLoaded: false,
    meetingNotes: new String(),
    meetingNotesLoaded: false,
    ids: [],
    names: [],
    namesLoading: false,
    timeStarted: ""
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const id = params.id;
    const meetingId = params.meetingId;
    this.setState({ meetingId: meetingId });
    this.setState({ id: id }, () => {
      this.getAttendance();
      this.getPercentAttended();
      this.loadMeetingNotes();
    });
  }

  deleteEvent = () => {
    this.props.navigation.navigate("OfficerHome");
    firebase
      .firestore()
      .collection("chapters")
      .doc(this.state.id)
      .get()
      .then(doc => {
        let localCalendarData = doc.data().calendar;
        for (let i = 0; i < localCalendarData.length; i++) {
          if (localCalendarData[i].id == this.state.meetingId) {
            localCalendarData.splice(i, 1);
          }
        }
        firebase
          .firestore()
          .collection("chapters")
          .doc(this.state.id)
          .update({
            calendar: localCalendarData
          });
      });
  };

  getAttendance = () => {
    var db = firebase.firestore();
    db.collection("chapters")
      .doc(this.state.id)
      .get()
      .then(document => {
        let attendanceArr = document.data().calendar;
        attendanceArr.forEach(elem => {
          if ((elem.id = this.state.meetingId)) {
            this.setState({ attendance: elem.attendance }, () =>
              this.setState({ attendanceLoaded: true })
            );
          }
        });
      });
  };

  getPercentAttended = () => {
    let size = 0;
    firebase
      .firestore()
      .collection("chapters")
      .doc(this.state.id)
      .get()
      .then(doc => {
        let data = doc.data();
        size = data.members.length;
        this.setState({ ids: data.members });
        this.setState({ size: size }, () =>
          this.setState({ sizeLoaded: true })
        );
      });
  };

  loadMeetingNotes = () => {
    var db = firebase.firestore();
    db.collection("chapters")
      .doc(this.state.id)
      .get()
      .then(document => {
        let calendarData = document.data().calendar;
        calendarData.forEach(elem => {
          if ((elem.id = this.state.meetingId)) {
            this.setState({ meetingNotes: elem.notes }, () =>
              this.setState({ meetingNotesLoaded: true })
            );
          }
        });
      });
  };

  render() {
    const {
      attendance,
      sizeLoaded,
      size,
      meetingNotesLoaded,
      attendanceLoaded
    } = this.state;

    const mapItems = this.state.attendance.map((item, i) => (
      <Text style={{ fontSize: 20, margin: 10, textAlign: "center" }} key={i}>
        {item}
      </Text>
    ));

    return (
      <Block>
        <Text style={styles.header}>Meeting Analytics</Text>
        <Text style={{ fontSize: 15, margin: 10 }}>
          {sizeLoaded && attendanceLoaded ? (
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              Percent attendance:
              <Text style={{ color: "#696969" }}>
                {" "}
                {(attendance.length / size) * 100 + "%"}
              </Text>
            </Text>
          ) : null}
        </Text>
        {meetingNotesLoaded ? (
          <>
            <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 20 }}>
              Meeting Notes:
            </Text>
            <TextInput
              multiline={true}
              textAlignVertical="top"
              margin={10}
              style={{ height: 100, borderColor: "gray", borderWidth: 1 }}
              editable={false}
            >
              {this.state.meetingNotes}
            </TextInput>
          </>
        ) : null}
        <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 20 }}>
          Members Who Attended Meeting:
        </Text>
        <ScrollView style={{ height: "20%" }}>{mapItems}</ScrollView>
        <Block center style={{ marginTop: "5%" }}>
          <Button color="#000080" onPress={() => this.deleteEvent()}>
            Delete Event
          </Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
  },
  button: {
    marginTop: 40,
    marginHorizontal: 30,
    backgroundColor: "#000080",
    borderRadius: 4,
    height: 52,
    alignContent: "center",
    justifyContent: "center"
  }
});

export default MeetingInfo;
