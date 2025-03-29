import React from "react";
import ReactPlayer from "react-player";

const YouTubeEmbed = ({ videoUrl }) => {
  return (
    <div className="video-container">
      <ReactPlayer url={videoUrl} width="100%" height="315px" controls />
    </div>
  );
};

export default YouTubeEmbed;