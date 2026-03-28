import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
        onClick={() => toggleMenuHandler()}
        className="h-8 cursor-pointer"
          alt="menu"
          src="https://tse3.mm.bing.net/th/id/OIP.Au0_7mpqZMtQeoRL4iFkqAHaHa?pid=Api&P=0&h=180"
        />
        <a href="/">
          <img
          className="h-8 mx-2"
            alt="youtube-logo"
            src="https://img.freepik.com/premium-vector/free-vector-youtube-icon-logo-social-media-logo_901408-454.jpg?w=2000"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">Search</button>
      </div>
      <div className="col-span-1">
        <img
        className="h-8"
          alt="user"
          src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png"
        />
      </div>
    </div>
  );
};

export default Head;
