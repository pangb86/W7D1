import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root.jsx';
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  ReactDOM.render(<Root store={store}/>, root);
});
