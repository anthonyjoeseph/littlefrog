// app/BookReader/LanguagePanel.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

class LanguagePanel extends Component{
  constructor(props){
    super(props);

    this.languages = [
      "en",
      "fr",
      "ko",
      "jp"
    ];

    this.state = {
      translateAnim: new Animated.Value(0),
      ownWidth: 1000, //initialize at a high value to avoid drawing before width is correctly updated
      isVisible: false,
      languages: this.languages
    }
  }

  slide(){
    var newFinalValue
    if(this.state.isVisible){
      newFinalValue = 0;
      this.state.isVisible = false;
    }else{
      newFinalValue = 1;
      this.state.isVisible = true;
    }
    Animated.timing(
      this.state.translateAnim,
      {
        toValue: newFinalValue,
        duration: 1000
      }
    ).start();
  }

  render(){
      return (
        <Animated.View
          style={
            [
              this.props.style,
              {
                backgroundColor: 'purple',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: 400,
                transform:
                  [{
                    translateX: this.state.translateAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-this.state.ownWidth, 0]
                    })
                  }]
              }
            ]
          }
          onLayout={function(event){
            this.setState({ownWidth: event.nativeEvent.layout.width});
          }.bind(this)}>
          {
            this.state.languages.map(
              function(language){
                return (
                  <Text
                    key={language}
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: 'red',
                      fontSize:40
                    }}
                    onPress={() => {this.props.onChangeLanguage(language)}}>
                  {language}
                  </Text>
                );
              }.bind(this)
            )
          }
        </Animated.View>
      );
  }
}

/*


*/

export default LanguagePanel;
