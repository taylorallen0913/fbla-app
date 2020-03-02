import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";
import * as firebase from "firebase";
import { Agenda } from "react-native-calendars";
import { Block, Button } from "galio-framework";

const { height, width } = Dimensions.get("screen");

class OfficerChapterCalendarScreen extends React.Component {
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
            doc.id,
          type: doc.type,
          id: doc.id
        };
        // If date is already in object
        if (itemsState.hasOwnProperty(doc.date)) {
          itemsState[doc.date].push(eventMap);
        } else itemsState[doc.date] = [eventMap];
      }

      // If event is not a meeting
      else {
        let eventMap = {
          name: doc.type + '\n\n' + doc.name + "\n\n" + this.convertTime(doc.time),
          id: doc.id,
          date: doc.date,
          type: doc.type
        };
        if (itemsState.hasOwnProperty(doc.date)) {
          itemsState[doc.date].push({
            name: doc.name + "\n\n" + this.convertTime(doc.time),
            id: doc.id,
            date: doc.date,
            type: doc.type
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
        onPress={() => {
          console.log(item.type)
          if (item.type == "meeting") {
            this.props.navigation.navigate("MeetingInfo", {
              time: item,
              id: this.state.id
            });
          } else if (item.type == 'event') {
            this.props.navigation.navigate("OfficerEventInfoScreen", {
              type: item.type
            });
          }
        }}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  onDayPress = day => {
    console.log(day);
  };

  render() {
    return (
      <View>
        <View style={{ height: height * 0.7 }}>
          <Agenda
            items={this.state.items}
            selected={new Date()}
            renderItem={this.renderItem.bind(this)}
            renderEmptyData={() => { 
              return (
                <View>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 50,
                      marginTop: "30%"
                    }}
                  >
                    No Events!
                  </Text>
                </View>
              );
            }}
            rowHasChanged={this.rowHasChanged.bind(this)}
          />
        </View>
        <Block center>
          <Button
            color="#000080"
            onPress={() =>
              this.props.navigation.navigate("AddEvent", {
                id: this.state.id
              })
            }
          >
            Add Event
          </Button>
        </Block>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  addButton: {
    marginHorizontal: 30,
    backgroundColor: "#000080",
    borderRadius: 4,
    height: 52,
    alignContent: "center",
    justifyContent: "center"
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  }
});

export default OfficerChapterCalendarScreen;
