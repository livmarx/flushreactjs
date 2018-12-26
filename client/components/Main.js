import React from 'react';
import axios from 'axios';
import Map from './Map';
import BurgerMenu from './BurgerMenu';
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
    return (
      <div className="main">
        <div className="header">
          <BurgerMenu />
          <h4>FLUSH</h4>
          <h3> (know where to go)</h3>
        </div>
        <Map
          center={{ lat: 40.756795, lng: -73.954298 }}
          zoom={14}
          containerElement={<div style={{ height: `100vh`, width: '100vw' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <h5>Powered by Google Maps</h5>
      </div>
    );
  }
}
