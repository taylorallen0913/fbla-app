import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Block, Text } from "galio-framework";

const { height, width } = Dimensions.get("screen");
import materialTheme from "../../../constants/Theme";

class OfficerEventInfo extends React.Component {
  state = {
    type: null,
    typeLoaded: false
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const type = params ? params.type : null;
    this.setState({ type: type }, () => {
        this.setState({ typeLoaded: true })
        console.log(this.state.type)
    });
  }

  render() {
    return (
      <Block>
        <Text>Event Info</Text>
        <Block>
        {this.state.typeLoaded ? <Text>{this.state.type}</Text> : null}
        </Block>
      </Block>
    );
  }
}

export default OfficerEventInfo;
