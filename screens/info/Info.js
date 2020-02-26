import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class Info extends React.Component {
    render() {
        return (
            <ScrollView>
                <Text style={styles.header}>About FBLA</Text>
                <Text style={styles.body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero eget velit venenatis mollis. In sed bibendum ipsum. Vivamus blandit, urna vel consectetur lobortis, est elit tempus urna, non ultrices lorem eros id velit. Fusce eu odio erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In sed accumsan neque. Suspendisse potenti.

Pellentesque lacinia tortor id vulputate convallis. Cras orci erat, mollis sit amet turpis quis, malesuada volutpat felis. Sed vitae magna pulvinar, dignissim leo sit amet, facilisis enim. Etiam vitae diam et sapien laoreet tristique a sit amet dui. Aenean aliquam egestas tellus sed sagittis. Etiam fermentum nulla sagittis nibh pulvinar, nec tincidunt leo sagittis. Nullam interdum justo felis. Cras accumsan nulla mi, eget commodo tellus efficitur non. Sed fringilla lectus sed lorem suscipit, nec vehicula augue ullamcorper.

Nunc varius pellentesque tortor vel ullamcorper. Nunc sodales libero ac mauris cursus, sed efficitur nisi ornare. Mauris dictum nibh eget tincidunt feugiat. Vestibulum molestie urna lorem, non gravida elit eleifend eu. Nullam facilisis fermentum varius. Suspendisse condimentum maximus urna, at varius neque facilisis ac. Sed id commodo elit. Duis vel libero eu augue lobortis feugiat.
                </Text>
                <View style={styles.logoContainer}>
                    <Icon  style={styles.logo} size={80} name={'logo-instagram'}/>
                    <Icon  style={styles.logo} size={80} name={'logo-twitter'}/>
                    <Icon  style={styles.logo} size={80} name={'logo-facebook'}/>
                </View>    
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        display: "flex",
        flexDirection: "row"
    },
    logo: {
        marginHorizontal: 40,
        alignItems: "stretch"
    },
    header: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold",
        margin: 20
    },
    body: {
        margin: 20,
        fontSize: 15,
        fontWeight: "normal"
    }
});

export default Info