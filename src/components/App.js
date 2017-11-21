import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentWillMount() {
    // this.setState((prevstate, props) => ({ sum: props.sum }));
  }

  login() {
    this.props.login();
  }

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header login={this.login} logout={this.logout} />
          <Switch>
            <Route path="/" component={Home} exact={true} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
