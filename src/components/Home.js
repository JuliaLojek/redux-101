import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDoneTodos, selectUndoneTodos }from '../modules/todos/todos.selectors';
 
class Home extends Component {

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todosDone: selectDoneTodos(state.todos.todos),
  todosTodo: selectUndoneTodos(state.todos.todos)
});


export default connect(mapStateToProps, null)(Home);