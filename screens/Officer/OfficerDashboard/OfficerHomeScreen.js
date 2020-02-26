import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native'
import * as firebase from 'firebase';

class OfficerHomeScreen extends React.Component {

  state = {
    isLoaded: false,
    chapters: [],
    isFetching: false
  }

  componentDidMount() {
    this.getUserData()
  }

  onRefresh = () => {
    this.setState({ chapters: [] })
    this.setState({ isFetching: true }, () => { this.getUserData() });
  }

  getUserData = () => {
    var db = firebase.firestore()
    const { uid } = firebase.auth().currentUser; 
    db.collection('chapters').get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var data = doc.data()
          if(data.officers.includes(uid)) {
            var stateData = this.state.chapters
            stateData.push(data)
            this.setState({ chapters: stateData }, () => this.setState({ isLoaded: true }))
          }
        })
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });    
    this.finishFetching()
  }

  finishFetching = () => {
    this.setState({
      isLoaded: true,
      isFetching: false
    })
  }

  render() {
    const { isLoaded, chapters } = this.state
      return (
        <View style={styles.container}>
            {
            isLoaded 
            ? 
              <FlatList 
                data={chapters}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.chapterButton} onPress={() => this.props.navigation.navigate("OfficerChapter", {
                    name: item.name,
                    description: item.description,
                    id: item.id,
                    school: item.school
                  })}>
                      <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>{item.name}</Text>
                  </TouchableOpacity>
                )}
                onRefresh={() => this.onRefresh()}
                refreshing={this.state.isFetching}
                />
            : null
            }
          <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate("AddChapter")}>
              <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>Create A Chapter</Text>
          </TouchableOpacity>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    chapterButton: {
      marginHorizontal: 30,
      backgroundColor: "#000080",
      borderRadius: 4,
      height: 52,
      alignContent: "center",
      justifyContent: "center",
      marginTop: 30
    },
    addButton: {
      marginHorizontal: 30,
      backgroundColor: "#DAA520",
      borderRadius: 4,
      height: 52,
      alignContent: "center",
      justifyContent: "center",
      margin: 40
    }
  });  

export default OfficerHomeScreen