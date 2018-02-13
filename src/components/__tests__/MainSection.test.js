import React from 'react';
import { shallow, mount } from 'enzyme';

import MainSection from '../MainSection';



describe('MainSection', () => {
  describe('render', () => {
    it('should render the addTimer', () =>{
      const element = shallow(<MainSection alarms={[]} actions={{}}/>);
      expect(element.find('.main').exists()).toBe(true);
      expect(element.find('li.alarm').exists()).toBe(false);
    });

    it('should render the current timers', () =>{
      const alarms = [
        {
          id: 0,
          text: "HELLO",
          time: 10,
          active: false
        }
      ]
      const element = shallow(<MainSection alarms={alarms} actions={{}}/>);
      expect(element.find('li.alarm').length).toBe(1);
    });

    it('should render the active timers', () =>{
      const alarms = [
        {
          id: 0,
          text: "HELLO",
          time: 10,
          active: false
        },
        {
          id: 1,
          text: "ALARM",
          time: 0,
          active: true
        }
      ]
      const element = shallow(<MainSection alarms={alarms} actions={{}}/>);
      expect(element.find('li.alarm').length).toBe(2);
      expect(element.find('li.alarm-active').length).toBe(1);
      expect(element.find('.button-cancel').length).toBe(1);
      expect(element.find('.button-dismiss').length).toBe(1);
      expect(element.find('.button-snooze').length).toBe(1);
    });
  });

  describe('snooze', () => {
    it('should call the snoozeAlarm action when called with ID', () =>{
      const snoozeAlarm = jest.fn();
      const actions = {snoozeAlarm}
      const element = shallow(<MainSection alarms={[]} actions={actions}/>);
      element.instance().snooze(1);
      expect(snoozeAlarm).toHaveBeenCalledTimes(1);
      expect(snoozeAlarm.mock.calls[0][0]).toBe(1);
      expect(snoozeAlarm.mock.calls[0][1]).toBe(10);
    });
  });

  describe('clearAlarm', () => {
    it('should call the clearAlarm action when called with ID', () =>{
      const clearAlarm = jest.fn();
      const actions = {clearAlarm}
      const element = shallow(<MainSection alarms={[]} actions={actions}/>);
      element.instance().clearAlarm(1);
      expect(clearAlarm).toHaveBeenCalledTimes(1);
      expect(clearAlarm.mock.calls[0][0]).toBe(1);
    });
  });
});