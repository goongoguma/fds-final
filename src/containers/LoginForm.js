import React, { Component } from 'react';
import LoginFormView from '../components/LoginFormView';
import { withUser } from '../contexts/UserContext';

class LoginForm extends Component {
  render() {
    // usercontext에서 정보 내려줌
    const { login } = this.props;
    return <LoginFormView onLogin={login} />;
  }
}

export default withUser(LoginForm);
