//Index.android.js - place code in here for android

// import a library to help create a library
import React, {Component} from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Header from './src/components/Header';
import Button from './src/components/Button';
import List from './src/components/List';
import check from './src/components/check';
import TransactionForm from './src/components/TransactionForm';
import HomePageForm from './src/components/HomePageForm';

// create a Component
/*const App = () => (
  <View>
    <Header headerText={'Anex!'} />
    <List />
    <Button />
    <Text> does it ? </Text>
  </View>
  );
// render it to the device

AppRegistry.registerComponent('albums', () => App);
*/
const albums = StackNavigator({

    HomePageForm: { screen: HomePageForm },
    TransactionForm: { screen: TransactionForm },
    Check: { screen: check },
    List: { screen: List },

});
AppRegistry.registerComponent('albums', () => albums);
