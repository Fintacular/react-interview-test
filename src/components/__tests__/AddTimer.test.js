import React from 'react';
import { shallow, mount } from 'enzyme';

import AddTimer from '../AddTimer';

const onAdd = jest.fn();
const element = shallow(<AddTimer onAdd={onAdd} text="TEST" time={100} placeholder="TEST PLACEHOLDER" />);

describe('AddTimer', () => {
  describe('render', () => {
    it('should render the addTimer', () =>{
      expect(element.find('form.add-timer').exists()).toBe(true);
    });

    it('should render the placeholder on text input', () => {
      expect(element.find('.input-text').props().placeholder).toBe('TEST PLACEHOLDER');
    });

    it('should render the value on text input', () => {
      expect(element.find('.input-text').props().value).toBe('TEST');
    });

    it('should render the value on time input', () => {
      expect(element.find('.input-time').props().value).toBe(100);
    });
  });

  describe('handeSubmit', () => {
    it('should trigger onAdd when called', () => {
      element.instance().handleSubmit(new Event("submit", {"bubbles":true, "cancelable":true}));
      expect(onAdd).toHaveBeenCalledTimes(1);
    });

    it('should trigger with default value if no text is entered', () => {
      element.setState({text: ''});
      element.instance().handleSubmit(new Event("submit", {"bubbles":true, "cancelable":true}));
      expect(onAdd).toHaveBeenCalledTimes(2);
      expect(onAdd.mock.calls[1][0]).toBe('Default Timer');
      expect(onAdd.mock.calls[1][1]).toBe(100);
    });

    it('should not trigger if no time is entered', () => {
      element.setState({text: 'TEST', time: 0});
      element.instance().handleSubmit(new Event("submit", {"bubbles":true, "cancelable":true}));
      expect(onAdd).toHaveBeenCalledTimes(2);
    });

    it('should trigger if correct params have been entered', () => {
      element.setState({text: 'TEST', time: 10});
      element.instance().handleSubmit(new Event("submit", {"bubbles":true, "cancelable":true}));
      expect(onAdd).toHaveBeenCalledTimes(3);
      expect(onAdd.mock.calls[2][0]).toBe('TEST');
      expect(onAdd.mock.calls[2][1]).toBe(10);
    });
    
  });

  describe('setText', () => {
    it('should set the text from event in state',() => {
      element.instance().setText({target: {value: 'NEW'}});
      expect(element.state('text')).toBe('NEW');
    });
  });

  describe('setTime', () => {
    it('should set the time from event in state',() => {
      element.instance().setTime({target: {value: '10'}});
      expect(element.state('time')).toBe(10);
    });

    it('should reset the time if value is not a number',() => {
      element.instance().setTime({target: {value: 'asd'}});
      expect(element.state('time')).toBe('');
    });
  });
});
