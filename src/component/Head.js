import React from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toogleMenuHandler = () => {
    dispatch(toogleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toogleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>

      <div className="col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full p-2"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 rounded-r-full py-3 px-3 bg-gray-100">
          <IoIosSearch />
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
