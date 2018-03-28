import React from 'react';
import Questions  from './components/Questions';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 30,
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Questions />
      </View>
    );
  }
}