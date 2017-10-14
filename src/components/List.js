import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import MoneyDetail from './MoneyDetail';
import Button from './Button';

class List extends Component {
  state = { details: [] };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ details: response.data }));
  }

  renderDetails() {
    console.log(this.state);
    return this.state.details.map(detail =>
      <MoneyDetail key={detail.title} detail={detail} />
    );
  }
  render() {
  return (
      <ScrollView>
        {this.renderDetails()}
        <Button> Buy Now </Button>
      </ScrollView>
    );
  }
}

export default List;
