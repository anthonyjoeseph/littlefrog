// app/QuizMultChoice.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { RadioButtons } from 'react-native-radio-buttons';
import Button from 'react-native-button';

import DismissableFullscreenPopup from '../DismissableFullscreenPopup'
import QuizMultChoice from './QuizMultChoice'

const questionExpl = "What is my favorite food?";
const optionsExpl = [
  "Bananas",
  "Razors",
  "Fried Chicken",
  "Pencil Shavings"
];

class QuizPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: props.question,
      options: props.options,
      correctIndex: props.correctIndex,
      isShowingQuestion: true,
      isAnswerCorrect: false
    };

    this.popupContent = this.popupContent.bind(this);
  }

  popupContent(){
    if(this.state.isShowingQuestion){
      return (
        <QuizMultChoice
          question={this.state.question}
          options={this.state.options}
          correctIndex={this.state.correctIndex}
          onCorrect={() => { this.setState({isShowingQuestion: false, isAnswerCorrect: true}); } }
          onWrong={() => { this.setState({isShowingQuestion: false, isAnswerCorrect: false}); } }
        />
      );
    }else{
      return (
        <View style={{flexDirection:'column'}}>
          <Text>{(this.state.isAnswerCorrect ? 'Right!' : "Wrong!")}</Text>
          <Button onPress={()=>{this.refs.dismissableScreen.dismiss()}}>BACK</Button>
        </View>
      );
    }
  }

  render() {
    return (
      <DismissableFullscreenPopup
        ref='dismissableScreen'
        onDismiss={() => {Actions.pop();}}>
        <View style={styles.popupView}>
          {this.popupContent()}
        </View>
      </DismissableFullscreenPopup>
    )
  }
}

const styles = StyleSheet.create({
  popupView:{
    backgroundColor: 'white',
    width: 300,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});

export default QuizPage;
