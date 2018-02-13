import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AddTimer from './AddTimer';

import './Header.css';

class Header extends PureComponent {

  handleAdd = (text, time) => {}

  render() {
    return (
      <header className="header">
        <h1>Timers</h1>
        <AddTimer onAdd={this.handleAdd} placeholder="Enter a new timer" />
      </header>
    )
  }
}

Header.propTypes = {
}

export default Header;