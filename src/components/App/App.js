import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import HomePages from "../../Page/HomePages";
import LoginPages from "../../Page/LoginPages";
import PostPages from "../../Page/PostPages";
import {
  HashRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { AuthContext } from "../../contexts";
import { getMe } from "../../WebAPI";
import TextPost from "../../Page/Text";

function BlogPost() {
  const [text, setText] = useState([]);
  let { number } = useParams();

  useEffect(() => {
    fetch(`https://student-json-api.lidemy.me/posts?id=${number}`)
      .then((res) => res.json())
      .then((data) => {
        setText(data);
      });
  }, [number]);

  return (
    <>
      {text.map((data) => {
        return <TextPost key={data.id} data={data} />;
      })}
    </>
  );
}

const Root = styled.div`
  padding-top: 64px;
`;

const Loding = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: black;
  color: white;
  display: flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export default function App() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    getMe().then((response) => {
      if (response.ok) {
        setUser(response.data);
      }
      setIsLoading(true);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {!isLoading && <Loding>Loading....</Loding>}
      <Root>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePages />
            </Route>
            <Route path="/login">
              <LoginPages />
            </Route>
            <Route path="/post/:number">
              <BlogPost />
            </Route>
            <Route path="/new-post">
              <PostPages />
            </Route>
          </Switch>
        </Router>
      </Root>
    </AuthContext.Provider>
  );
}
