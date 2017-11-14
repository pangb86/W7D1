import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todo) => dispatch(removeTodo(todo))
});

const mapStateToProps = (state, ownProps) => {
  return ({
    show: ownProps.show,
    todo: ownProps.todo
  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetailView);
