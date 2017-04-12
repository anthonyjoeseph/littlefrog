// app/BookReader/InteractionPanel.js

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Button from 'react-native-button'
import LanguagePanel from './panels/LanguagePanel'
import CharacterPanel from './panels/CharacterPanel'
import BookText from './panels/BookText'
import BookImages from './viewpager/BookImages'

class BookControl extends Component{

  constructor(props){
    super(props);

    this.createStyles();
  }

  slideLanguagePanel(){
    this.refs.languagePanel.slide();
  }

  slideCharacterPanel(){
    this.refs.characterPanel.slide();
  }

  slideBookTextPanel(){
    this.refs.slidingText.slide();
  }

  createStyles(){
    this.styles = StyleSheet.create({
      characterPanel:{
        bottom: (this.props.screenHeight * (3/5) - (100/2)),
        position: 'absolute',
        zIndex: 1,
        width: 400,
        left: 0,
        height: 100
      },
      languagePanel:{
        bottom: (this.props.screenHeight * (2/5) - (100/2)),
        position: 'absolute',
        zIndex: 1,
        width: 400,
        left: 0,
        height: 100
      },
      bookText:{
        position:'absolute',
        zIndex: 1,
        bottom: 0,
        height: 100,
        left: 0,
        width: this.props.picWidth
      },
      bookImages:{
        zIndex: 0
      }
    });
  }

  render(){
      return (
          <View style={
            [
              this.props.style,
              {
                width:this.props.picWidth,
                height:this.props.screenHeight
              }
            ]
          }>
            <BookImages
              authHeaders={this.props.authHeaders}
              baseURI={this.props.baseURI}
              style={this.styles.bookImages}
              onPageScroll={this.props.onChangePage}
              pagesData={this.props.pagesData}
              onQuizSelect={this.props.onQuizSelect}
              width={this.props.picWidth}
              height={this.props.screenHeight} />
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
              authHeaders={this.props.authHeaders}
              baseURI={this.props.baseURI}
              style={this.styles.bookText}
              pageNumber={this.props.pageNumber} />
          </View>
      );
  }
}

export default BookControl;
