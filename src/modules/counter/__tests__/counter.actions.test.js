import { COUNTER_ACTION_TYPES, ACTION_INCREMENT_COUNTER, ACTION_DECREMENT_COUNTER, ACTION_RESET_COUNTER, ACTION_CHANGE_COUNTER } from "../counter.actions"

describe("counter.actions", () => {
  it("ACTION_INCREMENT_COUNTER", () => {
    const expectedResult = {
      type: COUNTER_ACTION_TYPES.INCREMENT,
    };
    const result = ACTION_INCREMENT_COUNTER();

    expect(result).toStrictEqual(expectedResult);
  });

  it("ACTION_DECREMENT_COUNTER", () => {
    const expectedResult = {
      type: COUNTER_ACTION_TYPES.DECREMENT,
    };
    const result = ACTION_DECREMENT_COUNTER();

    expect(result).toStrictEqual(expectedResult);
  });

  it("ACTION_RESET_COUNTER", () => {
    const expectedResult = {
      type: COUNTER_ACTION_TYPES.RESET,
    };
    const result = ACTION_RESET_COUNTER();

    expect(result).toStrictEqual(expectedResult);
  });

  it("ACTION_CHANGE_COUNTER", () => {
    const expectedResult = {
      type: COUNTER_ACTION_TYPES.CHANGE_COUNTER,
      value: 4
    };
    const result = ACTION_CHANGE_COUNTER(4);

    expect(result).toStrictEqual(expectedResult);
  });
});