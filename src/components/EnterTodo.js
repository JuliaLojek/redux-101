import React, { Component } from 'react';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { ADD_TODO } from '../modules/todos/todos.actions';
import LogInForm from './LogInForm';

class EnterTodo extends Component {
  state = {
    inputValue: ""
  }

  handleSubmit = () => {
    this.props.actionChange({title: this.state.inputValue, completed: false, id: Date.now()});
    this.setState({ inputValue: "" });
  }

  render() {
    return (
      this.props.isLoggedIn
        ?
        <div>
          <h3>Enter new todo:</h3>
          <input type="text" value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.value})}></input>
          <button onClick={this.handleSubmit}>add</button>
          <TodoList />
        </div>
        :
        <LogInForm />
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  actionChange: (actionParam) => dispatch(ADD_TODO(actionParam))
});

export default connect(mapStateToProps, mapDispatchToProps)(EnterTodo);