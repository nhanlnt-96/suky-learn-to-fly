import React from "react";
import LoadingGif from "../../assets/gifs/loading.gif";

const Loading = () => {
  return (
    <div className="w-screen h-screen fixed flex justify-center items-center left-0 top-0 pointer-events-none z-50">
      <img src={LoadingGif} alt="loading-gif" />
    </div>
  );
};

export default Loading;
