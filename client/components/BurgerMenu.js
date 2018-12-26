import React, { Component } from 'react';

export default class BurgerMenu extends Component {
  render() {
    return (
      <div className="burger-menu">
        <div className="bar1" key="b1">
          {''}
        </div>
        <div className="bar2" key="b2" />
        <div className="bar3" key="b3" />
      </div>
    );
  }
}
