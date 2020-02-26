import React from 'react'
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Agenda } from 'react-native-calendars';
import * as firebase from 'firebase';

class MemberChapterCalendarScreen extends React.Component {
    
    state = {
      id: "",
      items: {}
    }

    componentDidMount() {
      const { params } = this.props.navigation.state;
      const id = params ? params.id : null;
      this.setState({id: id}, () => { this.renderEventsOnCalendar() })
    }

    convertTime = (time) => {
      let amOrPm = ' PM'
      let hour = parseInt(time.substring(0,1))
      if(hour > 12) {
        hour =- 12;
        amOrPm = ' AM'
      }
      return hour + time.substring(2, time.length-3) + amOrPm
    }

    renderEventsOnCalendar = () => {
      var eventsDb = firebase.firestore().collection('chapters').doc(this.state.id)
      eventsDb.get()
        .then((document) => {
          let eventMap = [{name: "\n\n" + doc.name + "\n\n" + this.convertTime(doc.time)}]
          this.pushEventsToState(data)
        })
    }

    pushEventsToState = (data) => {
      this.setState({ items: new Object })
      let itemsState = {}
      data.forEach(doc => {
        let eventMap = [{name: doc.name + "\n\n" + doc.time}]
        itemsState[doc.date] = eventMap
      })
      this.setState({items: itemsState})
    }

      renderItem(item) {
        return (
          <TouchableOpacity 
            style={[styles.item, {height: item.height}]} 
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
          <Agenda
            items={this.state.items}
            selected={Date.now()}
            renderItem={this.renderItem.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
          />
        );
      }

    }


const styles = StyleSheet.create({
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17
    },
    emptyDate: {
      height: 15,
      flex:1,
      paddingTop: 30
    }
  });

export default MemberChapterCalendarScreen