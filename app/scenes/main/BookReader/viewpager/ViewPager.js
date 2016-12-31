// app/BookReader/ViewPager.js

import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';

function isNearInt(value, err) {
  var nearbyInt = Math.round(value);
  return Math.abs(value - nearbyInt) < 0.05;
}

class ViewPager extends Component {

  constructor(props){
    super(props);
    this.currentPage = 0;
    this.hasSentScrollEvent = false;
    this.hasSentNewPageEvent = true;

    var pagesShouldRender = [];
    for(var i = 0; i < props.numPages; i++){
      if(i <= this.props.renderRange){
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
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        scrollEventThrottle={1}
        onScroll={this.onScroll}>
          {
            React.Children.map(
              this.props.children,
              function(child, index){
                return React.cloneElement(child, {
                  shouldRender: this.state.pagesShouldRender[index]
                })
              }.bind(this)
            )
          }
      </ScrollView>
    );
  }

  updateRenderedPages(){
    var currentPage = this.currentPage;
    var pagesShouldRender = [];
    for(var i = 0; i < this.props.numPages; i++){
      if(i < currentPage - this.props.renderRange){
        pagesShouldRender[i] = false;
      }else if(i <= currentPage + this.props.renderRange){
        pagesShouldRender[i] = true;
      }else{
        pagesShouldRender[i] = false;
      }
    }
    this.setState({pagesShouldRender: pagesShouldRender});
  }

  onScroll(event){
    var fullLength = event.nativeEvent.contentSize.width;
    var pageWidth = Math.floor(fullLength / this.props.numPages);
    var x = event.nativeEvent.contentOffset.x;
    var pageFraction = x / pageWidth;
    if(isNearInt(pageFraction)){
      if(!this.hasSentNewPageEvent){
        this.hasSentNewPageEvent = true;
        this.hasSentScrollEvent = false;
        var newPage = Math.round(pageFraction);
        if(this.state.currentPage !== newPage){
          this.currentPage = newPage;
          this.updateRenderedPages();
        }
      }
    }else{
      if(!this.hasSentScrollEvent){
        this.hasSentNewPageEvent = false;
        this.hasSentScrollEvent = true;
        if(pageFraction > this.currentPage){
          if(this.currentPage + 1 < this.props.numPages){
            this.props.onPageScroll(this.currentPage + 1);
          }
        }else if(pageFraction > 0){
          this.props.onPageScroll(this.currentPage - 1);
        }
      }
    }
  }
}
export default ViewPager;
