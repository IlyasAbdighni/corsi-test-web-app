import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <div>
        <iframe
          width="100%"
          height="auto"
          src={`https://www.youtube.com/embed/${this.props.vid}`}
          frameBorder="0"
          gesture="media"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Video;
