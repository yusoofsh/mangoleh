import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ videoSrcURL, videoTitle }) => (
  <div className="video">
    <iframe
      width="560"
      height="315"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);

Video.propTypes = {
  videoSrcURL: PropTypes.string,
  videoTitle: PropTypes.string,
};

export default Video;
