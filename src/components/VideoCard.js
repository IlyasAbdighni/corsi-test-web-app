import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Video from './Video';

class VideoCard extends Component {
  render() {
    return (
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <Video vid={this.props.vid} />
            <span className="card-title">Card Title</span>
          </div>
          <div className="card-content">
            <p>{this.props.info.description}</p>
          </div>
          <div className="card-action">
            <Link to={`/video/${this.props.vid}`}>Watch</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoCard;
