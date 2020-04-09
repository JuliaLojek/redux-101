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
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos
});

const mapDispatchToProps = dispatch => ({
  actionChange: (actionParam) => dispatch(TOGGLE_TODO(actionParam))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);