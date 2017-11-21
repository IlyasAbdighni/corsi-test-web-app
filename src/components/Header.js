import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {
        isAuthenticated: false,
        user_name: null,
        user_id: null
      }
    };
    this.renderContent = this.renderContent.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, props) => {
      console.log('Ilyas -> ', props);
      return { auth: props.auth };
    });
  }

  renderContent() {
    console.log('Header content -> ', this.props);
    if (this.state.auth.isAuthenticated) {
      return (
        <li>
          <Link
            className="waves-effect waves-light btn"
            onClick={this.props.logout}
            to="/"
          >
            Logout
          </Link>
          <span className="user-name">{this.state.auth.user_name}</span>
        </li>
      );
    } else {
      return (
        <li>
          <button
            className="waves-effect waves-light btn"
            onClick={this.props.login}
          >
            Login
          </button>
        </li>
      );
    }
  }

  render() {
    console.log('Header render -> ', this.props);
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">
              Corsi.it test web-app
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <a href="sass.html">Home</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  console.log('mapStateToProps -> ', auth);
  return { auth };
};

export default connect(mapStateToProps)(Header);
