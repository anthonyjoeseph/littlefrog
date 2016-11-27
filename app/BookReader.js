// app/BookReader.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';

import ViewPager from 'react-native-viewpager';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

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
      dataSource: dataSource.cloneWithPages(IMGS),
      caption: this.textForPages[0]
    };

    this._onChangePage = this._onChangePage.bind(this)
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
      <View style={{flex:1}}>
        <ViewPager
          style={styles.pager}
          dataSource={this.state.dataSource}
          renderPage={this._renderPage}
          onChangePage={this._onChangePage}
          isLoop={false}
          autoPlay={false}/>
          <View style={{flex:1, backgroundColor: 'yellow'}}><Text>{this.state.caption}</Text></View>
      </View>
    );
  }

  _renderPage(
    data: Object,
    pageID: number | string,) {
    return (
      <Image
        source={data}
        style={styles.page} />
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
  pager: {
    flex:3
  },
  page: {
    width: deviceWidth
  },
});

export default BookReader;
