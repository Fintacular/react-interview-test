import alarms from '../alarms';
import * as types from '../../constants/ActionTypes'

describe('actions reducer', () => {
  
  it('should handle initial state', () => {
    expect(
      alarms(undefined, {})
    ).toEqual([])
  });

  describe('ADD_ALARM', () => {
    it('should handle ADD_ALARM with no state', () => {
      expect(
        alarms([], {
          type: types.ADD_ALARM,
          text: 'FIRE IN THE DISCO',
          time: 20
        })
      ).toEqual([
        {
          text: 'FIRE IN THE DISCO',
          time: 20,
          active: false,
          id: 0
        }
      ]);
    });

    it('should handle ADD_ALARM with existing state', () => {
      expect(
        alarms([
          {
            text: 'FIRE IN THE TACO BELL',
            time: 20,
            active: false,
            id: 0
          }
        ], {
          type: types.ADD_ALARM,
          text: 'FIRE IN THE DISCO',
          time: 30
        })
      ).toEqual([
        {
          text:'FIRE IN THE TACO BELL',
          time: 20,
          active: false,
          id: 0
        },
        {
          text: 'FIRE IN THE DISCO',
          time: 30,
          active: false,
          id: 1
        }
      ]);
    });
  });
  
  describe('ADD_ALARM', () => {
    it('should handle SNOOZE_ALARM', () => {
      expect(
        alarms([
          {
            text: 'FIRE AT THE GATES OF HELL',
            active: true,
            time: 0,
            id: 0
          }
        ], {
          type: types.SNOOZE_ALARM,
          id: 0,
          time: 10
        })
      ).toEqual([
        {
          text: 'FIRE AT THE GATES OF HELL',
          active: false,
          time: 10,
          id: 0
        }
      ]);
    });
    it('should hande SNOOZE_ALARM with no state', () => {
      expect(
        alarms([], {
          type: types.SNOOZE_ALARM,
          id:1,
          time: 10
        })
      ).toEqual([]);
    })
  });
  
  describe('CLEAR_ALARM', () => {
    it('should handle CLEAR_ALARM', () => {
      expect(
        alarms([
          {
            text: 'DONT YOU WANNA KNOW WHO KEEPS STARTING FIRES',
            active: false,
            time: 20,
            id: 0
          }
        ], {
          type: types.CLEAR_ALARM,
          id: 0
        })
      ).toEqual([]);
    });
    it('should handle CLEAR_ALARM with no state', () => {
      expect(
        alarms([], {
          type: types.CLEAR_ALARM,
          id:1
        })
      ).toEqual([]);
    });
  });

  describe('DECREMENT_ALARMS', () => {
    it('should handle DECREMENT_ALARMS', () => {
      expect(
        alarms([
          {
            text: 'ITS MY DESIRE',
            active: false,
            time: 20,
            id: 0
          }
        ], {
          type: types.DECREMENT_ALARMS
        })
      ).toEqual([{
        text: 'ITS MY DESIRE',
        active: false,
        time: 19,
        id: 0
      }]);
    });

    it('should handle DECREMENT_ALARMS with no state', () => {
      expect(
        alarms([], {
          type: types.DECREMENT_ALARMS
        })
      ).toEqual([]);
    });
  });

  it('should handle DECREMENT_ALARMS when it hits 0', () => {
    expect(
      alarms([
        {
          text: 'DONT YOU WANNA KNOW HOW WE KEEP STARTING FIRES',
          active: false,
          time: 1,
          id: 0
        }
      ], {
        type: types.DECREMENT_ALARMS
      })
    ).toEqual([{
      text: 'DONT YOU WANNA KNOW HOW WE KEEP STARTING FIRES',
      active: true,
      time: 0,
      id: 0
    }]);
  });

  it('should handle DECREMENT_ALARMS when already at 0', () => {
    expect(
      alarms([
        {
          text: 'ITS MY DESIRE',
          active: false,
          time: 0,
          id: 0
        }
      ], {
        type: types.DECREMENT_ALARMS
      })
    ).toEqual([{
      text: 'ITS MY DESIRE',
      active: false,
      time: 0,
      id: 0
    }]);
  });
});
