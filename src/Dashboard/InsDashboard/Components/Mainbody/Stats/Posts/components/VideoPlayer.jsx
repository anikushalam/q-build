import style from "./VideoPlayer.module.css";
import React from "react";
import ReactPlayer from "react-player";

function VideoPlayerr({ video }) {
  // const src = "/videos/landing-video.mp4";
  return (
    <div className={style.video}>
      <ReactPlayer controls url={video} />
    </div>
  );
}

export default VideoPlayerr;
