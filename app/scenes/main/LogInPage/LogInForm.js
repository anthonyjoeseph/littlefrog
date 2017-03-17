// @flow

// app/LoPage.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Props,
  AsyncStorage
} from 'react-native';
import Button from 'react-native-button'
import { Actions } from 'react-native-router-flux';
import Orientation from 'react-native-orientation';
import {fetchAndPersistJWT, authenticatedRESTRequest} from '../../../RESTAccess.js';
import * as Progress from 'react-native-progress';

class LogInForm extends Component {
  constructor(props:Props){
    super(props);
    this.state={
      emailString: "",
      passwordString: "",
      networkStatus: ""
    }
    this.logInAsync = this.logInAsync.bind(this);
  }
  componentDidMount(){
    Orientation.addOrientationListener(this.orientationDidChange);
  }
  componentWillUnmount(){
    Orientation.removeOrientationListener(this.orientationDidChange);
  }
  async logInAsync(){
    var email = this.state.emailString;
    var password = this.state.passwordString;

    this.setState({networkStatus:"waiting"});
    try{
      await fetchAndPersistJWT(email, password);
      this.rotateAndSwitchScenes();
    }catch(e){
      this.setState({networkStatus:e.message});
    }
  }

  rotateAndSwitchScenes(){
    Orientation.lockToLandscapeLeft();
    //don't route to book scene until the device is already rotated
  }
  orientationDidChange(orientation:string){
    //the device has rotated, now route to book scene
    if(orientation === 'LANDSCAPE'){
      Actions.homePage();
    }
  }
  render(){
    var networkStatusElement;
    switch(this.state.networkStatus){
      case "":
        networkStatusElement = <Text></Text>;
        break;
      case "waiting":
        networkStatusElement = <Progress.Circle
                                size={30}
                                thickness={5}
                                direction='clockwise'
                                indeterminate={true}
                                animated={true}
                                color='red'/>;
        break;
      default:
        networkStatusElement = <Text>{this.state.networkStatus}</Text>;
        break;
    }
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
        <View style={{flex:3, justifyContent:'flex-start', alignItems:'center'}}>
          <Button
            containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
            style={{textAlign: 'center', backgroundColor: '#FFFFFF', color: 'rgb(57, 166, 198)', fontSize:30}}
            onPress={this.logInAsync}
          >Sign In</Button>
          <View style={{flex:1}}/>
          {networkStatusElement}
        </View>
      </View>
    );
  }
}

export default LogInForm;
