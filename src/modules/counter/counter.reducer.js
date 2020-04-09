import { COUNTER_ACTION_TYPES } from './counter.actions';

const INITIAL_STATE = {
  counter: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTER_ACTION_TYPES.INCREMENT:
      return state = {...state, counter: state.counter + 1};
    case COUNTER_ACTION_TYPES.DECREMENT:
      return state = {...state, counter: state.counter - 1};
    case COUNTER_ACTION_TYPES.RESET:
      return state = {...state, counter: 0};
    case COUNTER_ACTION_TYPES.CHANGE_COUNTER:
      return state = {...state, counter: action.value};
    default:
      return state;
  }
}