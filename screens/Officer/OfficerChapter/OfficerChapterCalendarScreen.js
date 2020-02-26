import React from 'react'
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import { Agenda } from 'react-native-calendars';

class OfficerChapterCalendarScreen extends React.Component {
    state = {
      id: "",
      items: {}
    }

    componentDidMount() {
      const { params } = this.props.navigation.state;
      const id = params ? params.id : null;
      this.setState({id: id}, () => { this.renderEventsOnCalendar() })
    }

    renderEventsOnCalendar = () => {
      var eventsDb = firebase.firestore().collection('chapters').doc(this.state.id)
      eventsDb.get()
        .then((document) => {
          let data = document.data().calendar
          this.pushEventsToState(data)
        })
    }

    convertTime = (time) => {
      let amOrPm = ' AM'
      time = time.substring(0, time.length-3)
      time = time.split(':')
      let hour = time[0]
      if(hour > 12) {
        hour = hour - 12;
        time[0] = hour
        amOrPm = ' PM'
      }
      return time[0] + ":" + time[1] + amOrPm
    }

    pushEventsToState = (data) => {
      this.setState({ items: new Object })
      let itemsState = {}
      data.forEach(doc => {
        if(doc.duration != null) {
          let eventMap = [{name: "\n\nMEETING: " + doc.name + "\n" + "Duration: " + doc.duration, id: doc.id}]
          itemsState[doc.date] = eventMap
        }
        else {
          let eventMap = [{name: "\n\n" + doc.name + "\n\n" + this.convertTime(doc.time), id: doc.id}]
          itemsState[doc.date] = eventMap
        }
      })
      this.setState({items: itemsState})
    }

    renderItem(item) {
      return (
        <TouchableOpacity 
          style={[styles.item, {height: item.height}]} 
          onPress={() => this.props.navigation.navigate("MeetingInfo", {
            time: item, id: this.state.id
          })}
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
            <View style={{height: 600}}>
              <Agenda
                items={this.state.items}
                selected={'2020-02-25'}
                renderItem={this.renderItem.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
              />
            </View>
            <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate("AddEvent", {
                id: this.state.id
            })}>
            <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>Add Event</Text>
          </TouchableOpacity>
        </View>
        );
      }
    }
     


    const styles = StyleSheet.create({
        container: {
          flex: 1
        },
        chapterButton: {
          marginHorizontal: 30,
          backgroundColor: "#6699ff",
          borderRadius: 4,
          height: 52,
          alignContent: "center",
          justifyContent: "center",
          marginTop: 30
        },
        addButton: {
          marginHorizontal: 30,
          backgroundColor: "#E9446A",
          borderRadius: 4,
          height: 52,
          alignContent: "center",
          justifyContent: "center",
          margin: 40
        }
      });

export default OfficerChapterCalendarScreen