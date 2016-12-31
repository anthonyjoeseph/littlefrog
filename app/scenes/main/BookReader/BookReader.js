// app/BookReader/BookReader.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Button from 'react-native-button';

import BookImages from './viewpager/BookImages'
import MainPanel from './panels/MainPanel'
import LanguagePanel from './panels/LanguagePanel'
import CharacterPanel from './panels/CharacterPanel'
import BookText from './panels/BookText'
import PlayButton from './PlayButton'


class BookReader extends Component {
  constructor(props) {
    super(props)

    this.loadData();
    this.createStyles();

    this.state = {
      pageNumber: 0
    };

    this._onChangePage = this._onChangePage.bind(this);
    this._onQuizSelect = this._onQuizSelect.bind(this);
  }

  loadData(){

    var bookData = require('./resources/BookData.json');
    this.picAspectRatio = bookData.aspectRatio;
    this.pagesData = bookData.pages;

    var {width, height} = Dimensions.get('window');
    this.dimensions = {
      width: width,
      height: height
    }
    this.picWidth = height * this.picAspectRatio;
  }

  createStyles(){
    this.styles = StyleSheet.create({
      interactionPanel:{
        zIndex: 2,
        flex: 1
      },
      characterPanel:{
        bottom: (this.dimensions.height * (3/5) - (100/2)),
        position: 'absolute',
        zIndex: 1,
        height: 100
      },
      languagePanel:{
        bottom: (this.dimensions.height * (2/5) - (100/2)),
        position: 'absolute',
        zIndex: 1,
        height: 100
      },
      bookText:{
        position:'absolute',
        zIndex: 1,
        bottom: 0,
        height: 100,
        width: this.picWidth
      },
      playButton:{
        position: 'absolute',
        zIndex: 1,
        top: 0,
        right: 50
      },
      bookImages:{
        zIndex: 0
      }
    });
  }

  render() {
    return (
      <View style={{flex:1, flexDirection:'row'}}>
        <MainPanel
          style={this.styles.interactionPanel}
          onPressHome={() => {Actions.bookInfoPage()}}
          onPressCharacter={() => this.refs.characterPanel.slide()}
          onPressLanguage={() => {this.refs.languagePanel.slide()}}
          onPressText={() => {this.refs.slidingText.slide()}}/>
        <CharacterPanel
          ref="characterPanel"
          style={this.styles.characterPanel}
          onChangeCharacter={
            function(newCharacter){
              this.setState({character: newCharacter});
            }.bind(this)
          }
        />
        <LanguagePanel
          ref="languagePanel"
          style={this.styles.languagePanel}
          onChangeLanguage={
            function(newLanguage){
              this.setState({language: newLanguage});
            }.bind(this)
          }
        />
        <BookText
          ref="slidingText"
          style={this.styles.bookText}
          pageNumber={this.state.pageNumber} />
        <PlayButton
          style={this.styles.playButton}
          language={this.state.language}
          character={this.state.character}
        />
        <BookImages
          style={this.styles.bookImages}
          onPageScroll={this._onChangePage}
          pagesData={this.pagesData}
          onQuizSelect={this._onQuizSelect}
          width={this.picWidth}
          height={this.dimensions.height} />
      </View>
    );
  }

  _onChangePage(page){
    console.log(page);
    this.setState({
      pageNumber: page
    });
  }
  _onQuizSelect(pageIndex, questionIndex){
    var questionIcon = this.pagesData[pageIndex].questionIcons[questionIndex];
    Actions.quizPage(
      {
        "question" : questionIcon.questions[0].question,
        "options" : questionIcon.questions[0].options,
        "correctIndex" : questionIcon.questions[0].correctIndex
      }
    );
  }
}

export default BookReader;
