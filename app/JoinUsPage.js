// app/JoinUsPage.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

class JoinUsPage extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Text onPress={() => Actions.pop()}>
          Nice it works!
        </Text>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  background: {
    position: 'relative',
    backgroundColor: 'green'
  }
});

export default JoinUsPage;
