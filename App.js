import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

import * as firebase from 'firebase';

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

  const AppStack = createStackNavigator({
      Home: HomeScreen
  })

  const AuthStack = createStackNavigator({
      Login: LoginScreen,
      Register: RegisterScreen
  })

  export default createAppContainer (
      createSwitchNavigator(
          {
              Loading: LoadingScreen,
              App: AppStack,
              Auth: AuthStack
          },
          {
              initialRouteName: "Loading"
          }
      )
  )