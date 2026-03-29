import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
    if(searchCache[searchQuery]) {
      setSuggestions(searchCache[searchQuery]);
    } else {
      getSearchSuggestions();
    }
  }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

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
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestions && (<div className="absolute bg-white py-2 px2 w-[34.5rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((s) => <li className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>)}
          </ul>
        </div>
        )}
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
