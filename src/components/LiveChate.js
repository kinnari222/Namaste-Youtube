import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { getRandomName, getRandomString } from "../utils/helper";

const LiveChate = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const garbageData = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomString(),
        }),
      );
    }, 2000);

    return () => {
      clearInterval(garbageData);
    };
  }, []);

  return (
    <>
      <div className="ml-2 p-2 w-full h-[500px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c) => (
            <ChatMessages name={c.name} messages={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "KK",
            message: liveMessage
          }));
        setLiveMessage("")
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChate;
