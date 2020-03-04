# FBLA Overseer

FBLA Overseer is a mobile application developed for the FBLA Mobile App Development competition created by Taylor Allen and Om Chaudhary from California High School.

## Table of contents

* [FBLA Overseer](#fbla-overseer)
* [Table of contents](#table-of-contents)
* [About the Application](#about-the-application)
* [Technology Stack](#technology-stack)
   * [Front End](#front-end)
   * [Back End](#back-end)
* [Key Features By User Group](#key-features-by-user-group)
   * [Global](#global)
   * [Officers](#officers)
   * [Members](#member)
* [Installation Guide](#installation-guide)
   * [Android APK](#android-apk)
   * [Expo Client](#expo-client)
* [Developer Environment Setup](#developer-environment-setup)


## About the Application

FBLA Overseers is a mobile application used for managing local FBLA chapters. You can learn more by reading the user manual.

## Technology Stack

### Front End
To enable the capability of the application to be cross-platform, our team used a framework called [React Native](https://reactnative.dev/). This technology combines the extremly powerful web development Javascript framework, [ReactJS](https://reactjs.org/), with features from native mobile development, to allow for the "write once run anywhere" capabilities the framework provides. Ultimately this means that you can write one app which compiles into both IOS and Android Native code without sacrificing performance.

### Back End
The Firebase/Firestore SDK was used for the back end. Firebase aided in user authentication and Firestore provided access to a simple NoSQL database

## Key Features By User Group

### Global:
   * Access relevant FBLA information
   * Edit profile (display name, user id)
   * Report a bug if a user comes across one
   * Contact the admins of application for any inquiries
   * View FAQ section which answers general questions about FBLA and the application
   * View Privacy Policy of application
   * View Terms of Service of application
   * View Licensing of application

### Officers:
   * Create their local chapter
   * Allow members to join their chapter by giving out a 5-digit code
   * Start meetings with a click of a button
   * Track attendance of meeting by just giving out a 5-digit code
   * Add future events (meetings, conferences) to the chapter's calendar

### Members:
   * Join their local chapter
   * Access officer list of local chapter
   * View upcoming FBLA events
   * Mark attendance of meeting by using a 5-digit code

## Sample User Accounts
Although you can make your own accounts, there are a few premade accounts to speed up the demo/testing process. Accounts are in (email:password) format. The accounts are:

Members
```
member@gmail.com  : member
member2@gmail.com : member2
```

Officers
```
officer@gmail.com  : officer
officer2@gmail.com : officer2
```

## Installation Guide

Download this GitHub repository by either cloning it or pressing the "Clone or Donwload" button in the root directory in this repository. There are two ways you can run the project. React Native/Expo allows for cross-platformability, meaning you can compile your code into both Android and IOS binaries. Unfortunately, we are unable to deploy an IOS application because we do not own an Apple Developer Account. Therefore, we can only run our app on IOS in the Expo Client currently. However, we have the Android APK file if you do not have/want to install the Expo Client

### Android APK

The Android APK file is located in the /bin folder. You should download this file and transfer it to your device. There are many ways of doing this. The easiest is to connect your device to your computer via USB and dropping the apk file into a folder on your mobile device. You can then search for this file and install it locally. Another way to install the APK is to download it on your computer and email it to yourself, and downloading it on your divice.

### Expo Client: 

To run the application on Expo Client, you first need to install the Expo Client from your divice's respective app/play store. For IOS you can download the Client from [IOS Download](https://apps.apple.com/us/app/expo-client/id982107779) and for Android you can download the Client from [Android Download](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US). This client allows you to run the app without actually building it for production or deploying on the app/play store. Next, go to the [project url](https://expo.io/@taylorallen0913/fbla), and scan the QR code which is displayed on the website on your phone. This should send you to the Expo Client and load the application.

## Authors

* **Taylor Allen**
* **Om Chaudhary**

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details
