export const TODOS_ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO_STATUS: 'TOGGLE_TODO_STATUS',
  FETCH_INIT_TODOS: 'FETCH_INIT_TODOS',
  SET_FETCHED_TODOS: 'SET_FETCHED_TODOS',
  SET_LOADING_TODOS: 'SET_LOADING_TODOS',
  SET_ERROR_TODOS: 'SET_ERROR_TODOS'
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

export const FETCH_INIT_TODOS = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(todos => dispatch(SET_FETCHED_TODOS(todos)))
      .catch(error => dispatch(SET_ERROR_TODOS()))
  }
};

export const SET_FETCHED_TODOS = (todoList) => {
  return {
    type: TODOS_ACTION_TYPES.SET_FETCHED_TODOS,
    value: todoList
  }
};

export const SET_LOADING_TODOS = () => {
  return {
    type: TODOS_ACTION_TYPES.SET_LOADING_TODOS
  }
};

export const SET_ERROR_TODOS = () => {
  return {
    type: TODOS_ACTION_TYPES.SET_ERROR_TODOS
  }
};