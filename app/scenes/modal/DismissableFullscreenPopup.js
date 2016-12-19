// app/DismissableFullscreenPopup.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

class DismissableFullscreenPopup extends Component {
  constructor(props) {
    super(props)
    this.isDisimissing = false;
    // set state with passed in props
    var {width, height} = Dimensions.get('window');
    this.state = {
      dimensions: {
        width: width,
        height: height
      },
      fadeAnim: new Animated.Value(0)
    }
    // bind functions
    this.dismiss = this.dismiss.bind(this)
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 300
      }
    ).start();
  }

  dismiss() {
    if(!this.isDisimissing){
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 0,
          duration: 300
        }
      ).start(() => {
        this.props.onDismiss();
      });
      this.isDisimissing = true;
    }
  }

  // show or hide Modal based on 'hide' prop
  render() {
    return (
      <Animated.View style={[styles.outermostView, {
        opacity: this.state.fadeAnim,
        width: this.state.dimensions.width,
        height: this.state.dimensions.height
      }]}>
        <TouchableHighlight
          style={styles.touchableBackground}
          underlayColor='rgba(0, 0, 0, 0.0)'
          onPress={this.dismiss}>
          <View style={styles.transluscentBackground}>
            <TouchableWithoutFeedback>
              {this.props.children}
            </TouchableWithoutFeedback>
          </View>
        </TouchableHighlight>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  outermostView:{
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position:'absolute',
    left:0, top:0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  touchableBackground:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  transluscentBackground:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DismissableFullscreenPopup;
