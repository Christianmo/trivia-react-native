import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Questions  from './components/Questions';
import { StyleSheet, View } from 'react-native';
import questionReducer from './redux/modules/questions';

const store = createStore(
  questionReducer,
  applyMiddleware(thunk)
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 300,
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Questions />
        </View>
      </Provider>
    );
  }
}