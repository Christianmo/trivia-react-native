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
  },
  dot: {
    width: 20,
    fontWeight: '500',
  }
});

class Question extends Component {
  render() {
    const { question, index } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.dot}>{index}</Text>
        <View>
          <Text style={styles.question}>{question.question}</Text>
          <FlatList
            data={question.answers}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => <Option question={item} index={index} />}
          />
        </View>
      </View>
    )
  }
}

export default Question;