import * as types from '../../constants/ActionTypes';
import * as actions from '../index';

describe('alarm actions', () => {
  it('addAlarm should create ADD_ALARM action', () => {
    expect(actions.addAlarm('FIRE IN THE DISCO', 100)).toEqual({
      type: types.ADD_ALARM,
      text: 'FIRE IN THE DISCO',
      time: 100
    });
  });
  it('snoozeAlarm should create SNOOZE_ALARM action', () => {
    expect(actions.snoozeAlarm(10)).toEqual({
      type: types.SNOOZE_ALARM,
      id: 10
    });
  });
  it('clearAlarm should create CLEAR_ALARM action', () => {
    expect(actions.clearAlarm(10)).toEqual({
      type: types.CLEAR_ALARM,
      id: 10
    });
  });
  it('decrementAlarms should create DECREMENT_ALARMS action', () => {
    expect(actions.decrementAlarms()).toEqual({
      type: types.DECREMENT_ALARMS
    });
  });
})
