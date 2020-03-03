import React from "react";
import { StyleSheet, Dimensions, FlatList } from "react-native";
import { Block, Text, Button, Accordion } from "galio-framework";
import * as firebase from "firebase";
import { getOrientationAsync } from "expo/build/ScreenOrientation/ScreenOrientation";

const { height, width } = Dimensions.get("screen");

class OfficerEventInfo extends React.Component {
  state = {
    chapterId: null,
    eventId: null,
    type: null,
    typeLoaded: false,
    data: {},
    dataLoaded: false,
    signups: [],
    signupsLoaded: false
  };

  getSignups = () => {
    firebase
      .firestore()
      .collection("chapters")
      .doc(this.state.chapterId)
      .get()
      .then(doc => {
        let localCalendarData = doc.data().calendar;
        localCalendarData.forEach(item => {
          if (item.id == this.state.eventId) {
            this.setState({ signups: item.signups }, () => {
              this.setState({ signupsLoaded: true });
              console.log(this.state.signups);
            });
          }
        });
      });
  };

  deleteEvent = () => {
    this.props.navigation.navigate('OfficerHome');
    firebase
      .firestore()
      .collection("chapters")
      .doc(this.state.chapterId)
      .get()
      .then(doc => {
        let localCalendarData = doc.data().calendar;
        for (let i = 0; i < localCalendarData.length; i++) {
          if (localCalendarData[i].id == this.state.eventId) {
            localCalendarData.splice(i, 1)
          }
        }
        firebase.firestore().collection('chapters').doc(this.state.chapterId).update({
          calendar: localCalendarData
        })
      });
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const type = params ? params.type : null;
    const id = params ? params.id : null;
    const eventId = params ? params.eventId : null;
    this.setState({ type: type, chapterId: id, eventId: eventId }, () => {
      this.setState({ typeLoaded: true });
      this.getSignups();
    });
  }

  render() {
    const data = [
      { title: "User 1", content: <Text>Hello</Text> },
      { title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
      { title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
    ];
    return (
      <Block>
        <Text style={{ textAlign: "center", fontSize: 40, marginTop: "5%" }}>
          Event Signups
        </Text>
        <Block center style={{ height: 400, marginTop: "5%" }}>
          <Accordion dataArray={data} />
        </Block>
        <Block center style={{ marginTop: "5%" }}>
          <Button color="#000080" onPress={() => this.deleteEvent()}>
            Delete Event
          </Button>
        </Block>
      </Block>
    );
  }
}

export default OfficerEventInfo;
