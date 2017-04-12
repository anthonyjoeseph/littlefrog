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

class ControlPanel extends Component {
  render(){
    return (
      <View
        style={styles.container}
        height={100}>
        <Text>Search</Text>
        <TextInput
          autoCapitalize='none'
          multiline={false}
          width={200}
          style={{height: 40, color:'black', borderBottomColor: '#000000', borderBottomWidth: 8}}
          placeholder="filter words"
          placeholderTextColor='black'
        />
        <Button
          containerStyle={{padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'}}
          style={{textAlign: 'center', backgroundColor: '#FFFFFF', color: 'rgb(57, 166, 198)', fontSize:30}}
          onPress={this.props.showUserPanel}
        >D</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(57, 166, 198)',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export default ControlPanel;
