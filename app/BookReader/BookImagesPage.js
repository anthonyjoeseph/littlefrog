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

class BookImagesPage extends Component{
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
            <TouchableHighlight onPress={function(){this.props.onQuizSelect()}.bind(this)}>
              <SvgUri width="100" height="100"
                       source={require('./black-rectangle.svg')}  />
            </TouchableHighlight>
          </Image>
        </View>
      );
  }
}

export default BookImagesPage;