import React from 'react';

export const TodoListItem = (props) => (
  <div>
    <li>{props.todo.title}</li>
    <button onClick={e => props.removeTodo(props.todo)}>
      Remove Todo
    </button>
  </div>
);
