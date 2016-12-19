// app/scenes/main/BookReader/panels/SubPanel.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

class SubPanel extends Component{
  constructor(props){
    super(props);

    this.state = {
      translateAnim: new Animated.Value(0),
      ownWidth: 1000, //initialize at a high value to avoid drawing before width is correctly updated
      isVisible: false,
      languages: this.languages
    }
  }

  slide(){
    var newFinalValue
    if(this.state.isVisible){
      newFinalValue = 0;
      this.state.isVisible = false;
    }else{
      newFinalValue = 1;
      this.state.isVisible = true;
    }
    Animated.timing(
      this.state.translateAnim,
      {
        toValue: newFinalValue,
        duration: 1000
      }
    ).start();
  }

  render(){
      return (
        <Animated.View
          style={
            [
              this.props.style,
              {
                transform:
                  [{
                    translateX: this.state.translateAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-this.state.ownWidth, 0]
                    })
                  }]
              }
            ]
          }
          onLayout={function(event){
            this.setState({ownWidth: event.nativeEvent.layout.width});
          }.bind(this)}>
          {this.props.children}
        </Animated.View>
      );
  }
}

export default SubPanel;
