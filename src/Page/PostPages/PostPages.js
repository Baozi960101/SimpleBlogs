import React, { useState } from "react";
import { postButtomFetch } from "../../WebAPI";
import { useHistory } from "react-router-dom";

export default function PostPages() {
  const history = useHistory();

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const PostButtom = () => {
    postButtomFetch(postTitle, postBody).then((data) => {
      history.push("./");
    });
  };

  return (
    <>
      <div>標題</div>
      <input
        value={postTitle}
        onChange={(e) => {
          return setPostTitle(e.target.value);
        }}
      ></input>
      <div>內容</div>
      <input
        value={postBody}
        onChange={(e) => {
          return setPostBody(e.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <button onClick={PostButtom}>送出</button>
    </>
  );
}
