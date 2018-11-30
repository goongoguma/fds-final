import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class HeaderView extends Component {
  render() {
    // username이 있으면 로그인된거, 없으면 안된거
    const { username, logout, history } = this.props;
    return (
      <div>
        <Link to="/">쇼핑몰</Link>
        {username ? (
          <>
            <div>{username}</div>
            <button
              onClick={() => {
                logout();
                history.push('/');
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    );
  }
}
