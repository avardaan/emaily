import React from 'react';
import { StripeCheckoutComponent } from './stripe-checkout';

export class HeaderComponent extends React.Component {

  renderContent() {
    switch (this.props.user) {
      case null:
        return;
      
      case false:
        return <li>
          <a href="/auth/google">Login with Google</a>
        </li>;
    
      default:
        return [
        <li key="0"><StripeCheckoutComponent handleToken={this.props.handleToken}/></li>,
        <li key="1" style={{ margin: '0 10px' }}>
          Credits: {this.props.user.credits}
        </li>,
        <li key="2"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  logoLink() {
    return this.props.user ? '/surveys' : '/';
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo" href={this.logoLink()}>
            Emaily
          </a>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}