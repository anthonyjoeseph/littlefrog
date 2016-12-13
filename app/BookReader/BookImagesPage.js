// app/BookReader/BookPageImage.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import SvgUri from 'react-native-svg-uri';
import AImage from 'react-native-image-animation';

class BookImagesPage extends Component{
  constructor(props){
    super(props);
    this.quizButton = this.quizButton.bind(this);
  }
  quizButton(){
    if(this.props.hasButton){
      return (
        <TouchableHighlight onPress={function(){this.props.onQuizSelect()}.bind(this)}>
          <SvgUri width="100" height="100"
                   source={require('./black-rectangle.svg')}  />
        </TouchableHighlight>
      );
    }else{
      return null;
    }
  }

  animations(){
    if(this.props.animations){
      return this.props.animations.map(
        function(animation){
          return (
          <AImage
               key={animation.frames[0]}
               resizeMode='stretch'
               animationRepeatCount= {0}
               animationDuration={ animation.durationMillis }
               animationImages={
                animation.frames.map(
                  function(frame){
                   return ( {uri:frame} );
                  }
                )
               }
               style={
                 {
                   position:'absolute',
                   left: animation.rect.x,
                   bottom: animation.rect.y,
                   width: animation.rect.width,
                   height:animation.rect.height
                 }
               } />
          );
        }.bind(this)
      );
    }else{
      return null;
    }
  }

  render(){
      return (
        <View style={
          {
            width: this.props.width,
            height: this.props.height,
            flexDirection: 'row',
            justifyContent:'flex-start',
            alignItems:'stretch'
          }}>
          <Image
            resizeMode='contain'
            source={this.props.source}
            style={{flex:1, width: null, justifyContent:'center', alignItems:'center'}}>
            {this.quizButton()}
            {this.animations()}
          </Image>
        </View>
      );
  }
}

export default BookImagesPage;
