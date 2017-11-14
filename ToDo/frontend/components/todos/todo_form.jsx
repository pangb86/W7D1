import React from 'react';
import { uniqueId } from '../../util/utils';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:""
    };
    window.state = this.state;
  }

  render() {
    console.log(this.state.value);
    return (
      <div>
        <input
          type="text"
          onChange={e => this.handleKeypress(e)}
          value={this.state.value}
        />
        <input
          onClick={e => this.handleSubmit(e)}
          type="submit"
          value="Add Todo"
        />
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo ={
      id: uniqueId(),
      title: this.state.value,
      body: null,
      done: false
    };
    this.props.receiveTodo(newTodo);
    this.setState({ value: "" });
  }

  handleKeypress(e) {
    const value = e.target.value;
    this.setState({value: value});
  }
}

export default TodoForm;
