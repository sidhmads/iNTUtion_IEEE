import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import MoneyDetail from './MoneyDetail';
import Button from './Button';

class List extends Component {
  state = { details: [] };
  componentWillMount() {
    axios.get('https://glacial-spire-93148.herokuapp.com/transactions/getTransactions/1')
      .then(response => this.setState({ details: response.data }));
  }

  renderDetails() {
    console.log(this.state);
    return this.state.details.map(detail =>
      <MoneyDetail key={detail.id} detail={detail} />
    );
  }
  render() {
  return (
      <ScrollView>
        {this.renderDetails()}
      </ScrollView>
    );
  }
}

export default List;
