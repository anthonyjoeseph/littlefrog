// app/BookReader/InteractionPanel.js

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Button from 'react-native-button'

class MainPanel extends Component{

  render(){
      return (
          <View style={
            [
              this.props.style,
              {
                backgroundColor: 'white',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'stretch'
              }
            ]
          }>
            <Button
              containerStyle={styles.buttonContainer}
              style={styles.button}
              onPress={this.props.onPressHome}>H</Button>
            <Button
              containerStyle={styles.buttonContainer}
              style={styles.button}
              onPress={this.props.onPressCharacter}>C</Button>
            <Button
              containerStyle={styles.buttonContainer}
              style={styles.button}
              onPress={this.props.onPressLanguage}>L</Button>
            <Button
              containerStyle={styles.buttonContainer}
              style={styles.button}
              onPress={this.props.onPressText}>T</Button>
            <>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  buttonContainer:{
    flex:1, padding:5, overflow:'hidden', backgroundColor: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
  },
  button:{
    textAlign: 'center', backgroundColor: '#FFFFFF', color: 'brown', fontSize:30
  }
});

export default MainPanel;
