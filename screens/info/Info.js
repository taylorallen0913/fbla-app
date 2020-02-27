import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Linking } from 'expo'

class Info extends React.Component {

    render() {
        return (
            <ScrollView>
                <Text style={styles.header}>About FBLA</Text>
                <Text style={styles.body}>
                The aim of FBLA Overseer is to work with FBLA chapters to streamline the organization and planning of members, meetings, and events through the use of an efficient, scalable mobile app.{'\n\n\n'}
                The various functionalities of FBLA Overseer allow chapters to stay coordinated, keep track of important information, increase team cohesiveness, and save time on planning. {'\n\n\n'}
                The FBLA mission is to bring business and education together in a positive working relationship through innovative leadership and career development programs. FBLA brings its mission to life through the application of its motto: Service, Education, and Progress.
                FBLA Overseer hopes to uphold this motto and allow FBLA to become more efficient through the optimization of otherwise time-consuming activities. 

                </Text>
                <View style={styles.logoContainer}>
                    <Icon onPress={() => Linking.openURL('https://www.instagram.com/fbla_pbl/?hl=en')} style={styles.logo} size={60} name={'logo-instagram'}/>
                    <Icon onPress={() => Linking.openURL('https://twitter.com/fbla_national?lang=en')} style={styles.logo} size={60} name={'logo-twitter'}/>
                    <Icon onPress={() => Linking.openURL('https://www.facebook.com/FutureBusinessLeaders/')} style={styles.logo} size={60} name={'logo-facebook'}/>
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
        marginTop: 50,
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