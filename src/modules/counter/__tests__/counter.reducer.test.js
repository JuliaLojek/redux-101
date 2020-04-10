import reducer from '../counter.reducer';
import { COUNTER_ACTION_TYPES } from '../counter.actions';

const MOCK_INITIAL_STATE = {
  counter: 4
};

describe("counter.reducer", () => {
  it("should return correct state for action increment", () => {
    const action = {
      type: COUNTER_ACTION_TYPES.INCREMENT,
    };
    const result = reducer(MOCK_INITIAL_STATE, action);
    const expectedResult = { counter: 5 };

    expect(result).toStrictEqual(expectedResult);
  });

  it("should return correct state for action decrement", () => {
    const action = {
      type: COUNTER_ACTION_TYPES.DECREMENT,
    };
    const result = reducer(MOCK_INITIAL_STATE, action);
    const expectedResult = { counter: 3 };

    expect(result).toStrictEqual(expectedResult);
  });

  it("should return correct state for action reset", () => {
    const action = {
      type: COUNTER_ACTION_TYPES.RESET,
    };
    const result = reducer(MOCK_INITIAL_STATE, action);
    const expectedResult = { counter: 0 };

    expect(result).toStrictEqual(expectedResult);
  });

  it("should return correct state for action change value", () => {
    const action = {
      type: COUNTER_ACTION_TYPES.CHANGE_COUNTER,
      value: 7
    };
    const result = reducer(MOCK_INITIAL_STATE, action);
    const expectedResult = { counter: 7 };

    expect(result).toStrictEqual(expectedResult);
  });
});