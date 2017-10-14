//Index.android.js - place code in here for android

// import a library to help create a library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import Button from './src/components/Button';
import List from './src/components/List';
// create a Component
const App = () => (
  <View>
    <Header headerText={'Anex!'} />
    <List />
    <Button />
  </View>
  );
// render it to the device
AppRegistry.registerComponent('albums', () => App);
