// app/BookReader/LanguagePanel.js

import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import SubPanel from './SubPanel';
import RadioButtonRow from './RadioButtonRow';

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
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'stretch'
            }]}>
            <RadioButtonRow
              options={this.characters}
              onSelection={
                function(selection){
                  this.props.onChangeCharacter(selection);
                }.bind(this)
              }
            />
        </SubPanel>
      );
  }
}

export default CharacterPanel;
