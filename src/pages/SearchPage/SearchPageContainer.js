import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers, fetchDefaultMovie,movieById } from '../../../modules/users';
import SearchPage from './SearchPage';

const mapStateToProps = state => ({
  movies: state.movieById,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers,
  fetchDefaultMovie,
  movieById,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);