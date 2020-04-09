import { combineReducers } from 'redux';
import todos from './todos/todos.reducer';
import counter from './counter/counter.reducer';
import user from './login/login.reducer';

export default combineReducers({
  todos: todos,
  counter: counter,
  user: user
});