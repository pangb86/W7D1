import React from 'react';
import { connect } from 'react-redux';
import { TodoList } from './todo_list';
import {receiveTodo, receiveTodos, removeTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo))
  // receiveTodos: () => dispatch(receiveTodo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
