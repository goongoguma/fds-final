import React, { Component } from 'react';

export default class LoginFormView extends Component {
  // 제어되는 컴포넌트 만들기
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernamerChange(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLoginButtonClick() {
    const { onLogin } = this.props;
    const { username, password } = this.state;
    onLogin(username, password);
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <input
          type="text"
          value={username}
          name="username"
          onChange={e => this.handleUsernamerChange(e)}
        />
        <input
          type="password"
          value={password}
          name="password"
          onChange={e => this.handlePasswordChange(e)}
        />
        <button onClick={() => this.handleLoginButtonClick()}>로그인</button>
      </div>
    );
  }
}
