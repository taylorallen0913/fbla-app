import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Block, Text, Button } from "galio-framework";
import * as firebase from "firebase";

const { height, width } = Dimensions.get("screen");

class OfficerManageChapterScreen extends React.Component {
  state = {
    id: null,
    idLoaded: false,
    nameData: [],
    nameDataLoaded: false,
    isFetching: false
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    this.setState({ id: id }, () => {
      this.getUsers();
    });
  }

  onRefresh = () => {
    this.setState({ nameData: [] });
    this.setState({ isFetching: true }, () => {
      this.getUsers();
    });
  };

  finishFetching = () => {
    this.setState({
      isLoaded: true,
      isFetching: false
    });
  };

  getUsers = () => {
    let memberIdList = [];
    firebase
      .firestore()
      .collection("chapters")
      .doc(this.state.id)
      .get()
      .then(doc => {
        memberIdList = doc.data().members;
        this.getNamesFromIds(memberIdList);
      });
  };

  getNamesFromIds = list => {
    let nameList = [];
    firebase
      .firestore()
      .collection("users")
      .get()
      .then(query => {
        query.forEach(doc => {
          list.forEach(id => {
            if (doc.id == id) {
              nameList.push({ id: id, name: doc.data().name });
            }
          });
        });
        this.renderList(nameList);
      });
  };

  renderList = nameList => {
    let localState = [];
    nameList.forEach(item => {
      localState.push({ name: item.name, id: item.id });
    });
    this.setState({ nameData: localState }, () => {
      this.setState({ nameDataLoaded: true, isLoaded: true });
    });
    this.finishFetching();
  };

  render() {
    return (
      <Block style={styles.container}>
        <Block center>
          <Text style={{ fontSize: 50, fontWeight: "bold", marginTop: '5%' }}>Members</Text>
        </Block>
        <Block>
        {this.state.isLoaded ? (
          <FlatList
          style={{height: '65%'}}
            data={this.state.nameData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.chapterButton}
                onPress={() => {
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontWeight: "500",
                    textAlign: "center"
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
          />
        ) : null}
        </Block>
        <Block center>
            <Button color='info' shadowless onPress={() => {this.props.navigation.navigate('OfficerListManagerScreen', {
                id: this.state.id
            })}}>Officer List</Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  chapterButton: {
    marginHorizontal: 30,
    backgroundColor: "#666699",
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

export default OfficerManageChapterScreen;
