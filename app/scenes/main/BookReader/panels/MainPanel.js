// app/BookReader/InteractionPanel.js

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Button from 'react-native-button'
import LanguagePanel from './LanguagePanel'
import CharacterPanel from './CharacterPanel'
import BookText from './BookText'

class MainPanel extends Component{

  constructor(props){
    super(props);

    this.createStyles();
  }

  createStyles(){
    this.styles = StyleSheet.create({
      panelContainer:{
          flex: 1,
          zIndex: 2,
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'stretch',
          backgroundColor: 'white'
      },
      buttonContainer:{
        zIndex: 2,
        flex:1,
        padding:5,
        overflow:'hidden',
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      button:{
        zIndex: 2,
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        color: 'brown',
        fontSize:30
      }
    });
  }
  render(){
      return (
          <View style={
            [
              this.props.style
            ]
          }>
            <View style={this.styles.panelContainer}>
              <Button
                containerStyle={this.styles.buttonContainer}
                style={this.styles.button}
                onPress={
                  () => {this.props.onPressHome()}
                }>H</Button>
              <Button
                containerStyle={this.styles.buttonContainer}
                style={this.styles.button}
                onPress={
                  () => {this.props.onPressCharacter()}
                }>C</Button>
              <Button
                containerStyle={this.styles.buttonContainer}
                style={this.styles.button}
                onPress={
                  () => {
                    this.props.onPressLanguage()
                  }}>L</Button>
              <Button
                containerStyle={this.styles.buttonContainer}
                style={this.styles.button}
                onPress={
                  () => {this.props.onPressBookText()
                  }}>T</Button>
            </View>
          </View>
      );
  }
}

export default MainPanel;
