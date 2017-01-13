// app/BookReader/BookPageImage.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform
} from 'react-native';

import TouchableOutline from './TouchableOutline'

class BookImagesPage extends Component{
  constructor(props){
    super(props);

    this.questionIcons = this.questionIcons.bind(this);
  }
  questionIcons(){
    if(this.props.questionIcons){
      return this.props.questionIcons.map(
        function(questionIcon, questionIndex){
          return (
            <TouchableOutline
              key={questionIndex}
              source={questionIcon.icon.resource}
              width={questionIcon.icon.rect.width * this.props.width}
              height={questionIcon.icon.rect.height * this.props.height}
              left={questionIcon.icon.rect.x * this.props.width}
              bottom={questionIcon.icon.rect.y * this.props.height}
              onPress={
                function(){
                  this.props.onQuizSelect(questionIndex);
                }.bind(this)
              }
              tintColor={'red'}
            />
          );
        }.bind(this)
      );
    }else{
      return null;
    }
  }

  animations(){
    if(this.props.animations){
      return this.props.animations.map(
        function(animation, index){
          var resourceName = animation.resource
          if(Platform.OS === 'ios'){
            resourceName += ".gif";
          }
          return (
            <Image
              key={index}
              source={{uri: resourceName}}
              style={
                {
                  position:'absolute',
                  left: animation.rect.x,
                  bottom: animation.rect.y,
                  width: animation.rect.width,
                  height:animation.rect.height
                }
              }
            />
          );
        }.bind(this)
      );
    }else{
      return null;
    }
  }

  render(){
    if(this.props.shouldRender){
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

            {this.animations()}
            {this.questionIcons()}
          </Image>
        </View>
      );
    }else{
      return (
        <View
          width={this.props.width}
          height={this.props.height} />
      );
    }
  }
}

export default BookImagesPage;
