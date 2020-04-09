export const COUNTER_ACTION_TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  CHANGE_COUNTER: 'CHANGE_COUNTER'
};

export const ACTION_INCREMENT_COUNTER = () => {
  return {
    type: COUNTER_ACTION_TYPES.INCREMENT
  }
};

export const ACTION_DECREMENT_COUNTER = () => {
  return {
    type: COUNTER_ACTION_TYPES.DECREMENT
  }
};

export const ACTION_RESET_COUNTER = () => {
  return {
    type: COUNTER_ACTION_TYPES.RESET
  }
};

export const ACTION_CHANGE_COUNTER = (value) => {
  return {
    type: COUNTER_ACTION_TYPES.CHANGE_COUNTER,
    value: value
  }
};