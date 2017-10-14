'use strict';
import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import moment from 'moment';
import t from 'tcomb-form-native';
import axios from 'axios';

const Form = t.form.Form;


// here we are: define your domain model
const Transaction = t.struct({
  Date: t.Date,              // a required string
  Amount: t.Number,
  Name_of_party: t.maybe(t.String),  // an optional string
  Summary: t.maybe(t.String),  // an optional string
  Mode_of_payment: t.maybe(t.String),  // an optional string
});

const options = {
  fields: {
    Date: {
      config: {
        format: (date) => {
          const formatedDate = moment(date).format('DD.MM.YYYY');
          return formatedDate;
        },
      },
    },
  }
};

class TransactionForm extends Component {

  onPress() {
    // call getValue() to get the values of the form
    const value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value.Date);
      axios({
        method: 'post',
        url: 'https://glacial-spire-93148.herokuapp.com/transactions/addTransaction',
        data: {
          date: value.Date,
          amount: value.Amount,
          nameOfParty: value.Name_of_party,
          summary: value.Summary,
          modeOfPayment: value.Mode_of_payment,
          uniqueId: '1'
        }
      }).then(response => { console.log(response); })
      .catch(e => { console.log(e); });
  }
}

  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={Transaction}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
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

export default TransactionForm;
