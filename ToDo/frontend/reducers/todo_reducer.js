import { RECEIVE_TODO, RECEIVE_TODOS, recieveTodo, recieveTodos } from '../actions/todo_actions';
import { merge } from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case(RECEIVE_TODO):
      let newState = merge({}, state);
      newState[`${action.todo.id}`] = action.todo;
      return newState;
    case(RECEIVE_TODOS):
      newState = {};
      action.todos.forEach (el => {
        newState[`${el.id}`] = el;
      });
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
