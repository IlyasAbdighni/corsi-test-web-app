import React, { Component } from 'react';

const Video = props => {
  return (
    <div>
      <iframe
        width={props.width}
        height={props.height}
        src={`https://www.youtube.com/embed/${props.vid}`}
        frameBorder="0"
        gesture="media"
        allowFullScreen
      />
      <div>{props.children}</div>
    </div>
  );
};

export default Video;
