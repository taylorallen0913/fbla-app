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
import { Input } from "react-native-elements";

class OfficerListManager extends React.Component {
  state = {
    id: null,
    idLoaded: false,
    officerData: [],
    isFetching: false,
    officerName: null
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    this.setState({ id }, () => {
      this.getOfficers();
    });
  }

  onRefresh = () => {
    this.setState({ officerData: [] });
    this.setState({ isFetching: true }, () => {
      this.getOfficers();
    });
  };

  finishFetching = () => {
    this.setState({
      isLoaded: true,
      isFetching: false
    });
  };

  getOfficers = () => {
    let officerList = [];
    firebase
      .firestore()
      .collection("chapters")
      .doc(this.state.id)
      .get()
      .then(doc => {
        officerList = doc.data().officerList;
        this.renderList(officerList);
      });
  };

  renderList = nameList => {
    let localState = [];
    nameList.forEach(item => {
      localState.push({ name: item.name });
    });
    this.setState({ officerData: localState }, () => {
      this.setState({ isLoaded: true });
    });
    this.finishFetching();
  };

  addOfficer = () => {
    firebase
      .firestore()
      .collection("chapters")
      .doc(this.state.id)
      .update({
        officerList: firebase.firestore.FieldValue.arrayUnion({
          name: this.state.officerName
        })
      });
  };

  render() {
    return (
      <Block style={styles.container}>
        <Block center>
          <Text style={{ fontSize: 50, fontWeight: "bold", marginTop: "5%" }}>
            Officers
          </Text>
        </Block>
        <Block>
          {this.state.isLoaded ? (
            <FlatList
              style={{ height: "45%" }}
              data={this.state.officerData}
              keyExtractor={item => item.name}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.chapterButton}>
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
        <Block center style={{ marginTop: "5%" }}>
          <Input
            containerStyle={{ width: "70%" }}
            label="Officer's Full Name"
            onChangeText={officerName => {
              this.setState({ officerName });
            }}
            value={this.state.name}
          />
        </Block>
        <Block center style={{ marginTop: "5%" }}>
          <Button
            color="info"
            shadowless
            onPress={() => {
              this.addOfficer();
            }}
          >
            Add Officer
          </Button>
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

export default OfficerListManager;
