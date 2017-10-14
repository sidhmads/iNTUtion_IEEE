//Index.android.js - place code in here for android

// import a library to help create a library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import TransactionForm from './src/components/TransactionForm';
import List from './src/components/List';
import AddBudget from './src/components/AddBudget';
import PieCharts from './src/components/PieChart';
// create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Anex!'} />
    <PieCharts />
  </View>
  );
// render it to the device
AppRegistry.registerComponent('albums', () => App);
