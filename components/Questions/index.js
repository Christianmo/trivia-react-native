import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Question from './Question';
import { fetchQuestion } from '../../redux/modules/questions';

const mapStateToProps = state => ({
  data: state,
});

const mapDispatchToProps = dispatch => ({
  handleFetch(url) {
    dispatch(fetchQuestion(url));
  },
});

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
  }
});

class Questions extends Component {
  state = {
    results: 0,
  }

  componentDidMount() {
    const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium';
    this.props.handleFetch(url);
  }
  
  showResults = () => {
    const { data } = this.props;
    const correctAnswers = data.filter(item => item.is_correct_answer);
    this.setState({ results: correctAnswers.length });
  }

  render() {
    const { data } = this.props;
    const { results } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Trivia</Text>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => <Question question={item} questionIndex={index} />}
        />
        <Text style={styles.title}>{`${results} correct answers`}</Text>
        <Button
          onPress={this.showResults} 
          title="Get Results" 
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
