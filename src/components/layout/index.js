import React from "react";
import Banner from "../banner";
import AudioPlayer from "../audioPlayer";
// import { useSelector } from "react-redux";
// import BlossomGif from "../../assets/gifs/blossom-gif.webp";

const Layout = () => {
  // const isHoverOnButton = useSelector((state) => state.animateHover.isHover);

  return (
    <div className="w-screen min-h-screen relative md:overflow-hidden">
      {/*{isHoverOnButton && (*/}
      {/*  <div*/}
      {/*    className="absolute left-0 top-0 w-full h-full transition-all"*/}
      {/*    style={{ zIndex: 1 }}*/}
      {/*  >*/}
      {/*    <img*/}
      {/*      src={BlossomGif}*/}
      {/*      alt="blossom-gif"*/}
      {/*      className="w-full h-full object-cover"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*)}*/}
      <Banner />
      <AudioPlayer />
    </div>
  );
};

export default Layout;
