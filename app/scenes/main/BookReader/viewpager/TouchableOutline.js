// app/BookReader/BookPageImage.js

import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

class TouchableOutline extends Component{
  constructor(props){
    super(props);

    this.state = {
      highlighted: false
    };
  }

  render(){
      return (
        <View
          style={
            {
              position:'absolute',
              left: this.props.left,
              bottom: this.props.bottom,
              width: this.props.width,
              height: this.props.height
            }
          }>
          <TouchableWithoutFeedback
            onPressIn={
              function(){
                this.setState({highlighted: true});
              }.bind(this)}
            onPressOut={
              function(){
                this.setState({highlighted: false});
              }.bind(this)}
            onPress={
              function(){
                this.props.onPress();
              }.bind(this)}
          >
            <Image
              resizeMode='stretch'
              source={{uri: this.props.source}}
              style={{
                tintColor: this.state.highlighted ? this.props.tintColor : null,
                width: this.props.width,
                height: this.props.height
              }} />
          </TouchableWithoutFeedback>
        </View>
      );
  }
}

export default TouchableOutline;
