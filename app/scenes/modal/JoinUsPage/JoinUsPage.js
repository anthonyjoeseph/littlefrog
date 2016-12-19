// app/JoinUsPage.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import Button from 'react-native-button';

import DismissableFullscreenPopup from '../DismissableFullscreenPopup'

import { Actions } from 'react-native-router-flux';

class JoinUsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailTextInput: 'example@expl.com'
    };
  }

  render() {
    return (
      <DismissableFullscreenPopup
        onDismiss={() => {Actions.pop();}}>
        <View style={styles.popupView}>
          <View style={styles.topView}>
            <Text style={styles.topText}>Join for Promotions!</Text>
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.bottomText}>Enter your email</Text>
            <TextInput
              style={{height: 40}}
              editable = {true}/>
              <Button
                containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
                style={{flex:3, textAlign: 'center', backgroundColor: '#000000', color: 'white', fontSize:20}}
                onPress={() => {Actions.pop();}}>SUBMIT</Button>
          </View>
        </View>
      </DismissableFullscreenPopup>
    )
  }
}

const styles = StyleSheet.create({
  popupView:{
    width: 300,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  topView:{
    flex: 2,
    backgroundColor: '#1586BA',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topText:{
    color: 'white',
    fontSize: 30
  },
  bottomView:{
    flex: 3,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomText:{
    color: 'black',
    fontSize: 20
  }
});

export default JoinUsPage;
