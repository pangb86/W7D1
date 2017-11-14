import React from 'react';
import { TodoListItem } from './todo_list_item';
import TodoForm from './todo_form';

export const TodoList = ({ todos, receiveTodo }) => {
  return (
    <div>
      <ul>
        {
          todos.map(el => <TodoListItem todo={el} key={el.title}/>)
        }
      </ul>
      <TodoForm receiveTodo={receiveTodo}/>
    </div>
  );
};
