import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import HomeScreen from "./MemberChapter/MemberChapterHomeScreen";
import CalendarScreen from "./MemberChapter/MemberChapterCalendarScreen";

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        id: "0",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-home"} />
          </View>
        )
      }
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-calendar"}
            />
          </View>
        ),
        activeColor: "#ffffff",
        inactiveColor: "#a3c2fa",
        barStyle: { backgroundColor: "#2163f6" }
      }
    }
  },
  {
    initialRouteName: "Home",
    activeColor: "#ffffff",
    inactiveColor: "#a3c2fa",
    barStyle: { backgroundColor: "#2163f6" }
  }
);

export default createAppContainer(TabNavigator);
