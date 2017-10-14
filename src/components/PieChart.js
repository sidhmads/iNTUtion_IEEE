'use strict';
import React, { Component } from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';
import axios from 'axios';
import PieChart from 'react-native-pie-chart';

const Form = t.form.Form;

const chart_wh = 0;
let series = [];
const sliceColor = ['#049b07', '#e51212'];

let Month = t.refinement(t.Number, function (n) {
  return n >= 1 && n < 13;
});

const Query = t.struct({
  Month: Month,
});

const options = {};

class PieCharts extends Component {
  state = { totalAmount: [], leftAmount: [], value: [] };

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
      axios.get('https://glacial-spire-93148.herokuapp.com/budgets/showBudget/2/{value.Month}')
        .then(response => this.setState({ totalAmount: response.data }));
      axios.get('https://glacial-spire-93148.herokuapp.com/budgets/showBudgetLeft/2/{value.Mmonth}')
        .then(response => this.setState({ leftAmount: response.data }));
      this.chart_wh = this.totalAmount;
      this.series = [this.leftAmount, this.totalAmount - this.leftAmount];
    }
  }

  render() {
    return (
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Form
              ref="form"
              type={Query}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              options={options}
            />
            <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.piContainer}>
            <StatusBar
              hidden={true}
            />
            <Text style={styles.piTitle}>PieChart</Text>
            <PieChart
              chart_wh={chart_wh}
              series={series}
              sliceColor={sliceColor}
            />
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  piContainer: {
    flex: 1,
    alignItems: 'center'
  },
  piTitle: {
    fontSize: 24,
    margin: 10
  },
  container: {
    justifyContent: 'center',
    marginTop: 5,
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
});

export default PieCharts;
