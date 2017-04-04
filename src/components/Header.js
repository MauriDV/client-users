import React, { Component } from 'react';
import Session from './Session';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Usuarios</h1>
        <p>
          <Session/>
        </p>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Header;
