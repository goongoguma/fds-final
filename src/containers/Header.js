import HeaderView from '../components/HeaderView';
import { withUser } from '../contexts/UserContext';

// Provider와 연동이 되는 컴포넌트
export default withUser(HeaderView);
