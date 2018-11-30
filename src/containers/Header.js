import HeaderView from '../components/HeaderView';
import { withUser } from '../contexts/UserContext';
// 리액터 라우터에 내장되어있는 hoc
import { withRouter } from 'react-router-dom';

// Provider와 연동이 되는 컴포넌트
export default withRouter(withUser(HeaderView));
// withRouter를 통해 match, history, location prop들을 받게된다.
