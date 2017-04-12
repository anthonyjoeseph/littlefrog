// @flow

// app/LogInForm.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Props,
  State
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Orientation from 'react-native-orientation';

import {getAuthorizationHeaders} from '../../../RESTAccess.js';

import ControlPanel from './ControlPanel';
import BookPicker from './BookPicker/BookPicker';
import UserPanel from './UserPanel';

class HomePage extends Component {
  state:State
  constructor(props:Props) {
    super(props);
    this.state = {
      showUserPanel: false,
      authHeaders: {}
    };

    this.dismissUserPanel = this.dismissUserPanel.bind(this);
  }

  componentWillMount(){
    getAuthorizationHeaders()
    .then(function(header){
      this.setState({
        authHeaders: header
      })
    }.bind(this))
    .catch(function(){
      Actions.logInPage();
    });
  }
  componentDidMount(){
    Orientation.lockToLandscapeLeft();
  }

  dismissUserPanel(){
    this.setState({showUserPanel: false});
  }

  render(){
    return (
      <View style={styles.container}>
        <ControlPanel
          showUserPanel={
            function(){
              this.setState({showUserPanel:true});
            }.bind(this)
          }
        />
        <BookPicker
          authHeaders={this.state.authHeaders}/>
        {
          this.state.showUserPanel ? <UserPanel onDismiss={this.dismissUserPanel} /> : <View />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(57, 166, 198)',
    flex:1,
    flexDirection: 'column'
  }
});

export default HomePage;
