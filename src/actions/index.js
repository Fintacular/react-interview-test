import * as types from '../constants/ActionTypes'

export const addAlarm = () => ({ type: types.ADD_ALARM});
export const snoozeAlarm = () => ({ type: types.SNOOZE_ALARM});
export const clearAlarm = () => ({ type: types.CLEAR_ALARM});
export const decrementAlarms = () => ({type: types.DECREMENT_ALARMS});
