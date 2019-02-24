import { connect } from 'react-redux';
import { HeaderComponent } from './header';

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export const Header = connect(mapStateToProps)(HeaderComponent);