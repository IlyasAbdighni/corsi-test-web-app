import React, { Component } from 'react';
import Video from './Video';

class VideoPage extends Component {
  componentWillMount() {
    console.log('Video page props -> ', this.props);
  }
  render() {
    return <div>Video page</div>;
  }
}

export default VideoPage;
