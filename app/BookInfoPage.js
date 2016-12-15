// app/BookInfoPage.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Button from 'react-native-button'

import { Actions } from 'react-native-router-flux';

var AImage = require('react-native-image-animation');

class BookInfoPage extends Component {

  constructor(props) {
    super(props)
    this.animationImages = [
      {uri: 'frame1'},
      {uri: 'frame2'},
      {uri: 'frame3'},
      {uri: 'frame4'},
      {uri: 'frame5'},
      {uri: 'frame6'},
      {uri: 'frame7'},
      {uri: 'frame8'},
      {uri: 'frame9'}
    ];
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:0.5, justifyContent: 'flex-end'}}>
          <Text style={styles.broccoliLogo}>Little Frog Doesn&#39;t Listen</Text>
          <Text style={styles.title}>Origin: Korea</Text>
        </View>
        <View style={styles.buttons}>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'stretch'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Image
                source={{uri:'spongebob'}}
                style={{width:100, height:100}}
              />
            </View>
            <Text style={{flex: 1, color:'white'}}>This is a traditional story from Korea. Millstone is a rock that grinds the grains into powder. Discover what a magical millstone can do and learn why the ocean is so salty! Remember to flip the page whenever you hear the chime.</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <Button style={{color:'yellow'}} onPress={() => Actions.bookReader()}>Start Reading</Button>
            <Button style={{color:'green'}} onPress={() => Actions.bookReader()}>Read to Me</Button>
          </View>
        </View>
      </View>
    );
  }
}

/*
<AImage
       resizeMode='stretch'
       animationRepeatCount= {0}
       animationDuration={100}
       animationImages={this.animationImages}
       style={{width:100, height:100}} />
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#1586BA',
    flexDirection: 'column',
    height: 100,
    padding: 20
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  broccoliLogo: {
    fontSize: 40,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  buttons: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column'
  }
});

export default BookInfoPage;
