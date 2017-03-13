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

import Button from 'react-native-button'

class SignUpPage extends Component {
  constructor(props:Props){
    super(props);
    this.state={
      emailString: "",
      passwordString: ""
    }
    this.signUp = this.signUp.bind(this);
  }
  render(){
    return (
      <View style={styles.container}>
      <View style={{flex:1}}/>
        <View style={styles.box}>
          <TextInput
            autoCapitalize='none'
            multiline={false}
            style={{height: 40, color:'rgb(57, 166, 198)', borderBottomColor: 'grey', borderBottomWidth: 8}}
            placeholder="first name"
            placeholderTextColor='rgb(57, 166, 198)'
          />
          <TextInput
            autoCapitalize='none'
            multiline={false}
            style={{height: 40, color:'rgb(57, 166, 198)', borderBottomColor: 'grey', borderBottomWidth: 8}}
            placeholder="last name"
            placeholderTextColor='rgb(57, 166, 198)'
          />
        </View>
        <View style={{flex:1}}/>
        <View style={styles.box}>
          <TextInput
            autoCapitalize='none'
            multiline={false}
            style={{height: 40, color:'rgb(57, 166, 198)', borderBottomColor: 'grey', borderBottomWidth: 8}}
            placeholder="boy/girl"
            placeholderTextColor='rgb(57, 166, 198)'
          />
          <TextInput
            autoCapitalize='none'
            multiline={false}
            style={{height: 40, color:'rgb(57, 166, 198)', borderBottomColor: 'grey', borderBottomWidth: 8}}
            placeholder="date of birth"
            placeholderTextColor='rgb(57, 166, 198)'
          />
        </View>
        <View style={{flex:1}}/>
        <View style={styles.box}>
          <TextInput
            autoCapitalize='none'
            multiline={false}
            style={{height: 40, color:'rgb(57, 166, 198)', borderBottomColor: 'grey', borderBottomWidth: 8}}
            placeholder="school code"
            placeholderTextColor='rgb(57, 166, 198)'
          />
          <TextInput
            autoCapitalize='none'
            multiline={false}
            style={{height: 40, color:'rgb(57, 166, 198)', borderBottomColor: 'grey', borderBottomWidth: 8}}
            placeholder="zip code"
            placeholderTextColor='rgb(57, 166, 198)'
          />
        </View>
        <View style={{flex:5, flexDirection:'column', justifyContent:'center', alignItems:'center', width:300}}>
          <Button
            containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
            style={{textAlign: 'center', backgroundColor: '#FFFFFF', color: 'rgb(57, 166, 198)', fontSize:30}}
            onPress={this.props.onLogIn}
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

export default SignUpPage;
