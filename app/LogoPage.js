// app/LogoPage.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from 'react-native-button'

import { Actions } from 'react-native-router-flux';

const LogoPage = () => {
  return (
    <View style={styles.container}>
      <View style={{flex:0.5, justifyContent: 'flex-end'}}>
        <Text style={styles.broccoliLogo}>broccoli</Text>
        <Text style={styles.title}>Little Frog Doesn&#39;t Listen</Text>
      </View>
      <View style={styles.buttons}>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'stretch'}}>
          <View style={{flex:2}}></View>
          <Button
            containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
            style={{flex:3, textAlign: 'center', backgroundColor: '#FFFFFF', color: 'red', fontSize:40}}
            onPress={() => Actions.bookReader()}
          >Join us!</Button>
          <View style={{flex:1}}></View>
          <Button
            containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
            style={{flex:3, textAlign: 'center', backgroundColor: '#FFFFFF', color: 'red', fontSize:40}}
            onPress={() => Actions.bookReader()}
          >Proceed</Button>
          <View style={{flex:2}}></View>
        </View>
      </View>
    </View>
  );
}

//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#1586BA',
    flexDirection: 'column',
    height: 100,
    padding: 20
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  broccoliLogo: {
    fontSize: 40,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  buttons: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

export default LogoPage;
