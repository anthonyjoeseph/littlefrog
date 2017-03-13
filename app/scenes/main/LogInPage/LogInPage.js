// @flow

// app/LogInForm.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Props
} from 'react-native';

import Orientation from 'react-native-orientation';

import LandingForm from './LandingForm';
import LogInForm from './LogInForm';

class LogInPage extends Component {
  constructor(props:Props){
    super(props);
    this.state = {
      isLoggingIn: false
    };
    this.goToLogInForm = this.goToLogInForm.bind(this);
  }
  componentDidMount(){
    Orientation.lockToPortrait();
  }
  goToLogInForm(){
    this.setState({
      isLoggingIn: true
    });
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={{flex:1}}>
            <View style={{flex:1}}/>
            <Image
              source={require('./Background-City.png')}
              style={{flex:1, width:null}}
              resizeMode='contain'
            />
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          {this.state.isLoggingIn ? <LogInForm /> : <LandingForm onLogIn={this.goToLogInForm} /> }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(57, 166, 198)', flex:1, flexDirection: 'column'
  },
  imageContainer: {
    flex:1, justifyContent: 'flex-end', alignItems:'stretch'
  }
});

export default LogInPage;
