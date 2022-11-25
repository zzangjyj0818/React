import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "이인제",
        comment : "안녕하세요, 소플입니다",
    },
    {
        name : "정연재",
        comment : "리액트 개어렵네 ㄹㅇ",
    },
    {
        name : "이아란",
        comment : "정연재 ㅎㅇ",
    },
];

function CommentList(props) {
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}
export default CommentList;