import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadVideoError,
  loadVideoSuccess,
  startLoadVideo,
} from "../../redux/videoLoad/videoLoadActions";

const VideoPlayer = ({
  videoUrl,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadVideo());
  }, []);

  return (
    <div className={`w-full h-full relative ${className}`}>
      <video
        playsInline
        onLoadedData={() => {
          dispatch(loadVideoSuccess());
        }}
        onError={() => {
          dispatch(loadVideoError("load vide fail"));
        }}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        className="absolute w-full h-full left-0 top-0 object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
