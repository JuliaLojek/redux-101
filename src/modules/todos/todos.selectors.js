
export const selectDoneTodos = (todos) => {
  return todos.filter(todo => todo.completed);
};

export const selectUndoneTodos = (todos) => {
  return todos.filter(todo => todo.completed === false);
};