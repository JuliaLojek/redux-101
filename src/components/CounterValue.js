import React from 'react';
import { useSelector } from 'react-redux';
import { selectCounterValue } from '../modules/counter/counter.selectors';

function CounterValue() {
  const counter = useSelector(state => selectCounterValue(state));

  return (
    <div>
      Your current counter value is: {counter}
    </div>
  );

}

export default CounterValue;