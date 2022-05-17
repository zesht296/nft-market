import React from "react";
import styled from "styled-components";
import { FiHome } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import Color from "../assets/Color";
import { useLocation, useNavigate } from "react-router-dom";

const NavMenuEl = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff03;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10%;
  backdrop-filter: blur(50px);
`;

const Link = styled.a`
  font-size: 1.7rem;
  ${(props) => (props.active ? `color:${Color.Primary};` : "")}
  position: relative;
  cursor: pointer;

  ::before {
    ${(props) => (!props.active ? `display: none` : "")}
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0.3rem;
    height: 0.3rem;
    background-color: ${Color.Primary};
    border-radius: 50%;
    margin-left: calc(50% - 0.15rem);
  }
`;

const NavMenu = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  return (
    <NavMenuEl>
      <Link active={pathname === "/"} onClick={() => nav("/")}>
        <FiHome />
      </Link>
      <Link
        active={pathname === "/store" || pathname === "/products"}
        onClick={() => nav("/store")}
      >
        <BiStore />
      </Link>
      <Link>
        <AiOutlineUser />
      </Link>
    </NavMenuEl>
  );
};

export default NavMenu;
