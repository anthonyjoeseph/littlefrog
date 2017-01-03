// app/BookReader/panels/RadioButtonRow.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';

import SubPanel from './SubPanel';
import { RadioButtons } from 'react-native-radio-buttons';

class RadioButtonRow extends Component{
  constructor(props){
    super(props);

    this.state = {
      selectedOption: props.options[0]
    };

    this.setSelectedOption = this.setSelectedOption.bind(this);
    this.renderOption = this.renderOption.bind(this);
    this.renderContainer = this.renderContainer.bind(this);
  }

  componentWillMount(){
    this.props.onSelection(this.state.selectedOption);
  }

  setSelectedOption(selectedOption){
    this.setState({
      selectedOption
    });
    this.props.onSelection(selectedOption);
  }

  renderOption(option, selected, onSelect, index){
    const containerStyle = selected ? { backgroundColor: 'yellow' } : { backgroundColor: 'white' };
    const style = selected ? { fontWeight: 'bold' } : {};

    return (
      <TouchableWithoutFeedback
        onPress={onSelect}
        key={index}>
        <View style={[containerStyle,
          {
           flex:1,
           flexDirection: 'row',
           justifyContent: 'center',
           alignItems: 'center'
          }]}>
          <Text style={style}>{option}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderContainer(optionNodes){
    return <View style={{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'stretch'
    }}>{optionNodes}</View>;
  }

  render(){
      return (
        <RadioButtons
          options={ this.props.options }
          onSelection={ this.setSelectedOption }
          selectedOption={ this.state.selectedOption }
          renderOption={ this.renderOption }
          renderContainer={ this.renderContainer }
        />
      );
  }
}

export default RadioButtonRow;
