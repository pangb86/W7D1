export const allTodos = (state) => {
  const todoIds = Object.keys(state.todos);
  const newArr = todoIds.map((id) => (
    state.todos[id]
  ));

  return newArr;
};
