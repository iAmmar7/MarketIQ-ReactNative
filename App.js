/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';

import store from './src/store/configureStore';
import {getAllUsers} from './src/store/actions/users';
import SearchField from './src/components/SearchField';
import Home from './src/components/Home';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <SearchField />
        </ScrollView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
