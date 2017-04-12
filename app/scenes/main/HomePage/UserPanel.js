// @flow


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Props
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button'

import DismissableFullscreenPopup from '../../modal/DismissableFullscreenPopup';

class UserPanel extends Component {
  render(){
    return (
      <DismissableFullscreenPopup
        onDismiss={this.props.onDismiss}>
        <View style={styles.container}>
          <Image
            source={require('./panel-background.png')}
            style={{flex:1, width:null, justifyContent:'center', alignItems:'flex-end'}}
            resizeMode='stretch'>
            <Button
              containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
              style={{textAlign: 'center', backgroundColor: '#FFFFFF', color: 'rgb(57, 166, 198)', fontSize:30}}
              onPress={Actions.accountPage}
            >Account</Button>
            <Button
              containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
              style={{textAlign: 'center', backgroundColor: '#FFFFFF', color: 'rgb(57, 166, 198)', fontSize:30}}
              onPress={Actions.referralPage}
            >Referral</Button>
            <Button
              containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
              style={{textAlign: 'center', backgroundColor: '#FFFFFF', color: 'rgb(57, 166, 198)', fontSize:30}}
              onPress={Actions.statsPage}
            >Stats</Button>
          </Image>
        </View>
      </DismissableFullscreenPopup>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    right:0,
    width:300,
    height:'100%'
  }
});

export default UserPanel;
