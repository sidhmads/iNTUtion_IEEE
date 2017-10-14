import React, { Component } from 'react';
import axios from 'axios';
import Button from './Button';

class Facebook extends Component {
  state = { details: [] };
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ details: response.data }));
  }

  renderDetails() {
    console.log(this.state);
  }

  render() {
    <Button>
      Log In
    </Button>
    return null;
  }
}

export default Facebook;
