import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg w-48">
      <ul className="pt-3">
        <li className="flex">
          <GoHome /> Home
        </li>
        <li className="flex">
          <SiYoutubeshorts /> Shorts
        </li>
        <li className="flex">
          <MdOutlineSubscriptions /> Subscriptions
        </li>
      </ul>

      <hr />

      <h2 className="font-bold flex pt-3">You </h2>
      <ul>
        <li className="flex">
          <FaRegUserCircle /> Your Channel
        </li>
        <li className="flex">
          {" "}
          <GoHistory /> History
        </li>
        <li className="flex">
          {" "}
          <GoVideo /> Your Videos
        </li>
        <li className="flex text-lg">
          <MdOutlineWatchLater className="text-xl content-center" /> Watch Later
        </li>
      </ul>

      <hr />
      <h2 className="font-bold pt-3">Subscriptions</h2>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <hr />
      <h2 className="font-bold pt-3">Explore</h2>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
