import React from 'react';
import { TodoListItem } from './todo_list_item';
import TodoForm from './todo_form';

export const TodoList = ({ todos, receiveTodo, removeTodo}) => {
  return (
    <div>
      <ul>
        {
          todos.map(el => <TodoListItem
            todo={el}
            key={el.id}
            removeTodo ={removeTodo}
          />)
        }
      </ul>
      <TodoForm receiveTodo={receiveTodo}/>
    </div>
  );
};
