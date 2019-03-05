import { connect } from 'react-redux';
import { Header } from './header';
import { paymentsActions } from '../../actions';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export const HeaderContainer = connect(mapStateToProps, paymentsActions)(Header);