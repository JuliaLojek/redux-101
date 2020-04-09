import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_CHANGE_COUNTER } from '../modules/counter/counter.actions';
import { selectCounterValue } from '../modules/counter/counter.selectors';

function EnterValue() {
  const counter = useSelector(state => selectCounterValue(state));
  const dispatch = useDispatch();
  const changeValue = (value) => dispatch(ACTION_CHANGE_COUNTER(value));

  const handleChange = (e) => {
    changeValue(Number(e.target.value));
  }

  return (
    <div>
      <label>enter you counter value:
        <input type="number" value={counter} onChange={handleChange}></input>
      </label>
    </div>
  );

}

export default EnterValue;