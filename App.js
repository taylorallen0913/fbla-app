import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import MemberRegisterScreen from './screens/MemberRegisterScreen'

import * as firebase from 'firebase';
import OfficerRegisterScreen from './screens/OfficerRegisterScreen';
import AuthLanding from './screens/AuthLanding';
import MasterRegisterScreen from './screens/MasterRegisterScreen';
import MemberScreen from './screens/MemberScreen';
import OfficerScreen from './screens/OfficerScreen';
import AddChapterScreen from './screens/AddChapterScreen'
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
      Home: MemberScreen
  })

  const OfficerAppStack = createStackNavigator({
    Home: OfficerScreen,
    AddChapter: AddChapterScreen
})

  const AuthStack = createStackNavigator({
      Landing: AuthLanding,
      MasterRegister: MasterRegisterScreen,
      Login: LoginScreen,
      MemberRegister: MemberRegisterScreen,
      OfficerRegister: OfficerRegisterScreen
  })

  export default createAppContainer (
      createSwitchNavigator(
          {
              Loading: LoadingScreen,
              Member: MemberAppStack,
              Officer: OfficerAppStack,
              Auth: AuthStack
          },
          {
              initialRouteName: "Loading"
          }
      )
  )