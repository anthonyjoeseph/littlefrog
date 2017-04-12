// app/BookInfoPage.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

import {clearJWT} from '../../../RESTAccess.js';

class AccountPage extends Component {
  render() {
    return (
      <View>
        <Button
          containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
          style={{textAlign: 'center', backgroundColor: '#FFFFFF', color: 'rgb(57, 166, 198)', fontSize:30}}
          onPress={Actions.homePage}
        >B</Button>
        <Button
          containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
          style={{textAlign: 'center', backgroundColor: '#FFFFFF', color: 'rgb(57, 166, 198)', fontSize:30}}
          onPress={() => {
            clearJWT();
            Actions.logInPage();
          }}
        >Sign Out</Button>
        <Text>Account Details</Text>
      </View>
    );
  }
}

export default AccountPage;
