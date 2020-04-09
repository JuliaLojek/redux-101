import React, { Component } from 'react';
import { LOG_OUT } from '../modules/login/login.actions';
import { connect } from 'react-redux';

class LogInForm extends Component {

  handleLogOut = () => {
    this.props.actionLogOut();
  }

  
  render() {
    return (
      this.props.user.isLoggedIn
        ?
        <div>
          <p>{this.props.user.email}</p>
          <button onClick={this.handleLogOut}>log me out!</button>
        </div>
        :
        null
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  actionLogOut: () => dispatch(LOG_OUT())
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);