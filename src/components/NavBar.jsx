import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeAppTheme } from "../store/actions";

const Nav = styled.nav`
  background: ${(props) => props.theme.backgroundColor};
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7) !important;
`;
const NavRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  color: ${(props) => props.theme.textColor};
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

const Navleft = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  font-size: 1.2rem;
  text-decoration: none;
`;
export default function NavBar() {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(false);
  const handlSetTheme = () => {
    dispatch(changeAppTheme(theme));
  };
  return (
    <Nav>
      {" "}
      <Navleft>
        {" "}
        <h4>Zen-ToDoApp</h4>
      </Navleft>
      <NavRight>
        {" "}
        <h6>
          {" "}
          <FaMoon
            onClick={() => {
              setTheme(!theme);
              handlSetTheme();
            }}
            style={{ cursor: "pointer" }}
          />
          {theme === false ? ` Dark mode` : ` Light mode`}
        </h6>
      </NavRight>
    </Nav>
  );
}
