import React, { Component } from 'react';
import { Text } from 'react-native';

class Option extends Component {
  clickHandle = (evt) => {
    alert(this.props.index);
  }

  render() {
    const { question, index } = this.props;

    return (
      <Text index={index} onPress={this.clickHandle}>{question}</Text>
    )
  }
}

export default Option;