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
      pageFileNames: this.pageFileNames,
      language: "en"
    };

    this._onChangePage = this._onChangePage.bind(this);
    this._onQuizSelect = this._onQuizSelect.bind(this);
  }

  loadData(){
    //load text
    var textForPagesData = require('./BookTextEng.json');
    this.textForPages = textForPagesData.text;

    var picData = require('./BookPicData.json');
    this.picAspectRatio = picData.aspectRatio;
    this.pageFileNames = picData.pageFileNames;
  }

  render() {
    return (
      <View style={{flex:1, flexDirection:'row'}}>
        <InteractionPanel
          style={
            {
              zIndex: 2,
              flex: 1
            }
          }
          onPressHome={() => {Actions.bookInfoPage()}}
          onPressVoice={() => {this.refs.languagePanel.slide()}}
          onPressText={() => {this.refs.slidingText.slide()}}/>
        <LanguagePanel
          ref="languagePanel"
          style={
            {
              position: 'absolute',
              zIndex: 1,
              top: (this.state.dimensions.height/2) - (100/2),
              height: 100
            }
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
              width: this.state.picWidth,
              height: 100
            }
          }
          caption={this.state.caption} />
        <PlayButton
          style={
            {
              position: 'absolute',
              zIndex: 1,
              top: 0,
              right: 50
            }
          }
          language={this.state.language}
        />
        <BookImages
          style={
            {
              zIndex: 0
            }
          }
          pageFileNames={this.state.pageFileNames}
          onPageScroll={this._onChangePage}
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
      caption: this.textForPages[currentPage]
    });
  }
  _onQuizSelect(index){
    console.log(index);
  }
}


var styles = StyleSheet.create({
});

export default BookReader;
