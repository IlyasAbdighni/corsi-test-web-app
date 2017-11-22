import React, { Component } from 'react';
import { connect } from 'react-redux';
import Video from './Video';
import Loading from './Loader';
import 'react-tippy/dist/tippy.css';
import Tooltip from './Tooltip';

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = { id: null, auth: null };
    this.renderContent = this.renderContent.bind(this);
  }
  componentDidMount() {
    this.setState((prevState, props) => {
      return { id: props.match.params.id, auth: this.props.auth };
    });
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.auth).length > 1) {
      this.setState((prevState, props) => {
        return { ...prevState, auth: nextProps.auth };
      });
    }
  }

  renderContent() {
    let disabled = 'disabled';
    if (this.props.auth.isAuthenticated) {
      disabled = '';
    }
    return (
      <div>
        <Video vid={this.props.match.params.id} height="600px" width="100%">
          <div className="like-container row">
            <span className="left like-container-with-tips">
              <button
                className={`waves-effect waves-light btn-flat like-btn ${disabled}`}
              >
                <i className="material-icons">thumb_down</i>
              </button>
              {this.props.auth.isAuthenticated || (
                <span className="login_tip--left tips">Login first</span>
              )}
            </span>
            <span className="right like-container-with-tips">
              <button
                className={`waves-effect waves-light btn-flat like-btn ${disabled}`}
              >
                <i className="material-icons">thumb_up</i>
              </button>
              {this.props.auth.isAuthenticated || (
                <span className="login_tip--right tips">Login first</span>
              )}
            </span>
          </div>
        </Video>
      </div>
    );
  }

  render() {
    console.log('video page props -> ', this.props);
    return <div className="center">{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(VideoPage);
