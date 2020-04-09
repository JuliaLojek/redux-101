import { TODOS_ACTION_TYPES } from './todos.actions';

const INITIAL_STATE = {
  todos: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.ADD_TODO:
      return state = {...state, todos: [...state.todos, action.value]};
    case TODOS_ACTION_TYPES.TOGGLE_TODO_STATUS:
      return state = {...state, todos: state.todos.map(todo => (
        todo.id !== action.value.id ? todo : action.value
      ))};
    case TODOS_ACTION_TYPES.SET_FETCHED_TODOS:
      return state = {...state, todos: action.value}
    default:
      return state;
  }
}
