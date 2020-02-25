import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button } from 'react-native'
import * as firebase from 'firebase';
import DateTimePicker from '@react-native-community/datetimepicker';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

AddEvent = (props) => {
    const [id, setId] = useState();
    const [ eventName, setEventName ] = useState();
    const [ eventDescription, setEventDescription ] = useState();
    const [ date, setDate ] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    useEffect(() => {
        setId(props.navigation.state.params.id)
    })

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;

        setDate(currentDate);
        setShow(Platform.OS === 'ios' ? true : false);
        };

        const addEvent = () => {
            dateEvent = {
                name: eventName,
                description: eventDescription,
                date: date.toJSON().toString().substring(0,10)
            } 
            firebase.firestore().collection('chapters').doc(id).update({
                calendar: firebase.firestore.FieldValue.arrayUnion(dateEvent)
            }) 
        }
        

        return (
            <DismissKeyboard>
                <View style={styles.form}>
                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputText}>Event Name</Text>
                        <TextInput 
                            style={styles.input}
                            autoCapitalize="none" 
                            onChangeText={eventName => setEventName(eventName)}
                            value={eventName}
                        ></TextInput>
                    </View>
                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputText}>Event Description</Text>
                        <TextInput 
                            style={styles.input}
                            autoCapitalize="none" 
                            onChangeText={eventDescription => setEventDescription(eventDescription)}
                            value={eventDescription}
                        ></TextInput>
                    </View>
                    <View style={{marginTop: 32}}>
                        <DateTimePicker
                            testID="dateTimePicker"
                            timeZoneOffsetInMinutes={0}
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={addEvent}>
                        <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>Add Event</Text>
                    </TouchableOpacity>
                </View>
            </DismissKeyboard>
        )
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
        marginTop: 200,
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignContent: "center",
        justifyContent: "center"
    }
});

export default AddEvent