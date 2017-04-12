// @flow
// app/BookReader/BookText.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Animated,
  Props,
  State
} from 'react-native';

import SubPanel from './SubPanel'

class BookText extends Component{
  state:State
  constructor(props:Props){
    super(props);
    this.state = {
      textForPages: {0:"retrieving book text..."}
    };
  }

  componentWillReceiveProps(props:Props){
    if(props.authHeaders.hasOwnProperty('Authorization')){
      fetch(props.baseURI + "text/BookTextEng.json", {
        method: "GET",
        headers: props.authHeaders
      })
      .then(function(rawBookTextData){
        return rawBookTextData.json();
      })
      .then(function(bookTextData){
        this.setState({textForPages:bookTextData.text});
      }.bind(this))
      .catch(function(error){
        this.setState({textForPages:{0: "error retrieving book text"}});
      }.bind(this));
    }
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
            <Text style={{color:'white'}}>{this.state.textForPages[this.props.pageNumber]}</Text>
          </ScrollView>
        </SubPanel>
      );
  }
}

export default BookText;
