// app/BookReader.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';

import ViewPager from 'react-native-viewpager';

import Button from 'react-native-button';

import Sound from 'react-native-sound';

var IMGS = [
  require('./pages/Page1.png'),
  require('./pages/Page2.png'),
  require('./pages/Page3.png'),
  require('./pages/Page4.png'),
  require('./pages/Page5.png'),
  require('./pages/Page6.png'),
  require('./pages/Page7.png'),
  require('./pages/Page8.png'),
  require('./pages/Page9.png'),
  require('./pages/Page10.png'),
  require('./pages/Page11.png'),
  require('./pages/Page12.png'),
  require('./pages/Page13.png'),
  require('./pages/Page14.png'),
  require('./pages/Page15.png')
];


class BookReader extends Component {
  constructor(props) {
    super(props)
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });

    this.loadData();

    this.state = {
      dimensions: {
        x: -1,
        y: -1,
        width: -1,
        height: -1
      },
      dataSource: dataSource.cloneWithPages(IMGS),
      caption: this.textForPages[0]
    };

    this._onChangePage = this._onChangePage.bind(this)
    this._renderPage = this._renderPage.bind(this)

    this.music = new Sound('gunshot.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
      } else { // loaded successfully
        console.log('duration in seconds: ' + this.music.getDuration() +
            'number of channels: ' + this.music.getNumberOfChannels());
      }
    });

    console.log(Sound.MAIN_BUNDLE);

  }

  loadData(){
    //load text
    var textForPagesData = require('./BookTextEng.json');
    this.textForPages = textForPagesData.text;

    //load Pics
    //won't work b/c require("...") breaks where require('...') works (single vs double quotes)
    //json is interpreted as single quotes, there's not really a way to convert
    //attempted this solution, failed, likely due to react-native's compilation:
    //https://github.com/requirejs/requirejs/issues/151
    /*var picFilepathData = require('./BookPicData.json');
    this.picFilepaths = picFilepathData.pageFileNames.map(
      (filepath) =>
        require(
          ['./pages/Page1.png'],
          (modvalue) => {}
                )
    );
    */
  }

  render() {
    return (
      <View style={{flex:1, flexDirection:'column', backgroundColor: '#1586BA'}}>
        <View style={{flex:1, flexDirection:'row'}}>
          <View style={{flex:0.1}} />
          <View style={{flex:1}} onLayout={(event) => {
            this.state.dimensions = event.nativeEvent.layout;
          }}>
            <ViewPager
              style={styles.pager}
              dataSource={this.state.dataSource}
              renderPage={this._renderPage}
              onChangePage={this._onChangePage}
              isLoop={false}
              autoPlay={false}/>
          </View>
          <View style={{flex:0.1}} />
          <Text style={{
              position:'absolute',
              backgroundColor: '#FFFFFF',
              color: 'red',
              fontSize:40,
              top:0, right: 0
            }}
            onPress={() => {
              this.music.play((success) => {
                if (success) {
                  console.log('successfully finished playing');
                } else {
                  console.log('playback failed due to audio decoding errors');
                }
              });
            }}>play audio</Text>
        </View>
        <View style={styles.textArea}>
          <ScrollView>
            <Text style={{color:'white'}}>{this.state.caption}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }

  _renderPage(
    data: Object,
    pageID: number | string,) {
    return (
      <View style={
        {
          width: this.state.dimensions.width,
          height: this.state.dimensions.height,
          flexDirection: 'column',
          justifyContent:'center',
          alignItems:'stretch'
        }}>
        <Image
          resizeMode='contain'
          source={data}
          style={{flex:1, width: null}} />
      </View>
    );
  }

  _onChangePage(
    page: number | string){
      this.setState({
        caption: this.textForPages[page]
      });
  }
}


var styles = StyleSheet.create({
  pagerHolder: {
    flex: 1,
  },
  pager: {
    flex:1
  },
  textArea: {
    flex:0.25
  }
});

export default BookReader;
