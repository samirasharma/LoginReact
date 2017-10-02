import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import Loginform from './components/LoginForm';

class App extends Component {
  state = { loggedIn : null };

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyC7Sr7q0_LoxnsYul1wp5PvgkBAS7J-BQ0",
      authDomain: "authenticationproject-5df3c.firebaseapp.com",
      databaseURL: "https://authenticationproject-5df3c.firebaseio.com",
      projectId: "authenticationproject-5df3c",
      storageBucket: "authenticationproject-5df3c.appspot.com",
      messagingSenderId: "320767252518"
  });
    firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        this.setState({ loggedIn: true});
      }
      else{
        this.setState({ loggedIn: false});
      }

    });
  }
  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return (
          <Button onPress={() => firebase.auth.signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <Loginform />;
      default:
        return <Spinner size = "large"/>;
    }

  }
  render() {
    return (
      <View>
        <Header headerText = "Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App;
