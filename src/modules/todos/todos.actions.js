export const TODOS_ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO_STATUS: 'TOGGLE_TODO_STATUS',
  SET_FETCHED_TODOS: 'SET_FETCHED_TODOS'
};

export const ADD_TODO = (todo) => {
  return {
    type: TODOS_ACTION_TYPES.ADD_TODO,
    value: todo
  }
};

export const TOGGLE_TODO = (todo) => {
  return {
    type: TODOS_ACTION_TYPES.TOGGLE_TODO_STATUS,
    value: todo
  }
};

export const SET_FETCHED_TODOS = (todoList) => {
  return {
    type: TODOS_ACTION_TYPES.SET_FETCHED_TODOS,
    value: todoList
  }
};