import React, { Component } from 'react';
import axios  from 'axios';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Question from './Question';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
  }
});

class Questions extends Component {
  state = {
    results: [],
  }
  
  componentDidMount() {
    const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium';
    this.fetchQuestion(url)
  }
  
  fetchQuestion = (url) => {
    try {
      const results = axios.get(url);
      results.then((resp) => {
        const decoratedQuestion = this.decorateQuestions(resp.data.results); 
        this.setState({ results: decoratedQuestion });
      });
    } catch (err) {
      return err;
    }
  }

  decorateQuestions = (questionsArr) => {
    const list = questionsArr.map((question) => {
      const answersLength = question.incorrect_answers.length + 1;
      const i = Math.floor(Math.random() * answersLength);
      const answers = [...question.incorrect_answers];
  
      answers.splice(i, 0, question.correct_answer);
  
      return {
        ...question,
        answers,
        is_correct_answer: false,
        correct_answer_index: i,
      };
    });
  
    return list;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Trivia</Text>
        <FlatList
          data={this.state.results}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => <Question question={item} index={index} />}
        />
      </View>
    );
  }
}

export default Questions;