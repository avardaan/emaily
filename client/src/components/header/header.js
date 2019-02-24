import React from 'react';

export class HeaderComponent extends React.Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      
      case false:
        return <li>
          <a href="/auth/google">Login with Google</a>
        </li>;
    
      default:
        return <li>
          <a href="/api/logout">Logout</a>
        </li>
    }
  }

  logoLink() {
    return this.props.auth ? '/surveys' : '/';
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