
import React, {PropTypes} from 'react';
import {View, Text, StyleSheet,TouchableHighlight,ScrollView,Image, Component, AppRegistry } from 'react-native';


class Container extends React.Component {

render() {
    return (
      <ScrollView style={styles.scrollViewStyle}>
          <View>
            <Text style={styles.textStyle}> Example for ScrollView and Fixed Footer</Text>
          </View>
      </ScrollView>
    );
  }
}
