import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import HomePages from "../../Page/HomePages/HomePages";
import LoginPages from "../../Page/LoginPages/LoginPages";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const Root = styled.div`
  padding-top: 64px;
`;

export default function App() {
  return (
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
        </Switch>
      </Router>
    </Root>
  );
}
