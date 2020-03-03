import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

class License extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Text style={styles.header}>License</Text>
          <Text style={styles.body}>
            FBLA Overseer is licensed under the MIT license.
          </Text>
          <Text style={styles.body}>
            Copyright (c) 2020 FBLA Overseer{"\n\n"}
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the "Software"), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions:
            {"\n\n"}
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
            {"\n\n"}
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    textAlign: "center",
    fontSize: 45,
    fontWeight: "bold",
    marginTop: 20
  },
  body: {
    margin: 20,
    fontSize: 15,
    fontWeight: "normal"
  },
  section: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    margin: 10
  }
});

export default License;
