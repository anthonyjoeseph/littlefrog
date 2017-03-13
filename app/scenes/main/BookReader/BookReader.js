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
import PlayButton from './PlayButton'
import BookControl from './BookControl'

class BookReader extends Component {
  constructor(props) {
    super(props)

    var {width, height} = Dimensions.get('window');
    this.dimensions = {
      width: width + 30,
      height: height
    }
    var bookData = require('./resources/BookData.json');
    this.picAspectRatio = bookData.aspectRatio;
    this.picWidth = height * this.picAspectRatio;
    this.pagesData = bookData.pages;

    this.state = {
      pageNumber: 0,
      character: "",
      language: "",
      characterPanelVisible: false,
      languagePanelVisible: false,
      bookTextPanelVisible: true
    };

    this._onQuizSelect = this._onQuizSelect.bind(this);
    this._onChangePage = this._onChangePage.bind(this);
  }

  render() {
    return (
      <View style={{flex:1, flexDirection:'row'}}>
        <MainPanel
          style={styles.interactionPanel}
          onPressHome={() => {
            Actions.bookInfoPage()
          }}
          onPressCharacter={
            function(newCharacter){
              this.refs.bookControl.slideCharacterPanel();
            }.bind(this)
          }
          onPressLanguage={
            function(newLanguage){
              this.refs.bookControl.slideLanguagePanel();
            }.bind(this)
          }
          onPressBookText={
            function(newLanguage){
              this.refs.bookControl.slideBookTextPanel();
            }.bind(this)
          }
        />
        <BookControl
          ref="bookControl"
          style={styles.bookControl}
          pagesData={this.pagesData}
          screenWidth={this.dimensions.width}
          screenHeight={this.dimensions.height}
          picWidth={this.picWidth}
          onQuizSelect={this._onQuizSelect}
          onChangePage={this._onChangePage}
          pageNumber={this.state.pageNumber}
          onChangeCharacter={
            function(newLanguage){
              this.setState({language: newLanguage});
            }.bind(this)
          }
          onChangeLanguage={
            function(newCharacter){
              this.setState({character: newCharacter});
            }.bind(this)
          }
        />
        <PlayButton style={styles.playButton}
          language={this.state.language}
          character={this.state.character}
        />
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

const styles = StyleSheet.create({
  interactionPanel:{
    zIndex: 2,
    width:50,
    backgroundColor:'transparent'
  },
  playButton:{
    position: 'absolute',
    zIndex: 2,
    top: 0,
    right: 50
  },
  bookControl:{
    zIndex: 1
  }
});

export default BookReader;
