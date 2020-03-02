import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button, Picker } from 'react-native'
import * as firebase from 'firebase';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

AddEvent = (props) => {
    const [id, setId] = useState();
    const [ eventName, setEventName ] = useState();
    const [ eventDescription, setEventDescription ] = useState();
    const [ eventType, setEventType ] = useState();
    const [ date, setDate ] = useState(new Date(1598051720000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    useEffect(() => {
        setId(props.navigation.state.params.id)
    })

    generateClassID = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;

        setDate(currentDate);
        setShow(Platform.OS === 'ios' ? true : false);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };
    
        const showDatepicker = () => {
        showMode('date');
    };
    
        const showTimepicker = () => {
        showMode('time');
    };

    const addEvent = () => {
        dateEvent = {
            name: eventName,
            description: eventDescription,
            date: date.toJSON().toString().substring(0,10),
            time: date.toJSON().toString().substring(11,19),
            type: eventType,
            id: this.generateClassID(5),
            attendance: new Array()
        } 
        firebase.firestore().collection('chapters').doc(id).update({
            calendar: firebase.firestore.FieldValue.arrayUnion(dateEvent)
        })
        props.navigation.navigate("OfficerHome")
    }

    return (
        <DismissKeyboard>
            <View style={styles.container}>
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

                    <View style={{marginTop: 32,  marginBottom: 50}}>
                        <Text style={styles.typeInput}>Event Type</Text>
                        <RNPickerSelect
                            style={styles.input}
                            onValueChange={(value) => setEventType(value)}
                            items={[
                                { label: 'Conference', value: 'conference' },
                                { label: 'Other', value: 'other' },
                            ]}
                        />
                    </View>

                    <View style={{marginTop: 10}}>
                    <View>
                        <Button onPress={showDatepicker} title="Select Date" />
                    </View>
                    <View style={{marginVertical: 20}}/>
                    <View>
                        <Button onPress={showTimepicker} title="Select Time" />
                    </View>
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                    )}
                    </View>
                    <TouchableOpacity style={styles.button} onPress={addEvent}>
                        <Text style={{color: "#FFF", fontWeight: "500", textAlign: "center"}}>Add Event</Text>
                    </TouchableOpacity>
                </View>
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
    typeInput: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
        marginBottom: 7
    },
    button: {
        marginTop: 50,
        marginHorizontal: 30,
        backgroundColor: "#000080",
        borderRadius: 4,
        height: 52,
        alignContent: "center",
        justifyContent: "center"
    },
    dateTimeText: {
        fontSize: 16,
        fontWeight: 'normal',
    },
});

export default AddEvent