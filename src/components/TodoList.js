import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TOGGLE_TODO } from '../modules/todos/todos.actions';

class TodoList extends Component {
  handleStatusChange = (task) => {
    this.props.actionChange({...task, completed: !task.completed});
  }

  render() {
    return (
      <div>
        {this.props.isError
          ?
          <p>I am really sad, I couldn't load your todos :(</p>
          :
          this.props.isLoading
            ?
            <p>Give me a moment, I'm loading your todos...</p>
            :
            <div>
              <h3>All your todos:</h3>
              {this.props.todos.map(task => (
              <div key={task.id}>
                <button onClick={() => this.handleStatusChange(task)}>
                  {task.completed ? "x" : "-"}
                </button>
                <span
                  style={task.completed
                    ?
                    {textDecoration: "line-through"}
                      :
                      {textDecoration: "none"}}>
                  {task.title}
                </span>
              
              </div>
              ))}
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  isError: state.todos.isError,
  isLoading: state.todos.isLoading
});

const mapDispatchToProps = dispatch => ({
  actionChange: (actionParam) => dispatch(TOGGLE_TODO(actionParam))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);