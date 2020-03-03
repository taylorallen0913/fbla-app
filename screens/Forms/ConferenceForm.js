import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Alert
} from "react-native";
import * as firebase from "firebase";
import { Block, Text, theme, Input, Button } from "galio-framework";
import RadioForm from "react-native-simple-radio-button";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class ConferenceForm extends React.Component {
  state = {
    uid: null,
    id: null,
    eventId: null,

    name: null,
    email: null,
    phoneNumber: null,
    grade: null,
    firstEventTopic: null,
    firstEventType: null,
    secondEventTopic: null,
    secondEventType: null,
    alternateEventTopic: null,
    alternateEventType: null
  };

  componentDidMount() {
    const { uid } = firebase.auth().currentUser;
    this.setState({ uid });
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    const eventId = params ? params.eventId : null;
    this.setState({ id, eventId });
  }

  submitForm = () => {
    if (
      this.state.name != null &&
      this.state.grade != null &&
      this.state.firstEventTopic != null &&
      this.state.firstEventType != null &&
      this.state.secondEventTopic != null &&
      this.state.secondEventType != null &&
      this.state.alternateEventTopic != null &&
      this.state.alternateEventType != null
    ) {
      this.props.navigation.goBack();
      let userForm = {
        uid: this.state.uid,
        name: this.state.name,
        grade: this.state.grade,
        firstEventTopic: this.state.firstEventTopic,
        firstEventType: this.state.firstEventType,
        secondEventTopic: this.state.secondEventTopic,
        secondEventType: this.state.secondEventType,
        alternateEventTopic: this.state.alternateEventTopic,
        alternateEventType: this.state.alternateEventType
      };
      firebase
        .firestore()
        .collection("chapters")
        .doc(this.state.id)
        .get()
        .then(doc => {
          let calendarData = doc.data().calendar;
          // For every event in calendar
          for (let i = 0; i < calendarData.length; i++) {
            // If event is found
            if (calendarData[i].id == this.state.eventId) {
              // Switch uid with item later
              calendarData[i].signups.push(userForm);
            }
          }
          firebase
            .firestore()
            .collection("chapters")
            .doc(this.state.id)
            .update({
              calendar: calendarData
            });
        });
    } else Alert.alert("Please fill out all fields in form.")
  };

  render() {
    return (
      <ScrollView>
        <Block flex style={styles.container}>
          <Block style={{ marginTop: 10 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 40,
                fontWeight: "bold"
              }}
            >
              Conference Sign Up Form
            </Text>
          </Block>
          <Block style={styles.form}>
            <Block>
              <Input
                label="Full Name (First, Middle, Last)"
                onChangeText={name => {
                  this.setState({ name });
                }}
                value={this.state.name}
              />
            </Block>
            <Block style={{ marginTop: "5%" }}>
              <Text style={styles.inputTitle}>Grade</Text>
              <RadioForm
                style={{ marginTop: "5%" }}
                radio_props={[
                  { label: "9", value: 9 },
                  { label: "10", value: 10 },
                  { label: "11", value: 11 },
                  { label: "12", value: 12 }
                ]}
                initial={0}
                onPress={value => {
                  this.setState({ grade: value });
                }}
              />
            </Block>
            <Block style={{ marginTop: "5%" }}>
              <Input
                label="First Event Topic Request (e.g. Economics)"
                onChangeText={firstEventTopic => {
                  this.setState({ firstEventTopic });
                }}
                value={this.state.firstEventTopic}
              />
            </Block>
            <Block style={{ marginTop: "5%" }}>
              <Text style={styles.inputTitle}>First Event Type Request</Text>
              <RadioForm
                style={{ marginTop: "5%" }}
                radio_props={[
                  {
                    label: "Production Event and Objective Test",
                    value: "Production Event and Objective Test"
                  },
                  { label: "Objective Test", value: "Objective Test" },
                  { label: "Interview", value: "Interview" },
                  { label: "Speaking", value: "Speaking" },
                  {
                    label: "Objective Test with Role Play",
                    value: "Objective Test with Role Play"
                  },
                  {
                    label: "Prejudged Project with Presentation",
                    value: "Prejudged Project with Presentation"
                  },
                  {
                    label: "Prejudged Project with Report",
                    value: "Prejudged Project with Report"
                  }
                ]}
                initial={0}
                onPress={value => {
                  this.setState({ firstEventType: value });
                }}
              />
            </Block>
            <Block style={{ marginTop: "5%" }}>
              <Input
                label="Second Event Topic Request (e.g. Economics)"
                onChangeText={secondEventTopic => {
                  this.setState({ secondEventTopic });
                }}
                value={this.state.secondEventTopic}
              />
            </Block>
            <Block style={{ marginTop: "5%" }}>
              <Text style={styles.inputTitle}>Second Event Type Request</Text>
              <RadioForm
                style={{ marginTop: "5%" }}
                radio_props={[
                  {
                    label: "Production Event and Objective Test",
                    value: "Production Event and Objective Test"
                  },
                  { label: "Objective Test", value: "Objective Test" },
                  { label: "Interview", value: "Interview" },
                  { label: "Speaking", value: "Speaking" },
                  {
                    label: "Objective Test with Role Play",
                    value: "Objective Test with Role Play"
                  },
                  {
                    label: "Prejudged Project with Presentation",
                    value: "Prejudged Project with Presentation"
                  },
                  {
                    label: "Prejudged Project with Report",
                    value: "Prejudged Project with Report"
                  }
                ]}
                initial={0}
                onPress={value => {
                  this.setState({ secondEventType: value });
                }}
              />
            </Block>
            <Block style={{ marginTop: "5%" }}>
              <Input
                label="Alternate Event Topic Request (e.g. Economics)"
                onChangeText={alternateEventTopic => {
                  this.setState({ alternateEventTopic });
                }}
                value={this.state.alternateEventTopic}
              />
            </Block>
            <Block style={{ marginTop: "5%" }}>
              <Text style={styles.inputTitle}>
                Alternate Event Type Request
              </Text>
              <RadioForm
                style={{ marginTop: "5%" }}
                radio_props={[
                  {
                    label: "Production Event and Objective Test",
                    value: "Production Event and Objective Test"
                  },
                  { label: "Objective Test", value: "Objective Test" },
                  { label: "Interview", value: "Interview" },
                  { label: "Speaking", value: "Speaking" },
                  {
                    label: "Objective Test with Role Play",
                    value: "Objective Test with Role Play"
                  },
                  {
                    label: "Prejudged Project with Presentation",
                    value: "Prejudged Project with Presentation"
                  },
                  {
                    label: "Prejudged Project with Report",
                    value: "Prejudged Project with Report"
                  }
                ]}
                initial={0}
                onPress={value => {
                  this.setState({ alternateEventType: value });
                }}
              />
            </Block>
          </Block>
          <Block center style={{ marginTop: "20%" }}>
            <Button>
              <Button onPress={this.submitForm}>SUBMIT FORM</Button>
            </Button>
          </Block>
          <Block style={{ marginTop: "25%" }} />
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
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
  form: {
    marginHorizontal: 30,
    marginTop: "10%"
  },
  inputTitle: {
    fontSize: 15
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "black"
  }
});

export default ConferenceForm;
