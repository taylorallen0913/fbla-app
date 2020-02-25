import React from 'react'
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';

class OfficerChapterCalendarScreen extends React.Component {
    state = {
      id: "",
      items: {}
    }

    componentDidMount() {
      const { params } = this.props.navigation.state;
      const id = params ? params.id : null;
      this.setState({id: id})
    }

    render() {
        return (
            <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate("AddEvent", {
                id: this.state.id
            })}>
            <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>Add Event</Text>
          </TouchableOpacity>
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