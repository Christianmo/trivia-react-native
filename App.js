import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Questions  from './components/Questions';
import { StyleSheet, View, Text } from 'react-native';
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
  },
  options: {
    color: '#fff',
    marginHorizontal: 10,
  }
});

class App extends React.Component {
  static navigationOptions = {
    title: 'Questions',
    headerLeft: <View><Text style={styles.options}>Questions</Text></View>,
    headerRight: <View><Text style={styles.options}>Dismiss</Text></View>,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      alignSelf: 'center',
      marginHorizontal: 0,
      textAlign: 'center',
      width: '100%',
    },
  }

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

export default createStackNavigator({
  Home: {
    screen: App
  },
});