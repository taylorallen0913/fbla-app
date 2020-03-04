import React from "react";
import { StyleSheet, Dimensions, FlatList } from "react-native";
import { Block, Text, Button, Accordion } from "galio-framework";
import * as firebase from "firebase";

const { height, width } = Dimensions.get("screen");

const SignupForm = data => {
  return (
    <Block>
      <Text>Grade: {data.grade}</Text>
      <Text>First Event Topic: {data.firstItemTopic}</Text>
      <Text>First Event Type: {data.firstItemType}</Text>
      <Text>Second Event Topic: {data.secondItemTopic}</Text>
      <Text>Second Event Type: {data.secondItemType}</Text>
      <Text>Alternate Event Topic: {data.alternateItemTopic}</Text>
      <Text>Alternate Event Type: {data.alternateItemType}</Text>
    </Block>
  );
};

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
    let localSignups = [];
    firebase
      .firestore()
      .collection("chapters")
      .doc(this.state.chapterId)
      .get()
      .then(doc => {
        let localCalendarData = doc.data().calendar;
        localCalendarData.forEach(item => {
          if (item.id == this.state.eventId) {
            item.signups.forEach(innerItem => {
              localSignups.push({
                title: innerItem.name,
                content: (
                  <Text>
                    Grade: {innerItem.grade + "\n"}First Event Topic:{" "}
                    {innerItem.firstEventTopic}
                    {"\n"}First Event Type: {innerItem.firstEventType}
                    {"\n"}Second Event Topic: {innerItem.secondEventTopic}
                    {"\n"}Second Event Type: {innerItem.secondEventType}
                    {"\n"}Alternate Event Topic: {innerItem.alternateEventTopic}
                    {"\n"}Alternate Event Type: {innerItem.alternateEventType}
                  </Text>
                )
              });
            });
          }
        });
        this.setState({ signups: localSignups }, () =>
          this.setState({ signupsLoaded: true })
        );
      });
  };

  deleteEvent = () => {
    this.props.navigation.navigate("OfficerHome");
    firebase
      .firestore()
      .collection("chapters")
      .doc(this.state.chapterId)
      .get()
      .then(doc => {
        let localCalendarData = doc.data().calendar;
        for (let i = 0; i < localCalendarData.length; i++) {
          if (localCalendarData[i].id == this.state.eventId) {
            localCalendarData.splice(i, 1);
          }
        }
        firebase
          .firestore()
          .collection("chapters")
          .doc(this.state.chapterId)
          .update({
            calendar: localCalendarData
          });
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
    return (
      <Block>
        <Text style={{ textAlign: "center", fontSize: 40, marginTop: "5%" }}>
          Event Signups
        </Text>
        {this.state.signupsLoaded ? (
          <Block center style={{ height: 400, marginTop: "5%" }}>
            <Accordion dataArray={this.state.signups} />
          </Block>
        ) : null}
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
