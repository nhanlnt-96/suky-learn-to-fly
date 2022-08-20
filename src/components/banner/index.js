import "./Banner.scss";
import React, { createRef, useEffect, useMemo, useRef, useState } from "react";
import VideoPlayer from "../videoPlayer";
import Header from "../header";
// link to download video below
// https://drive.google.com/file/d/1UHKs-pAWPdIlklmpQbegXTmYM-IUMooJ/view?usp=sharing. Video below is deleted to decrease storage to push to Github
// import BannerVideo from "../../assets/videos/cherry-blossom.mp4";
import BannerImage from "../../assets/images/logo-1-trans.png";
import Button from "../button";
import CountDown from "../countDown";
import MintBox from "../mintBox";
import { useDispatch, useSelector } from "react-redux";
import Social from "../social";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
// import Loading from "../loading";
import ToastNotification from "../toastNotification";
import {
  startHover,
  stopHover,
} from "../../redux/animateHover/animateHoverActions";
import BackgroundImage from "../../assets/images/background-image.jpeg";
import SubBackgroundGif from "../../assets/gifs/blossom-falling.gif";
import BlossomBranch from "../../assets/images/blossom-branch.png";

const Banner = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const isLoadedVideo = useSelector((state) => state.videoLoad.isVideoLoaded);
  const [headerRef, setHeaderRef] = useState(null);

  useEffect(() => {
    if (blockchain.account || blockchain.smartContract) {
      dispatch(startHover());
      setInterval(() => {
        dispatch(stopHover());
      }, 1000);
    }
  }, [blockchain]);

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const onConnectWalletBtnClick = (e) => {
    e.preventDefault();
    dispatch(connect());
    getData();
  };

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full absolute left-0 top-0">
        {/*<VideoPlayer videoUrl={BannerVideo} className="z-0" />*/}
        <div className="w-full h-full relative">
          <img
            src={BackgroundImage}
            alt="background-image"
            className="absolute w-full h-full left-0 top-0 object-cover"
          />
          <img
            src={SubBackgroundGif}
            alt="background-gif"
            className="absolute w-full h-full left-0 top-0 object-cover"
          />
          <img
            src={SubBackgroundGif}
            alt="background-gif"
            className="absolute w-full h-full left-0 top-0 object-cover"
          />
          <img
            src={BlossomBranch}
            alt="blossom-branch"
            className="absolute w-6/12 h-auto left-0 top-0  object-contain"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </div>

      {/*{isLoadedVideo ? (*/}
      {/*  <>*/}
      <Header setHeaderRef={setHeaderRef} />

      <div
        data-aos-duration="1000"
        data-aos="fade-down"
        className="container mx-auto flex justify-center items-center px-2 sm:px-4 pb-4 xl:px-0 relative z-10"
        style={{ minHeight: `calc(100vh - ${headerRef?.offsetHeight}px)` }}
      >
        <div className="w-full flex justify-center items-center flex-col md:flex-row md:space-x-4 m-auto">
          <div
            className={`w-full flex justify-center items-center mt-3 md:mt-0 md:w-6/12 z-10 order-2 md:order-1 ${
              !blockchain.account || !blockchain.smartContract
                ? "hidden md:flex"
                : ""
            }`}
          >
            {(blockchain.account || blockchain.smartContract) && (
              <div data-aos="zoom-in" className="w-full h-full">
                <MintBox />
              </div>
            )}
          </div>

          <div className="w-full flex flex-col justify-center items-center space-y-4 md:w-6/12 z-10 order-1 p-2 md:order-2 banner-right__side">
            <div className="banner-right__side-container">
              <div className="w-full relative banner-right__side-wrapper">
                <img
                  src={BannerImage}
                  alt="Suky Learn to Fly"
                  className="absolute w-full h-full left-0 top-0 object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl text-white font-bold text-center lg:text-4xl xl:text-6xl">
                Lorem ipsum{" "}
                <span className="font-semibold text-pink">dolor sit amet.</span>
              </h1>
              <h2 className="text-white text-center text-base lg:text-lg xl:text-2xl mt-3">
                Suki invites you to join her on a world of adventures. 5000
                unique characters inspired by fantasy and slice-of-life anime.
                Come with us on this journey?
              </h2>
            </div>

            <div className="w-full flex justify-center items-center">
              {(!blockchain.account || !blockchain.smartContract) && (
                <Button
                  label={"Mint your Suki(s)"}
                  action={onConnectWalletBtnClick}
                />
              )}
            </div>

            <div className="w-full">
              <CountDown target={"Aug 21, 2022 18:00:00"} />
            </div>

            <div className="w-full flex justify-center items-center">
              <Social />
            </div>
          </div>
        </div>
      </div>
      {/*  </>*/}
      {/*) : (*/}
      {/*  <Loading />*/}
      {/*)}*/}

      <ToastNotification
        toastFor={(blockchain.account || blockchain.smartContract) && "success"}
        errorMsg={
          blockchain.errorMsg ||
          ((blockchain.account || blockchain.smartContract) &&
            "Connect to wallet successful.")
        }
      />
    </div>
  );
};

export default Banner;
