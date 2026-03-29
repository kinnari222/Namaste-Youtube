import React from "react";

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;
