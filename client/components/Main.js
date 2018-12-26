import React from 'react';
import axios from 'axios';
import Map from './Map';
import { Link } from 'react-router-dom';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
    // this.redirect = this.redirect.bind();
  }

  async componentDidMount() {
    // const res = await axios.get();
    // const allEvents = res.data.list;
    // this.setState({ events: allEvents });
  }

  // redirect(url) {
  //   console.log('url: ', url);
  //   window.location.replace(url);
  //   window.location.href = url;
  //   return false;
  // }

  render() {
    const events = this.state.events || [];
    return (
      <div className="main">
        <div className="header">
          <h4>FLUSH</h4>
        </div>
        <Map />
      </div>
    );
  }
}
