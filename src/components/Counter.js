import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_INCREMENT_COUNTER, ACTION_DECREMENT_COUNTER, ACTION_RESET_COUNTER } from '../modules/counter/counter.actions';
import { selectCounterValue } from '../modules/counter/counter.selectors';

function Counter() {
  const counter = useSelector(state => selectCounterValue(state));
  const dispatch = useDispatch();
  const increment = () => dispatch(ACTION_INCREMENT_COUNTER());
  const decrement = () => dispatch(ACTION_DECREMENT_COUNTER());
  const reset = () => dispatch(ACTION_RESET_COUNTER());


  return (
    <div>
      Counter: {counter}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter;