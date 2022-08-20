import React, { useMemo, useState } from "react";
import Logo from "../../assets/images/sakura-white-border.png";
import Button from "../button";
// import { headerMenu } from "../../configs";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";

const Header = ({ setHeaderRef }) => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  // const [isExpandMenu, setIsExpandMenu] = useState(false);
  // const [currentPath, setCurrentPath] = useState("/");

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
    <nav
      ref={(ref) => setHeaderRef(ref)}
      className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded"
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center z-10 p-1 mr-3">
          <img src={Logo} className="h-10" alt="Suky Learn to Fly" />
        </a>

        <div className="flex md:order-2 z-10">
          {(!blockchain.account || !blockchain.smartContract) && (
            <Button
              label={"Connect"}
              className={"mr-2 lg:mr-0"}
              action={onConnectWalletBtnClick}
            />
          )}
          {/*<button*/}
          {/*  type="button"*/}
          {/*  onClick={() => setIsExpandMenu(!isExpandMenu)}*/}
          {/*  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"*/}
          {/*>*/}
          {/*  <span className="sr-only">Open main menu</span>*/}
          {/*  <svg*/}
          {/*    className="w-6 h-6"*/}
          {/*    aria-hidden="true"*/}
          {/*    fill="currentColor"*/}
          {/*    viewBox="0 0 20 20"*/}
          {/*    xmlns="http://www.w3.org/2000/svg"*/}
          {/*  >*/}
          {/*    <path*/}
          {/*      fillRule="evenodd"*/}
          {/*      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"*/}
          {/*      clipRule="evenodd"*/}
          {/*    ></path>*/}
          {/*  </svg>*/}
          {/*</button>*/}
        </div>

        {/*<div*/}
        {/*  className={`${*/}
        {/*    !isExpandMenu ? "hidden" : "flex"*/}
        {/*  } justify-between items-center w-full bg-white mt-1 md:mt-0 md:bg-transparent md:flex md:w-auto md:order-1 z-10`}*/}
        {/*>*/}
        {/*  <ul className="flex flex-col p-4 mt-4 rounded-lg font-bold md:flex-row md:space-x-8 md:mt-0 md:text-xl md:border-0">*/}
        {/*    {headerMenu.map((menu, index) => (*/}
        {/*      <li key={index}>*/}
        {/*        <a*/}
        {/*          onClick={() => setCurrentPath(menu.path)}*/}
        {/*          href={menu.path}*/}
        {/*          className={`block py-2 pr-4 pl-3 hover:text-pink rounded md:bg-transparent md:p-0 ${*/}
        {/*            currentPath === menu.path*/}
        {/*              ? "text-pink"*/}
        {/*              : "text-black md:text-white"*/}
        {/*          }`}*/}
        {/*          aria-current="page"*/}
        {/*        >*/}
        {/*          {menu.label}*/}
        {/*        </a>*/}
        {/*      </li>*/}
        {/*    ))}*/}
        {/*  </ul>*/}
        {/*</div>*/}
      </div>
    </nav>
  );
};

export default Header;
