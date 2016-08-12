import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from './Link';

const mapStateToProps = (state, ownProps) => {
  console.log('Triggering mapStateToProps: LinkContainer ...');

  return {
    filter: ownProps.filter,
    active: ownProps.filter === state.visibilityFilter
  };
};

export default connect(mapStateToProps, { setVisibilityFilter })(Link);
