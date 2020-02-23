import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import MemberRegisterScreen from './screens/MemberRegisterScreen'

import * as firebase from 'firebase';
import OfficerRegisterScreen from './screens/OfficerRegisterScreen';
import AuthLanding from './screens/AuthLanding';
import MasterRegisterScreen from './screens/MasterRegisterScreen';
import MemberScreen from './screens/Member/MemberScreen';
import OfficerScreen from './screens/Officer/OfficerScreen';
import AddChapterScreen from './screens/Officer/OfficerDashboard/AddChapterScreen'
import OfficerChapterScreen from './screens/Officer/OfficerChapterScreen'
import JoinChapterScreen from './screens/Member/MemberDashboard/JoinChapterScreen'
import MemberChapterScreen from './screens/Member/MemberChapterScreen'

require("firebase/firestore");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDmiemXSdITHB7f8Gvr56Pk-4zhbykD95U",
    authDomain: "fbla-app-6c5af.firebaseapp.com",
    databaseURL: "https://fbla-app-6c5af.firebaseio.com",
    projectId: "fbla-app-6c5af",
    storageBucket: "fbla-app-6c5af.appspot.com",
    messagingSenderId: "617900237739",
    appId: "1:617900237739:web:773b266932a0ca562968ee"
  };

  firebase.initializeApp(firebaseConfig);


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
      }
  })

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
    }
})

  const AuthStack = createStackNavigator({
      Landing: {
          screen: AuthLanding
      },
      MasterRegister: {
          screen: MasterRegisterScreen
      },
      Login: {
        screen: LoginScreen
      },
      MemberRegister: {
          screen: MemberRegisterScreen
      },
      OfficerRegister: {
          screen: OfficerRegisterScreen
      }
  })

  export default createAppContainer (
      createSwitchNavigator(
          {
              Loading: LoadingScreen,
              Officer: OfficerAppStack,
              Member: MemberAppStack,
              Auth: AuthStack
          },
          {
              initialRouteName: "Loading"
          }
      )
  )