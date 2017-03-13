// @flow

// app/LoPage.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Props
} from 'react-native';

import 'whatwg-fetch';

import Button from 'react-native-button'

import { Actions } from 'react-native-router-flux';

import Orientation from 'react-native-orientation';

class LogInForm extends Component {
  constructor(props:Props){
    super(props);
    this.state={
      emailString: "",
      passwordString: ""
    }
    this.logIn = this.logIn.bind(this);
  }
  componentDidMount(){
    Orientation.addOrientationListener(this.orientationDidChange);
  }
  componentWillUnmount(){
    Orientation.removeOrientationListener(this.orientationDidChange);
  }
  logIn(){
    var email = this.state.emailString;
    var password = this.state.passwordString;
    var bodyJSON = JSON.stringify({
      name: email,
      password: password
    });

    fetch('http://readbroccoli.com:8080/broccolistudents/users/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: bodyJSON
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      var isGood = json.user_exists;
    })
    .catch(function(ex){
      var isbad = ex;
    });
  }
  rotateAndSwitchScenes(){
    Orientation.lockToLandscapeLeft();
    //don't route to book scene until the device is already rotated
  }
  orientationDidChange(orientation:string){
    //the device has rotated, now route to book scene
    if(orientation === 'LANDSCAPE'){
      Actions.bookReader();
    }
  }
  render(){
    return (
      <View style={{flex:1}}>
        <View style={{flex:3, justifyContent:'flex-end'}}>
          <TextInput
            autoCapitalize='none'
            multiline={false}
            style={{height: 40, color:'white', borderBottomColor: '#000000', borderBottomWidth: 8}}
            placeholder="email"
            placeholderTextColor='white'
            onChangeText={
              (text) => this.setState({emailString:text})
            }
          />
          <TextInput
            autoCapitalize='none'
            multiline={false}
            style={{height: 40, color:'white', borderBottomColor: '#000000', borderBottomWidth: 8}}
            placeholder="password"
            placeholderTextColor='white'
            onChangeText={
              (text) => this.setState({passwordString:text})
            }
            secureTextEntry={true}
          />
        </View>
        <View style={{flex:1}}/>
        <View style={{flex:3, justifyContent:'flex-start'}}>
          <Button
            containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
            style={{textAlign: 'center', backgroundColor: '#FFFFFF', color: 'rgb(57, 166, 198)', fontSize:30}}
            onPress={this.logIn}
          >Sign In</Button>
        </View>
      </View>
    );
  }
}

export default LogInForm;
