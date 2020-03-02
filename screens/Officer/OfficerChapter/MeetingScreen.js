import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  Platform
} from "react-native";
import * as firebase from "firebase";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { Block, Button } from "galio-framework";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class MeetingScreen extends React.Component {
  state = {
    timer: null,
    seconds: "00",
    miliseconds: "00",
    minutes: "00",
    location: {},
    id: "",
    meetingName: "",
    meetingNotes: "",
    meetingTime: "",
    activeMeeting: {},
    meetingStartTime: ""
  };

  constructor(props) {
    super(props);
    this.onButtonStop = this.onButtonStop.bind(this);
    this.start = this.start.bind(this);
  }

  componentDidMount() {
    this.setState({ meetingStartTime: this.getCurrentTime() });
    this._getLocationAsync();
    this.start();
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    this.setState({ id: id });
    setTimeout(() => {
      this.startActiveMeeting();
    }, 2000);
  }

  componentWillUnmount() {
    this.endActiveMeeting();
    clearInterval(this.state.timer);
  }

  getRemaining = time => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins, secs };
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }
    if (Platform.OS === "ios") {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
      console.log(location);
    } else if (Platform.OS === "android") {
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High
      });
      this.setState({ location });
      console.log(location);
    }
  };

  startActiveMeeting = () => {
    let dateEvent = {
      date: this.getCurrentDate(),
      time: this.getCurrentTime(),
      type: "meeting",
      id: this.generateClassID(5),
      attendance: new Array(),
      location: [
        this.state.location.coords.latitude,
        this.state.location.coords.longitude
      ]
    };
    this.setState({ activeMeeting: dateEvent });
    var db = firebase.firestore();
    db.collection("chapters")
      .doc(this.state.id)
      .set({ activeMeeting: dateEvent }, { merge: true });
  };

  endActiveMeeting = () => {
    var db = firebase.firestore();
    db.collection("chapters")
      .doc(this.state.id)
      .set({ activeMeeting: {} }, { merge: true });
  };

  start() {
    var self = this;
    let timer = setInterval(() => {
      var num = (Number(this.state.miliseconds) + 1).toString(),
        sec = this.state.seconds,
        min = this.state.minutes;
      if (Number(this.state.miliseconds) == 60) {
        sec = (Number(this.state.seconds) + 1).toString();
        num = "00";
      }
      if (Number(this.state.seconds) == 60) {
        min = (Number(this.state.minutes) + 1).toString();
        sec = "00";
      }
      self.setState({
        minutes: min.length == 1 ? "0" + min : min,
        seconds: sec.length == 1 ? "0" + sec : sec,
        miliseconds: num.length == 1 ? "0" + num : num
      });
    }, 0);
    this.setState({ timer });
  }

  onButtonStop() {
    clearInterval(this.state.timer);
    this.setState({ startDisabled: false, stopDisabled: true });
  }

  generateClassID = length => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  getCurrentDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    return today;
  };

  getCurrentTime = () => {
    var today = new Date();
    return (
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    );
  };

  endMeeting = () => {
    firebase
      .firestore()
      .collection("chapters")
      .doc(this.state.id)
      .get()
      .then(doc => {
        let activeMeetingData = doc.data().activeMeeting;
        let endMeetingData = {
          duration: this.state.minutes + ":" + this.state.seconds,
          name: this.state.meetingName,
          notes: this.state.meetingNotes,
          type: 'meeting'
        };
        firebase
          .firestore()
          .collection("chapters")
          .doc(this.state.id)
          .update({
            calendar: firebase.firestore.FieldValue.arrayUnion({
              ...activeMeetingData,
              ...endMeetingData
            })
          });
      });
    this.props.navigation.navigate('OfficerHome');
  };

  getTime = () => {
    var systemDate = new Date();
    var hours = systemDate.getHours();
    var minutes = systemDate.getMinutes();
    var strampm;
    if (hours >= 12) {
      strampm = "PM";
    } else {
      strampm = "AM";
    }
    hours = hours % 12;
    if (hours == 0) {
      hours = 12;
    }
    let _hours = this.checkTimeAddZero(hours);
    let _minutes = this.checkTimeAddZero(minutes);
    return _hours + ":" + _minutes + " " + strampm;
  };

  checkTimeAddZero = i => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  generateURL = () => {
    let startOfUrl = "https://twitter.com/intent/tweet?text=";
    let text =
      "We just started a meeting at " +
      this.getTime().toString() +
      "!\nCome join us!\n\nThis tweet was served by @fblaoverseer";
    return startOfUrl + text;
  };

  render() {
    return (
      <DismissKeyboard>
        <View>
          <Text
            style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}
          >
            Meeting Screen
          </Text>
          <Text style={{ fontSize: 25, textAlign: "center", color: "red" }}>
            Meeting ID: {this.state.activeMeeting.id}
          </Text>
          <Text style={{ fontSize: 20, color: "red", textAlign: "center" }}>
            {this.state.minutes + ":" + this.state.seconds}
          </Text>
          <View style={styles.form}>
            <View style={{ marginTop: 32 }}>
              <Text>Meeting Name</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={name => this.setState({ meetingName: name })}
                value={this.state.meetingName}
              ></TextInput>
            </View>
            <View style={{ marginTop: 32 }}>
              <Text style={{ marginBottom: 10 }}>Meeting Notes</Text>
              <TextInput
                multiline={true}
                textAlignVertical="top"
                style={{ height: 200, borderColor: "gray", borderWidth: 1 }}
                onChangeText={text => this.setState({ meetingNotes: text })}
                value={this.state.text}
              />
            </View>
          </View>
          <Block center>
            <Block style={{marginTop: '5%'}}>
              <Button
                color="#1DA1F2"
                onPress={() => Linking.openURL(this.generateURL())}
              >
                Share to Twitter
              </Button>
            </Block>
            <Block style={{marginTop: '8%'}}>
              <Button color="#000080" onPress={() => this.endMeeting()}>
                End Meeting
              </Button>
            </Block>
          </Block>
        </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D"
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#000080",
    borderRadius: 4,
    height: 52,
    alignContent: "center",
    justifyContent: "center"
  }
});

export default MeetingScreen;
