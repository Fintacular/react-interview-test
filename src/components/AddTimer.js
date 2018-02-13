import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddTimer.css';
class AddTimer extends Component {

  handleSubmit = e => {
  }

  render() {
    return (<form onSubmit={this.handleSubmit} className="add-timer">
        <input type="text" />
      </form>
    )
  }
}

AddTimer.propTypes = {
  onAdd: PropTypes.func.isRequired,
}

export default AddTimer;