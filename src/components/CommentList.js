import React from "react";
import Comments from "./Comments";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => {
    return(
    <div key={index}>
      <Comments data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies}/>
      </div>
    </div>
    )
});
};

export default CommentList;
