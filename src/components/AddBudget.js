'use strict';
import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';
import axios from 'axios';

const Form = t.form.Form;

let Month = t.refinement(t.Number, function (n) {
  return n >= 1 && n < 13;
});


// here we are: define your domain model
const Budget = t.struct({
  Month: Month,
  Amount_per_month: t.Number,
});

const options = {};

class AddBudget extends Component {
  state = { value: [] };
  getInitialState() {
      return { value: null };
    }

    onChange(value) {
      this.setState({ value });
    }

  onPress() {
  // call getValue() to get the values of the form
  const value = this.refs.form.getValue();
  if (value) { // if validation fails, value will be null
    console.log(value.Date);
    axios({
      method: 'post',
      url: 'https://glacial-spire-93148.herokuapp.com/budgets/addBudget',
      data: {
        date: value.Date,
        amount: value.Amount,
        uniqueId: '1'
      }
    }).then(response => { this.clearForm(); console.log(response); })
    .catch(e => { console.log(e); });
    }
  }

  clearForm() {
    // clear content from all textbox
    this.setState({ value: null });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={Budget}
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
};

export default AddBudget;
