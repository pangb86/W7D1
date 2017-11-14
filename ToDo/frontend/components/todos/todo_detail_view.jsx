import React from 'react';

const TodoDetailView = (props) => {
  console.log(props);
  return (
    <div className={props.show}>
      <p>body: {props.todo.body}</p>
      <button onClick={e => props.removeTodo(props.todo)}>
        Remove Todo
      </button>
    </div>

  );
};

export default TodoDetailView;
