import { addLast, set, removeAt, merge, update } from 'timm';
import { ADD_ALARM, SNOOZE_ALARM, CLEAR_ALARM, DECREMENT_ALARMS } from '../constants/ActionTypes';

export default function alarms(state = [], action) {
  switch (action.type) {
    case ADD_ALARM:

    case SNOOZE_ALARM:

    case CLEAR_ALARM:

    case DECREMENT_ALARMS:
    
    default:
      return state;
  }
}
