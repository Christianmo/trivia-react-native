import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { updateQuestion } from '../../redux/modules/questions';

const mapStateToProps = state => ({
  data: state,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleClick() {
    dispatch(updateQuestion(ownProps.questionIndex, ownProps.answerIndex));
  },
});

class Option extends Component {
  render() {
    const { option, handleClick } = this.props;

    return (
      <Text onPress={handleClick}>{option}</Text>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Option);