import React from 'react';
import HeaderView from '../components/HeaderView';
import { withUser, UserConsumer } from '../contexts/UserContext';
import { Header } from 'semantic-ui-react';

// Provider와 연동이 되는 컴포넌트
export default function Header(props) {
  // userconsumer는 provider에서 유저 정보를 가져오고싶을때 사용
  return (
    <UserConsumer>
      {value => <HeaderView key={value.username} {...value} />}
    </UserConsumer>
  );
}
