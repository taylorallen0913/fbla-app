import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

class TOS extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.header}>Licensing</Text>
                <Text style={styles.body}>
                    <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold"}}>FBLA Overseer is licensed under the MIT license.{'\n\n\n'}</Text>
                    <Text style={{color: "#696969"}}>
                    Copyright 2020 FBLA Overseer
                    {'\n\n'}
                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                    {'\n\n'}
                    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                    {'\n\n'}
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                    </Text>
                </Text>
            </View>
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

export default TOS