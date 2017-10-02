import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyC7Sr7q0_LoxnsYul1wp5PvgkBAS7J-BQ0",
      authDomain: "authenticationproject-5df3c.firebaseapp.com",
      databaseURL: "https://authenticationproject-5df3c.firebaseio.com",
      projectId: "authenticationproject-5df3c",
      storageBucket: "authenticationproject-5df3c.appspot.com",
      messagingSenderId: "320767252518"
  });
  }
  render() {
    return (
      <View>
        <Header headerText = "Authentication" />
        <Text>An app</Text>
      </View>
    )
  }
}

export default App;
