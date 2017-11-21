import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: null
    };
  }
  componentWillMount() {
    this.props.add(1, 2);
    // this.setState((prevstate, props) => ({ sum: props.sum }));
  }
  //   componentDidUpdate() {
  //     this.setState((prevstate, props) => ({ sum: props.sum }));
  //   }
  componentWillReceiveProps(prevProps, props) {
    this.setState((prevstate, props) => ({ sum: props.sum }));
  }
  render() {
    return (
      <div>
        <h1>{this.state.sum || 'Loading'}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ add }) => {
  let { sum } = add;
  return { sum };
};

export default connect(mapStateToProps, actions)(App);
