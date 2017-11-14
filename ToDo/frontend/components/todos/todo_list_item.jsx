import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

const updateTodo = function (todo) {
  todo.done = (todo.done === true) ? false : true;
  return todo;
};

class TodoListItem extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      detail: false
    };
  }

  render() {
    return (
      <div>
        <li onClick={e => this.toggleDetail()}>
          {this.props.todo.title}
        </li>
        <button
          onClick={e => this.props.receiveTodo(updateTodo(this.props.todo))}
        >{this.props.todo.done === true ? "Undo" : "Done"}
        </button>
        <TodoDetailViewContainer
          todo={this.props.todo}
          show={(this.state.detail === true) ? "show" : "hide"}
          />
      </div>
    );
  }

  toggleDetail() {
    console.log(this.state.detail);
    if (this.state.detail === false) {
      this.setState({detail: true});
    } else {
      this.setState({detail: false});
    }
  }
}

export default TodoListItem;
