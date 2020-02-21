import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase';

class OfficerHomeScreen extends React.Component {

  state = {
    isLoading: true,
    chapters: []
  }

  componentDidMount() {
    var db = firebase.firestore()
    const { email, displayName, uid } = firebase.auth().currentUser;
    db.collection('users').doc(uid).get()
      .then((document) => {
        this.setState({ chapters: document.data().chapters }, () => this.setState({isLoading: false}))
      })
  }

  mapChapters = () => {
    console.log(this.state.isLoading)
    var chapters = this.state.chapters
    chapters.map((chapter) => {
      return(
          <Text>{chapter.name}</Text>
      )
    })
  }

  renderBoxes = () => {
    for(var boxes = 0; boxes < 4; boxes++) {
        <Text>Hello world</Text>
    }
  }

  render() {
      return (
        <View style={styles.container}>

          <TouchableOpacity style={styles.addButton} onPress={() => this.mapChapters()}>
              <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>test</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate("AddChapter")}>
              <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>+</Text>
          </TouchableOpacity>
          {this.renderBoxes()}
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    addButton: {
      marginHorizontal: 30,
      backgroundColor: "#E9446A",
      borderRadius: 4,
      height: 52,
      alignContent: "center",
      justifyContent: "center",
      marginTop: 30
  }
  });  

export default OfficerHomeScreen