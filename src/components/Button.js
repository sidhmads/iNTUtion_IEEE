import React from 'react';
import { Text, TouchableOpacity, TouchableHighlight } from 'react-native';

export default class Button extends React.Component {

  linker(comp) {
  //  alert('hi');
  this.props.navigation.navigate(comp);
  }
  render() {
    return (

      <TouchableHighlight onPress={this.linker.bind(this, 'List')}>
      <TouchableOpacity>
        <Text> Click Me!!!! </Text>
      </TouchableOpacity>
      </TouchableHighlight>

    );
  }
}
