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
                backgroundColor: 'green',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center'
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
          </View>
      );
  }
}

const styles = StyleSheet.create({
  buttonContainer:{
    padding:5, height:45, overflow:'hidden', borderRadius:40, backgroundColor: 'white'
  },
  button:{
    flex:1, textAlign: 'center', backgroundColor: '#FFFFFF', color: 'brown', fontSize:30
  }
});

export default MainPanel;
