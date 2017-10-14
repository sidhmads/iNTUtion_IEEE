//Index.android.js - place code in here for android

// import a library to help create a library
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Header from './Header';
import Button from './Button'

import List from './List';
// create a Component


export default class check extends React.Component {

  linker(comp) {
  //  alert('hi');
  this.props.navigation.navigate(comp);
  }

  render() {
    return (
      <View>
        <Header headerText={'Anex!'} />

          <TouchableHighlight onPress={this.linker.bind(this, 'List')}>
        <Text> does it ? </Text>
  
          </TouchableHighlight>
      </View>
    );
  }
}
