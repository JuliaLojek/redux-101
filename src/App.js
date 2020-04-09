import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Counter from './components/Counter';
import CounterValue from './components/CounterValue';
import EnterValue from './components/EnterValue';
import EnterTodo from './components/EnterTodo';
import Home from './components/Home';
import { connect } from 'react-redux';
import { SET_FETCHED_TODOS } from './modules/todos/todos.actions';

class App extends Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => this.props.actionSetFetchedTodos(json))
  }

  render() {
    return (
      <BrowserRouter>
        <Menu />
        <h1>Welcome, Beautiful Human!</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/counterValue" component={CounterValue} />
          <Route path="/enterValue" component={EnterValue} />
          <Route path="/enterTodo" component={EnterTodo} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actionSetFetchedTodos: (actionParam) => dispatch(SET_FETCHED_TODOS(actionParam))
});

export default connect(null, mapDispatchToProps)(App);
