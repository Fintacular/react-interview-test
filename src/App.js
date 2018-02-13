import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from './components/Header'
import MainSection from './components/MainSection'
import * as AlarmActions from './actions'

class App extends PureComponent{

  componentDidMount() {
    const { actions } = this.props;
    this.timer = setInterval(actions.decrementAlarms, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {alarms, actions} = this.props;
    return (
      <React.Fragment>
        <Header addAlarm={actions.addAlarm} />
        <MainSection alarms={alarms} actions={actions} />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  alarms: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  alarms: state.alarms
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AlarmActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
