import { connect } from 'react-redux';
import { Header } from './header';
import * as actions from '../../actions';

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export const HeaderContainer = connect(
  mapStateToProps,
  actions
)(Header);
