// @flow

// app/LogInForm.js

import React, { Component } from 'react';
import {
  Props,
  State,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

class BookRow extends Component {
  state:State
  constructor(props:Props){
    super(props)
    this.state = {
      imageReady: false,
      authorizationHeader: {}
    }

    this.imageWhenAuthenticated = this.imageWhenAuthenticated.bind(this);
  }

  imageWhenAuthenticated(){
    var fullURI = "http://readbroccoli.com:3000/" + this.props.data.imageURI;
    var title = this.props.data.title;
    return (
      <Image
        style={{
          width:50,
          height:50
        }}
        defaultSource={require('./broccoli-website-logo.png')}
        source={{
          uri:fullURI,
          headers: this.props.authHeaders
        }}
      ><Text style={{backgroundColor: 'rgba(0, 0, 0, 0.0)'}}>{title}</Text></Image>
    );
  }

  render(){
    return (
      <View style={{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Button
          containerStyle={{padding:5, height:70, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
          style={{textAlign: 'center', backgroundColor: '#FFFFFF', color: 'rgb(57, 166, 198)', fontSize:30}}
          onPress={Actions.bookReader}
        >
          {this.props.authHeaders == {} ? <View style={{width:50, height:50}}/> : this.imageWhenAuthenticated()  }
        </Button>
      </View>
    );
  }
}

export default BookRow;
