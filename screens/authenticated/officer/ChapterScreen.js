import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

class ChapterScreen extends React.Component {

    render() {
        const { params } = this.props.navigation.state;
        
        const id = params ? params.id : null;
        const description = params ? params.description : null;
        const name = params ? params.name : null;
        const school = params ? params.school : null; 
        return (
            <View>
                <Text style={{fontSize: 40, fontWeight: "bold"}}>Chapter Screen</Text>
                <Text>ID: {JSON.stringify(id)}</Text>
                <Text>DESCRIPTION: {JSON.stringify(description)}</Text>
                <Text>NAME: {JSON.stringify(name)}</Text>
                <Text>SCHOOL: {JSON.stringify(school)}</Text>
            </View>
        )
    }
}

export default ChapterScreen