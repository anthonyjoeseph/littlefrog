// app/BookReader/BookText.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Animated
} from 'react-native';

class BookText extends Component{
  constructor(props){
    super(props);
    this.state = {
      translateAnim: new Animated.Value(0),
      isVisible: false
    };
  }

  componentDidMount(){
    this.slide();
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
        <Animated.View style={[this.props.style,
            {
              backgroundColor: '#1586BA',
              transform:
                [{
                  translateX: this.state.translateAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-this.props.style.width, 0]
                  })
                }]
            }
            ]
          } >
          <ScrollView>
            <Text style={{color:'white'}}>{this.props.caption}</Text>
          </ScrollView>
        </Animated.View>
      );
  }
}

export default BookText;
