import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Option from './Option';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    flexDirection: 'row',
  },
  question: {
    marginBottom: 5,
    fontWeight: '500',
  },
  dot: {
    width: 20,
    fontWeight: '500',
  }
});

class Question extends Component {
  render() {
    const { question, questionIndex } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.dot}>{questionIndex + 1}</Text>
        <View>
          <Text>{`${question.is_correct_answer}`}</Text>
          <Text style={styles.question}>{question.question}</Text>
          <FlatList
            data={question.answers}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => <Option option={item} answerIndex={index} questionIndex={questionIndex} />}
          />
        </View>
      </View>
    )
  }
}

export default Question;