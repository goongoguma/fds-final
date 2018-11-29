import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class LoginFormView extends Component {
  // 제어되는 컴포넌트 만들기
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      // success가 true일때만 redirect를 호출해서 게시물 목록 페이지로 보내기
      success: false,
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

  async handleLoginButtonClick() {
    const { onLogin } = this.props;
    const { username, password } = this.state;
    await onLogin(username, password);
    // 로그인이 성공적으로 끝났을 때
    this.setState({
      success: true,
    });
    // Redirect 컴포넌트를 렌더링 -> 주소표시줄의 상태가 바뀜으로써 상품목록 출력
  }

  render() {
    const { username, password, success } = this.state;
    if (success) {
      return <Redirect to="/" />;
    }

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
