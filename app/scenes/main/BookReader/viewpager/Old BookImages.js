// app/BookReader/BookImages.js

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import BookImagesPage from './BookImagesPage';

function isNearInt(value, err) {
  var nearbyInt = Math.round(value);
  return Math.abs(value - nearbyInt) < 0.05;
}

class BookImages extends Component {

  constructor(props){
    super(props);
    this.numPages = props.pagesData.length;
    this.currentPage = 0;
    this.renderRange = 4;

    var pagesShouldRender = [];
    for(var i = 0; i < this.numPages; i++){
      if(i <= this.renderRange){
        pagesShouldRender[i] = true;
      }else{
        pagesShouldRender[i] = false;
      }
    }
    this.state = {
      pagesShouldRender: pagesShouldRender
    };

    this.onScroll = this.onScroll.bind(this);
  }

  render(){
    return (
      <View style={{width:this.props.width, height:this.props.height}}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          scrollEventThrottle={1}
          onScroll={this.onScroll}>
            {
              this.props.pagesData.map(
                function(data, index){
                  return (
                    <BookImagesPage
                     key={data.fileName}
                     shouldRender={this.state.pagesShouldRender[index]}
                     source={{uri: data.fileName}}
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
        </ScrollView>
      </View>
    );
  }

  updateRenderedPages(){
    var currentPage = this.currentPage;
    var pagesShouldRender = [];
    for(var i = 0; i < this.numPages; i++){
      if(i < currentPage - this.renderRange){
        pagesShouldRender[i] = false;
      }else if(i <= currentPage + this.renderRange){
        pagesShouldRender[i] = true;
      }else{
        pagesShouldRender[i] = false;
      }
    }
    this.setState({pagesShouldRender: pagesShouldRender});
  }

  onScroll(event){
    var fullLength = event.nativeEvent.contentSize.width;
    var pageWidth = Math.floor(fullLength / this.numPages);
    var x = event.nativeEvent.contentOffset.x;
    var pageFraction = x / pageWidth;
    if(isNearInt(pageFraction)){
      var newPage = Math.round(pageFraction);
      if(this.state.currentPage !== newPage){
        this.props.onPageScroll(newPage);
        this.currentPage = newPage;
        this.updateRenderedPages();
      }
    }else{
      if(pageFraction > this.currentPage){
        if(this.currentPage + 1 < this.numPages){
          this.props.onPageScroll(this.currentPage + 1);
        }
      }else if(pageFraction > 0){
        this.props.onPageScroll(this.currentPage - 1);
      }
    }
  }
}
export default BookImages;
