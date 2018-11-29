import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">쇼핑몰</Link>
        </div>
        {this.props.children}
        <div>저작권은 안재현에게 있슴돠</div>
      </div>
    );
  }
}
