import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

class MemberChapterHomeScreen extends React.Component {

    render() {
        const { params } = this.props.navigation.state;
        
        const id = params ? params.id : null;
        const description = params ? params.description : null;
        const name = params ? params.name : null;
        const school = params ? params.school : null; 
        return (
            <View>
                <Text style={{fontSize: 40, fontWeight: "bold", textAlign: "center"}}>Member Home</Text>
            </View>
        )
    }
}

export default MemberChapterHomeScreen