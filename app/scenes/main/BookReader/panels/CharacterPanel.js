// app/BookReader/LanguagePanel.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

import SubPanel from './SubPanel'

class CharacterPanel extends Component{
  constructor(props){
    super(props);

    this.characters = [
      "hum",
      "ali",
      "squ",
      "dar"
    ];
  }

  slide(){
    this.refs.subPanel.slide();
  }

  render(){
      return (
        <SubPanel
          ref='subPanel'
          style={[
            this.props.style,
            {
            backgroundColor: 'purple',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          }]}>
          <View>
            <Text> well I tried </Text>
          </View>
        </SubPanel>
      );
  }
}

export default CharacterPanel;
