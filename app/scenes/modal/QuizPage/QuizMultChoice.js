// app/QuizMultChoice.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';

import Button from 'react-native-button'
import { RadioButtons } from 'react-native-radio-buttons';

const options = [
  "Option A",
  "Option B",
  "Option C",
  "Option D"
];

class QuizMultChoice extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedOptionIndex: -1
    }

    this.setSelectedOption = this.setSelectedOption.bind(this);
    this.renderOption = this.renderOption.bind(this);
    this.renderContainer = this.renderContainer.bind(this);
    this.answer = this.answer.bind(this);
  }

  setSelectedOption(selectedOption){
    var selectedOptionIndex = this.props.options.indexOf(selectedOption);
    this.setState({
      selectedOption,
      selectedOptionIndex: selectedOptionIndex
    });
  }

  renderOption(option, selected, onSelect, index){
    const style = selected ? { fontWeight: 'bold' } : {};

    return (
      <TouchableWithoutFeedback onPress={onSelect} key={index}>
        <View>
          <Text style={style}>{option}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderContainer(optionNodes){
    return <View>{optionNodes}</View>;
  }

  answer(){
    if(this.state.selectedOptionIndex == this.props.correctIndex){
      this.props.onCorrect();
    }else{
      this.props.onWrong();
    }
  }

  render() {
    return (
      <View>
        <Text style={{fontSize:25}}>{this.props.question}</Text>
        <RadioButtons
          options={ this.props.options }
          onSelection={ this.setSelectedOption }
          selectedOption={this.state.selectedOption }
          renderOption={ this.renderOption }
          renderContainer={ this.renderContainer }
        />
        <Text style={{color:'rgb(150, 150, 150)'}}>Selected option: {this.state.selectedOption || 'none'}</Text>
        <Button onPress={this.answer}>ANSWER</Button>
      </View>
    )
  }
}

export default QuizMultChoice;
