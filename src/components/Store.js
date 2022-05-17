import React from "react";
import styled from "styled-components";
import Color from "../assets/Color";
import { RiSearchLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import Tabs from "../styled/Tabs.styled";
import Img from "../styled/Img.styled";
import { useNavigate } from "react-router-dom";
import StoreSecond from "./StoreSecond";
import nft7 from "../images/nft-7.jpg";

const tabs = [
  { id: 1, title: "Artworks", content: <Img src={nft7} /> },
  { id: 2, title: "Collections", content: <div>Collections</div> },
  { id: 3, title: "About", content: <div>About</div> },
];

const StorePageEl = styled.div`
  background-color: ${Color.Background};
  flex: 1;
  padding-top: 1rem;
  padding-bottom: 10vh;
  overflow: auto;
  overflow-x: hidden;
  min-height: min-content;
  scrollbar-width: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center
  padding: 0 1rem;
  font-size: 1.5rem;

`;

const Store = () => {
  const nav = useNavigate();
  return (
    <StorePageEl>
      <TopMenu>
        <FiArrowLeft
          onClick={() => {
            nav(-1);
          }}
          style={{ cursor: "pointer" }}
        />
        <span>
          <RiSearchLine style={{ marginRight: "1.5rem" }} />
          <BsThreeDots />
        </span>
      </TopMenu>
      <StoreSecond />
      <Tabs tabs={tabs} />
    </StorePageEl>
  );
};

export default Store;
