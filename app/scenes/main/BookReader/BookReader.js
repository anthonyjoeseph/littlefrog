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


class BookReader extends Component {
  constructor(props) {
    super(props)

    this.loadData();

    this.state = {
      pageNumber: 0,
      character: "ame",
      language: "mex"
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

  render() {
    return (
      <View style={{flex:1, flexDirection:'row'}}>
        <MainPanel
          style={styles.interactionPanel}
          panelSpan={this.dimensions.height}
          panelDepth={this.dimensions.width - this.picWidth}
          textStretch={this.picWidth}
          pageNumber={this.state.pageNumber}
          onPressHome={() => {Actions.bookInfoPage()}}
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
        <PlayButton style={styles.test}
          language={this.state.language}
          character={this.state.character}
        />
        <BookImages
          style={styles.bookImages}
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

const styles = StyleSheet.create({
  interactionPanel:{
    zIndex: 2,
    flex: 1
  },
  playButton:{
    position: 'absolute',
    zIndex: 2,
    top: 0,
    right: 50
  },
  test:{
    position: 'absolute',
    zIndex:2,
    top: 0,
    right: 50,
    backgroundColor: 'green'
  },
  bookImages:{
    zIndex: 0
  }
});

export default BookReader;
