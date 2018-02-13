import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './MainSection.css';
class MainSection extends PureComponent {
  
  render() {
    const { alarms } = this.props;
    return (
      <section className="main">
        <ul className="alarm-list">
          {alarms.map(alarm =>
            <li key={`item_${alarm.id}`}></li>
          )}
        </ul>
      </section>
    )
  }
};

MainSection.defaultProps = {
};

MainSection.propTypes = {
};

export default MainSection;