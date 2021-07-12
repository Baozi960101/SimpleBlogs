import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useLocation, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts";
import { SetAuthToken } from "../../utils";

const HeaderContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid gray;
  padding: 0px 32px;
  background: white;
`;

const Brand = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const NavbarList = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const Nav = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 100px;
  box-sizing: border-box;
  cursor: pointer;
  color: black;
  text-decoration: none;

  ${(props) => props.$move && `background:#FFBFFF;`}
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  ${NavbarList} {
    margin-left: 64px;
  }
`;

export default function Header() {
  let location = useLocation();

  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    SetAuthToken("");
    setUser(null);
    if (location.pathname !== "./") {
      history.push("/");
    }
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <Brand>我的第一個部落格</Brand>
        <NavbarList>
          <Nav $move={location.pathname === "/"} to="/">
            首頁
          </Nav>
          {user && (
            <Nav $move={location.pathname === "/new-post"} to="/new-post">
              發表文章
            </Nav>
          )}
        </NavbarList>
      </HeaderLeft>
      <NavbarList>
        {!user && (
          <Nav $move={location.pathname === "/login"} to="/login">
            登入
          </Nav>
        )}
        {user && <Nav onClick={handleLogout}>登出</Nav>}
      </NavbarList>
    </HeaderContainer>
  );
}
