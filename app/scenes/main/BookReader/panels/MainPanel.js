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

    this.state = {ownWidth: 0};

    this.createStyles();
  }

  createStyles(){
    this.styles = StyleSheet.create({
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
      },
      characterPanel:{
        bottom: (this.props.panelSpan * (3/5) - (100/2)),
        position: 'absolute',
        zIndex: 1,
        width: 400,
        left: this.props.panelDepth,
        height: 100
      },
      languagePanel:{
        bottom: (this.props.panelSpan * (2/5) - (100/2)),
        position: 'absolute',
        zIndex: 1,
        width: 400,
        left: this.props.panelDepth,
        height: 100
      },
      bookText:{
        position:'absolute',
        zIndex: 1,
        bottom: 0,
        height: 100,
        left: this.props.panelDepth,
        width: this.props.textStretch
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
            <View style={{
                flex: 1,
                zIndex: 2,
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'stretch',
                backgroundColor: 'white'
            }}>
              <Button
                containerStyle={this.styles.buttonContainer}
                style={this.styles.button}
                onPress={this.props.onPressHome}>H</Button>
              <Button
                containerStyle={this.styles.buttonContainer}
                style={this.styles.button}
                onPress={() => this.refs.characterPanel.slide()
                }>C</Button>
              <Button
                containerStyle={this.styles.buttonContainer}
                style={this.styles.button}
                onPress={() => {this.refs.languagePanel.slide()}}>L</Button>
              <Button
                containerStyle={this.styles.buttonContainer}
                style={this.styles.button}
                onPress={() => {this.refs.slidingText.slide()}}>T</Button>
            </View>

            <CharacterPanel
              ref="characterPanel"
              style={this.styles.characterPanel}
              onChangeCharacter={(character) => {
                this.props.onChangeCharacter(character)}}
            />
            <LanguagePanel
              ref="languagePanel"
              style={this.styles.languagePanel}
              onChangeLanguage={(language) => {
                this.props.onChangeLanguage(language)}}
            />
            <BookText
              ref="slidingText"
              style={this.styles.bookText}
              pageNumber={this.props.pageNumber} />
          </View>
      );
  }
}

export default MainPanel;
