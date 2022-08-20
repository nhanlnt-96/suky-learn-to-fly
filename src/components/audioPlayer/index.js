import "./AudioPlayer.scss";
import React, { useState } from "react";
import AudioBackground from "../../assets/audios/background-audio.mp3";
import { useDispatch } from "react-redux";
import {
  startHover,
  stopHover,
} from "../../redux/animateHover/animateHoverActions";

const AudioPlayer = () => {
  const dispatch = useDispatch();
  const [audio] = useState(new Audio(AudioBackground));
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed right-3 bottom-3 z-50">
      <audio playsInline>
        <source src={AudioBackground} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button
        onMouseMove={() => dispatch(startHover())}
        onMouseLeave={() => dispatch(stopHover())}
        className="flex justify-center items-center text-white play-btn"
        onClick={toggle}
      >
        {playing ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="w-8 h-8"
            viewBox="0 0 16 16"
          >
            <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-8 h-8"
          >
            <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
