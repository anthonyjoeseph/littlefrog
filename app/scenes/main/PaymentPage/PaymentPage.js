// @flow

// app/LogInForm.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Props,
  TextInput
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Button from 'react-native-button';

import Orientation from 'react-native-orientation';

class PaymentPage extends Component {
  componentDidMount(){
    Orientation.addOrientationListener(this.orientationDidChange);
  }
  componentWillUnmount(){
    Orientation.removeOrientationListener(this.orientationDidChange);
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
    return (
      <View style={styles.container}>
        <View style={{flex:1}}/>
        <Text>Broccoli subscription 1 week free trial</Text>
        <View style={styles.box}>
          <TextInput
            autoCapitalize='none'
            multiline={false}
            style={{height: 40, color:'rgb(57, 166, 198)', borderBottomColor: 'grey', borderBottomWidth: 8}}
            placeholder="Card Type"
            placeholderTextColor='rgb(57, 166, 198)'
          />
          <TextInput
            autoCapitalize='none'
            multiline={false}
            style={{height: 40, color:'rgb(57, 166, 198)', borderBottomColor: 'grey', borderBottomWidth: 8}}
            placeholder="Name On Card"
            placeholderTextColor='rgb(57, 166, 198)'
          />
        </View>
        <View style={{flex:1}}/>
        <View style={styles.box}>
          <TextInput
            autoCapitalize='none'
            multiline={false}
            style={{height: 40, color:'rgb(57, 166, 198)', borderBottomColor: 'grey', borderBottomWidth: 8}}
            placeholder="Card Number"
            placeholderTextColor='rgb(57, 166, 198)'
          />
          <TextInput
            autoCapitalize='none'
            multiline={false}
            style={{height: 40, color:'rgb(57, 166, 198)', borderBottomColor: 'grey', borderBottomWidth: 8}}
            placeholder="Month, Year, CRV Code"
            placeholderTextColor='rgb(57, 166, 198)'
          />
        </View>
        <Text>
          Above method will automatically be used
          for subscription payment after the free
          trial period.{'\n\n'}
          Subscription can be cancelled at any
          time!
        </Text>
        <View style={{flex:5, flexDirection:'column', justifyContent:'center', alignItems:'center', width:300}}>
          <Button
            containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
            style={{textAlign: 'center', backgroundColor: '#FFFFFF', color: 'rgb(57, 166, 198)', fontSize:30}}
            onPress={this.rotateAndSwitchScenes}
          >Continue</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(57, 166, 198)',
    flex:1,
    flexDirection: 'column'
  },
  box: {
    backgroundColor: 'white',
    flex:10,
    marginLeft:10,
    marginRight:10,
    padding:10,
    borderRadius:30
  }
});

export default PaymentPage;
