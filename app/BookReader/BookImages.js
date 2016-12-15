// app/BookReader/BookImages.js

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import ViewPager from 'react-native-viewpager';
import BookImagesPage from './BookImagesPage';

class BookImages extends Component {

  constructor(props){
    super(props);

    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });

    this.state = {
      dataSource: dataSource.cloneWithPages(this.props.pagesData)
    };

    this._renderPage = this._renderPage.bind(this);
    this._onChangePage = this._onChangePage.bind(this);
  }

  render(){
    return (
      <View style={{width:this.props.width, height:this.props.height}}>
        <ViewPager
          style={[this.props.style]}
          dataSource={this.state.dataSource}
          renderPage={this._renderPage}
          onChangePage={this._onChangePage}
          isLoop={false}
          autoPlay={false}/>
      </View>
    );
  }

  _renderPage(
   data: Object,
   pageID: number | string,) {
     return (
       <BookImagesPage
         source={{uri: data.fileName}}
         animations={data.animations}
         questions={data.questions}
         onQuizSelect={() => {this.props.onQuizSelect(pageID)}}
         width={this.props.width}
         height={this.props.height} />
    );
  }

  _onChangePage(
    page: number | string
  ) {
    this.props.onPageScroll(page);
  }
}

export default BookImages;
