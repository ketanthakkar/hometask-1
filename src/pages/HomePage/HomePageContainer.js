import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers, fetchDefaultMovie } from '../../../modules/users';
import HomePage from './HomePage';

const mapStateToProps = state => ({
  users: state.users.items,
  movies: state.movies,
  loading: state.users.loading,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers,
  fetchDefaultMovie,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);