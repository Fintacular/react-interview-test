import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from '../Header';
import AddTimer from '../AddTimer';

const addAlarm = jest.fn();
const element = shallow(<Header addAlarm={addAlarm}/>);

describe('Header', () => {
  describe('render', () => {
    it('should render the header', () =>{
      expect(element.find('header').exists()).toBe(true);
    });

    it('should render an AddTimer', () =>{ 
      expect(element.find(AddTimer).exists()).toBe(true);
    });
  });

  describe('handleSave', () => {
    it('should call the passed in addAlarm when called', () => {
      element.instance().handleAdd('TEST', 100);
      expect(addAlarm).toHaveBeenCalledTimes(1);
      expect(addAlarm.mock.calls[0][0]).toBe('TEST');
      expect(addAlarm.mock.calls[0][1]).toBe(100);
    });
  });
});
