import React, { Components } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

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

const Question = ({ question, index }) => (
  <View style={styles.container}>
    <Text style={styles.dot}>{index}</Text>
    <View>
      <Text style={styles.question}>{question.question}</Text>
      <FlatList
        data={question.answers}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => <Text>{item}</Text>}
      />
    </View>
  </View>
);

export default Question;