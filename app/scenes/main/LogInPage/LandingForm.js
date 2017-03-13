// @flow

// app/LoPage.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Button from 'react-native-button'

import { Actions } from 'react-native-router-flux';

class LandingForm extends Component {
  render(){
    return (
      <View style={{flex:1}}>
        <View style={{flex:3, justifyContent:'flex-end'}}>
          <Button
            containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
            style={{textAlign: 'center', backgroundColor: '#FFFFFF', color: 'rgb(57, 166, 198)', fontSize:30}}
            onPress={Actions.signUpPage}
          >Sign Up</Button>
        </View>
        <View style={{flex:1}}/>
        <View style={{flex:3, justifyContent:'flex-start'}}>
          <Button
            containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
            style={{textAlign: 'center', backgroundColor: '#FFFFFF', color: 'rgb(57, 166, 198)', fontSize:30}}
            onPress={this.props.onLogIn}
          >Sign In</Button>
        </View>
      </View>
    );
  }
}

export default LandingForm;
