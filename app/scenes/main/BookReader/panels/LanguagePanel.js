// app/BookReader/LanguagePanel.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

import SubPanel from './SubPanel'

class LanguagePanel extends Component{
  constructor(props){
    super(props);

    this.languages = [
      "en",
      "fr",
      "ko",
      "jp"
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
            width: 400,
            backgroundColor: 'purple',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          }]}>
          {
            this.languages.map(
              function(language){
                return (
                  <Text
                    key={language}
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: 'red',
                      fontSize:40
                    }}
                    onPress={() => {this.props.onChangeLanguage(language)}}>
                  {language}
                  </Text>
                );
              }.bind(this)
            )
          }
        </SubPanel>
      );
  }
}

export default LanguagePanel;
