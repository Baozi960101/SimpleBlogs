import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Login, getMe } from "../../WebAPI";
import { SetAuthToken } from "../../utils";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts";

export default function LoginPages() {
  const { setUser } = useContext(AuthContext);

  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const LoginBottom = () => {
    setError(null);
    Login(username, password).then((data) => {
      if (data.ok === 0) {
        setError(data.message);
      }
      SetAuthToken(data.token);
      getMe().then((response) => {
        if (response.ok !== 1) {
          SetAuthToken(null);
          return;
        }
        setUser(response.data);
        history.push("/");
      });
    });
  };

  return (
    <>
      <div>帳號</div>
      <input
        value={username}
        onChange={(e) => {
          return setUsername(e.target.value);
        }}
      ></input>
      <div>密碼</div>
      <input
        value={password}
        onChange={(e) => {
          return setPassword(e.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <button onClick={LoginBottom}>確認</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}
