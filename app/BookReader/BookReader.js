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

import LanguagePanel from './LanguagePanel'
import BookImages from './BookImages'
import InteractionPanel from './InteractionPanel'
import BookText from './BookText'
import PlayButton from './PlayButton'


class BookReader extends Component {
  constructor(props) {
    super(props)

    this.loadData();

    var {width, height} = Dimensions.get('window');
    this.state = {
      dimensions: {
        width: width,
        height: height
      },
      picWidth: height * this.picAspectRatio,
      caption: this.textForPages[0],
      picAspectRatio: this.picAspectRatio,
      pagesData: this.pagesData,
      language: "en"
    };

    this._onChangePage = this._onChangePage.bind(this);
    this._onQuizSelect = this._onQuizSelect.bind(this);
  }

  loadData(){
    //load text
    var textForPagesData = require('./BookTextEng.json');
    this.textForPages = textForPagesData.text;

    var bookData = require('./BookData.json');
    this.picAspectRatio = bookData.aspectRatio;
    this.pagesData = bookData.pages;
  }

  render() {
    return (
      <View style={{flex:1, flexDirection:'row'}}>
        <InteractionPanel
          style={styles.interactionPanel}
          onPressHome={() => {Actions.bookInfoPage()}}
          onPressVoice={() => {this.refs.languagePanel.slide()}}
          onPressText={() => {this.refs.slidingText.slide()}}/>
        <LanguagePanel
          ref="languagePanel"
          style={[styles.languagePanel,
              {
                top: (this.state.dimensions.height/2) - (100/2)
              }
            ]
          }
          onChangeLanguage={
            function(newLanguage){
              this.setState({language: newLanguage});
            }.bind(this)
          }
        />
        <BookText
          ref="slidingText"
          style={
            {
              position:'absolute',
              zIndex: 1,
              bottom: 0,
              height: 100,
              width: this.state.picWidth
            }
          }
          caption={this.state.caption} />
        <PlayButton
          style={styles.playButton}
          language={this.state.language}
        />
        <BookImages
          style={styles.bookImages}
          onPageScroll={this._onChangePage}
          pagesData={this.state.pagesData}
          onQuizSelect={this._onQuizSelect}
          width={this.state.picWidth}
          height={this.state.dimensions.height} />
      </View>
    );
  }

  _onChangePage(nativeEvent){
    var currentPage = nativeEvent.position;
    if(nativeEvent.offset > 0){
      currentPage++;
    }
    this.setState({
      caption: "page #" + currentPage + "\n" + this.textForPages[currentPage]
    });
  }
  _onQuizSelect(index){
    Actions.quizPage(
      {
        "question" : this.state.pagesData[index].questionsData.question,
        "options" : this.state.pagesData[index].questionsData.options,
        "correctIndex" : this.state.pagesData[index].questionsData.correctIndex
      }
    );
  }
}


const styles = StyleSheet.create({
  interactionPanel:{
    zIndex: 2,
    flex: 1
  },
  languagePanel:{
    position: 'absolute',
    zIndex: 1,
    height: 100
  },
  bookText:{
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

export default BookReader;
