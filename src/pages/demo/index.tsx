import { connect } from 'react-redux';

import Container from './Container';
import { fetchUsers } from '../../reducer/root/actions';

const mapStateToProps = (state: any) => ({
  users: state.root.users,
});

const mapActionToProps = (dispatch: any) => ({
  loadUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapActionToProps)(Container);
