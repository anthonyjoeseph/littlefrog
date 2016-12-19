// app/BookReader/BookText.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Animated
} from 'react-native';

import SubPanel from './SubPanel'

class BookText extends Component{
  constructor(props){
    super(props);
    //load text
    var textForPagesData = require('../resources/BookTextEng.json');
    this.textForPages = textForPagesData.text;
  }

  componentDidMount(){
    this.slide();
  }

  slide(){
    this.refs.subPanel.slide();
  }

  render(){
      return (
        <SubPanel
          ref='subPanel'
          style={
            [this.props.style,
              {
                backgroundColor: '#1586BA'
              }
            ]
          } >
          <ScrollView>
            <Text style={{color:'white'}}>{this.textForPages[this.props.pageNumber]}</Text>
          </ScrollView>
        </SubPanel>
      );
  }
}

export default BookText;
