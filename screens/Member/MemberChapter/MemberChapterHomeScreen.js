import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

class MemberChapterHomeScreen extends React.Component {

    state = {
        id: "",
        items: {}
    }

    componentDidMount() {
        const { params } = this.props.navigation.state;
        const id = params ? params.id : null;
        this.setState({id: id})
    }

    render() {
        return (
            <View>
                
                <Text style={{fontSize: 40, fontWeight: "bold", textAlign: "center"}}>Member Home</Text>
                <Text>{this.state.id}</Text>
            </View>
        )
    }
}

export default MemberChapterHomeScreen