import React, { Component } from 'react';
import { FETCH_USER_DATA } from '../modules/login/login.actions';
import { connect } from 'react-redux';

class LogInForm extends Component {
  state = {
    email: "",
    password: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actionFetchUserData(this.state.email, this.state.password);
    this.setState({ email: "", password: "" });
  }

  
  render() {
    return (
      <div>
        <h4>To check and manage your todos, please log in!</h4>
        <form onSubmit={this.handleSubmit}>
          <label>
            email: 
            <input type="text" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} placeholder="your email" />
          </label>
          <br />
          <label>
            password: 
            <input type="password" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} placeholder="your password" />
          </label>
          <br />
          <button type="submit">ok</button>
        </form>
        {this.props.user.isError
          ?
          <p>your email or password is incorrect, try again</p>
          :
          null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  actionFetchUserData: (email, password) => dispatch(FETCH_USER_DATA(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);