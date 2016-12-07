// app/BookReader/InteractionPanel.js

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class InteractionPanel extends Component{

  render(){
      return (
          <View style={
            [
              this.props.style,
              {
                backgroundColor: 'green',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center'
              }
            ]
          }>
            <Text style={{color:'white'}} onPress={this.props.onPressHome}>H</Text>
            <Text style={{color:'white'}} onPress={this.props.onPressVoice}>C</Text>
            <Text style={{color:'white'}} onPress={this.props.onPressText}>T</Text>
          </View>
      );
  }
}

export default InteractionPanel;
