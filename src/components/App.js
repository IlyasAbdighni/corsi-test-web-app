import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import VideoPage from './VideoPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
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
            <Route path="/video/:id" component={VideoPage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
