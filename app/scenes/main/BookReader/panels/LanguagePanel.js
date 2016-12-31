// app/BookReader/LanguagePanel.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

import RadioButtonRow from './RadioButtonRow';
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
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'stretch'
            }]}>
            <RadioButtonRow
              options={this.languages}
              onSelection={
                function(selection){
                  this.props.onChangeLanguage(selection);
                }.bind(this)
              }
            />
        </SubPanel>
      );
  }
}

export default LanguagePanel;
