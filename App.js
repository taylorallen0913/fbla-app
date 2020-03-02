// (c) 2020 FBLA Overseer
// This code is licensed under MIT license (see LICENSE.txt for details)

import React from "react";

import { YellowBox } from "react-native";
import _ from "lodash";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {
  createStackNavigator,
  TransitionPresets
} from "react-navigation-stack";

import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import MemberRegisterScreen from "./screens/MemberRegisterScreen";

import * as firebase from "firebase";
import OfficerRegisterScreen from "./screens/OfficerRegisterScreen";
import LandingPage from "./screens/LandingPage";
import MasterRegisterScreen from "./screens/MasterRegisterScreen";
import MemberScreen from "./screens/Member/MemberScreen";
import OfficerScreen from "./screens/Officer/OfficerScreen";
import AddChapterScreen from "./screens/Officer/OfficerDashboard/AddChapterScreen";
import OfficerChapterScreen from "./screens/Officer/OfficerChapterScreen";
import JoinChapterScreen from "./screens/Member/MemberDashboard/JoinChapterScreen";
import MemberChapterScreen from "./screens/Member/MemberChapterScreen";
import AddEvent from "./screens/Officer/OfficerChapter/AddEvent";
import MeetingScreen from "./screens/Officer/OfficerChapter/MeetingScreen";
import MeetingInfo from "./screens/Officer/OfficerChapter/MeetingInfo";
import TOS from "./screens/TOS";

import MemberTutorialScreen from './screens/Tutorial/MemberTutorialScreen'
import OfficerTutorialScreen from './screens/Tutorial/OfficerTutorialScreen'


// Require firebase module
require("firebase/firestore");

// Web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDmiemXSdITHB7f8Gvr56Pk-4zhbykD95U",
  authDomain: "fbla-app-6c5af.firebaseapp.com",
  databaseURL: "https://fbla-app-6c5af.firebaseio.com",
  projectId: "fbla-app-6c5af",
  storageBucket: "fbla-app-6c5af.appspot.com",
  messagingSenderId: "617900237739",
  appId: "1:617900237739:web:773b266932a0ca562968ee"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Ignore Firebase errors thrown on Android; the errors are harmless
YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

const OfficerTutorialAppStack = createStackNavigator({
  OfficerTutorial: {
    screen: OfficerTutorialScreen,
    navigationOptions: {
      title: "Officer Tutorial"
    }
  }
})

const MemberTutorialAppStack = createStackNavigator({
  MemberTutorial: {
    screen: MemberTutorialScreen,
    navigationOptions: {
      title: "Member Tutorial"
    }
  },
})

const MemberAppStack = createStackNavigator({
  MemberHome: {
    screen: MemberScreen,
    navigationOptions: {
      title: "Home"
    }
  },
  JoinChapter: {
    screen: JoinChapterScreen,
    navigationOptions: {
      title: "Join Chapter"
    }
  },
  MemberChapter: {
    screen: MemberChapterScreen,
    navigationOptions: {
      title: "Chapter"
    }
  },
  TOSScreen: {
    screen: TOS,
    navigationOptions: {
      title: "Terms and Conditions"
    }
  }
});

const OfficerAppStack = createStackNavigator({
  OfficerHome: {
    screen: OfficerScreen,
    navigationOptions: {
      title: "Home"
    }
  },
  AddChapter: {
    screen: AddChapterScreen,
    navigationOptions: {
      title: "Add Chapter"
    }
  },
  OfficerChapter: {
    screen: OfficerChapterScreen,
    navigationOptions: {
      title: "Chapter Manager"
    }
  },
  AddEvent: {
    screen: AddEvent,
    navigationOptions: {
      title: "Add Event"
    }
  },
  MeetingScreen: {
    screen: MeetingScreen,
    navigationOptions: {
      title: "Meeting"
    }
  },
  MeetingInfo: {
    screen: MeetingInfo,
    navigationOptions: {
      title: "Meeting Info"
    }
  },
  TOSScreen: {
    screen: TOS,
    navigationOptions: {
      title: "Terms and Conditions"
    }
  }
});

const AuthStack = createStackNavigator(
  {
    Landing: {
      screen: LandingPage,
      navigationOptions: {
        headerShown: false
      }
    },
    MasterRegister: {
      screen: MasterRegisterScreen,
      navigationOptions: {
        headerShown: false,
        title: 'Registration'
      }
    },
    MemberRegister: {
      screen: MemberRegisterScreen,
      navigationOptions: {
        title: "Join FBLA",
        headerStyle: {
          backgroundColor: "black"
        }
      }
    },
    OfficerRegister: {
      screen: OfficerRegisterScreen,
      navigationOptions: {
        title: "Officer Registration",
        headerStyle: {
          backgroundColor: "black",
        }
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "black",
        }
      }
    },
    TOSScreen: {
      screen: TOS,
      navigationOptions: {
        title: ""
      }
    }
  },
  {
    defaultNavigationOptions: {
      ...TransitionPresets.ModalSlideFromBottomIOS
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      OfficerTutorial: OfficerTutorialAppStack,
      MemberTutorial: MemberTutorialAppStack,
      Officer: OfficerAppStack,
      Member: MemberAppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);
