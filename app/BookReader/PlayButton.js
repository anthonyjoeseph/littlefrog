// app/BookReader/PlayButton.js

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Sound from 'react-native-sound';

class PlayButton extends Component{

  constructor(props){
    super(props);

    this.music = new Sound('gunshot.wav', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
      } else { // loaded successfully
        console.log('duration in seconds: ' + this.music.getDuration() +
            'number of channels: ' + this.music.getNumberOfChannels());
      }
    });

    this.playAudio.bind(this);
  }

  playAudio(){
    this.music.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  }

  render(){
      return (
          <View style={
            [
              this.props.style,
              {
                backgroundColor: 'orange',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center'
              }
            ]
          }>
            <Text style={{color:'white', fontSize: 40}} onPress={() => {this.playAudio();}}>{this.props.language}</Text>
          </View>
      );
  }
}

export default PlayButton;
