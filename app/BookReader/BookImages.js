// app/BookReader/BookImages.js

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';

import BookImagesPage from './BookImagesPage'
class BookImages extends Component {
  render(){
    return (
      <IndicatorViewPager
                    style={
                      [
                        this.props.style,
                        {width: this.props.width, height: this.props.height}
                      ]
                    }
                    indicator={<PagerDotIndicator pageCount={this.props.pagesData.length} />}
                    onPageScroll={this.props.onPageScroll}>
          {
            this.props.pagesData.map(
              function(page, index){
                return (
                  <View key={page.fileName} style={{width:this.props.width, height:this.props.height}}>
                    <BookImagesPage
                      source={{uri: page.fileName}}
                      animations={page.animations}
                      hasButton={page.hasButton}
                      onQuizSelect={() => {this.props.onQuizSelect(index)}}
                      width={this.props.width}
                      height={this.props.height} />
                  </View>
                );
              }.bind(this)
            )
          }
      </IndicatorViewPager>
    );
  }
}

export default BookImages;
