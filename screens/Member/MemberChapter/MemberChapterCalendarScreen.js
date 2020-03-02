import React from "react";
import {
  Alert,
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Agenda } from "react-native-calendars";
import * as firebase from "firebase";
import { Block, Button } from "galio-framework";

const { height, width } = Dimensions.get("screen");

class MemberChapterCalendarScreen extends React.Component {
  state = {
    id: "",
    items: {}
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    this.setState({ id: id }, () => {
      this.renderEventsOnCalendar();
    });
  }

  renderEventsOnCalendar = () => {
    var eventsDb = firebase
      .firestore()
      .collection("chapters")
      .doc(this.state.id);
    eventsDb.get().then(document => {
      let data = document.data().calendar;
      this.pushEventsToState(data);
    });
  };

  convertTime = time => {
    let amOrPm = " AM";
    time = time.substring(0, time.length - 3);
    time = time.split(":");
    let hour = time[0];
    if (hour > 12) {
      hour = hour - 12;
      time[0] = hour;
      amOrPm = " PM";
    }
    return time[0] + ":" + time[1] + amOrPm;
  };

  pushEventsToState = data => {
    this.setState({ items: new Object() });
    let itemsState = {};

    data.forEach(doc => {
      // If event is a meeting
      if (doc.duration != null) {
        let eventMap = {
          name:
            "MEETING: " +
            doc.name +
            "\n" +
            "Duration: " +
            doc.duration +
            "\nID: " +
            doc.id
        };
        // If date is already in object
        if (itemsState.hasOwnProperty(doc.date)) {
          itemsState[doc.date].push(eventMap);
        } else itemsState[doc.date] = [eventMap];
      }

      // If event is not a meeting
      else {
        let eventMap = {
          name: doc.name + "\n\n" + this.convertTime(doc.time),
          id: doc.id,
          date: doc.date
        };
        if (itemsState.hasOwnProperty(doc.date)) {
          itemsState[doc.date].push({
            name: doc.name + "\n\n" + this.convertTime(doc.time),
            id: doc.id,
            date: doc.date
          });
          itemsState[doc.date].push(eventMap);
        } else itemsState[doc.date] = [eventMap];
      }
    });
    this.setState({ items: itemsState });
  };

  renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.item, { height: item.height }]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  render() {
    return (
      <View>
        <View style={{ height: height * 0.7 }}>
          <Agenda
            items={this.state.items}
            selected={new Date()}
            renderItem={this.renderItem.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  }
});

export default MemberChapterCalendarScreen;
