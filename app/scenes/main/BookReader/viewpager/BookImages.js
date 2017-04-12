// @flow
// app/BookReader/BookImages.js

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import ViewPager from './ViewPager';
import BookImagesPage from './BookImagesPage';

function isNearInt(value, err) {
  var nearbyInt = Math.round(value);
  return Math.abs(value - nearbyInt) < 0.05;
}

class BookImages extends Component {

  render(){
    return (
      <View style={{width:this.props.width, height:this.props.height}}>
        <ViewPager
          numPages={this.props.pagesData.length}
          renderRange={4}
          onPageScroll={this.props.onPageScroll}>
            {
              this.props.pagesData.map(
                function(data, index){
                  return (
                    <BookImagesPage
                     key={index}
                     source={{
                       uri: this.props.baseURI + "pages/" + index + ".jpg",
                       headers: this.props.authHeaders
                     }}
                     animations={data.animations}
                     questionIcons={data.questionIcons}
                     onQuizSelect={
                       function(questionIndex){
                         this.props.onQuizSelect(index, questionIndex)
                       }.bind(this)
                     }
                     width={this.props.width}
                     height={this.props.height} />
                  );
                }.bind(this)
              )
            }
        </ViewPager>
      </View>
    );
  }
}
export default BookImages;
