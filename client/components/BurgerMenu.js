import React, { Component } from 'react';

export default class BurgerMenu extends Component {
  render() {
    return (
      <div className="burger-menu">
        <div className="bar" key="b1" />
        <div className="bar" key="b2" />
        <div className="bar" key="b3" />
      </div>
    );
  }
}
