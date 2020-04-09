import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDoneTodos, selectUndoneTodos }from '../modules/todos/todos.selectors';
import LogInForm from './LogInForm';
 
class Home extends Component {

  render() {
    return (
      <div>
        {this.props.isLoggedIn
          ?
          this.props.isError
            ?
            <p>I am really sad, I couldn't load your todos :(</p>
            :
            this.props.isLoading
              ?
              <p>Give me a moment, I'm loading your todos...</p>
              :
              <div>
                <h3>Remember to:</h3>
                  {this.props.todosTodo.length > 0
                    ?
                    this.props.todosTodo.map(todo => (
                        <p key={todo.id}>
                          * {todo.title}
                        </p>
                    ))
                    :
                    <p>nothing to do :)</p>
                  }
                  <h3>This is already done:</h3>
                    {this.props.todosDone.length > 0
                      ?
                      this.props.todosDone.map(todo => (
                          <p key={todo.id} style={{textDecoration: "line-through"}}>
                            * {todo.title}
                          </p>
                      ))
                      :
                      <p>nothing is done yet :(</p>
                  }
              </div>
                :
                <LogInForm />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todosDone: selectDoneTodos(state.todos.todos),
  todosTodo: selectUndoneTodos(state.todos.todos),
  isError: state.todos.isError,
  isLoading: state.todos.isLoading,
  isLoggedIn: state.user.isLoggedIn
});


export default connect(mapStateToProps, null)(Home);