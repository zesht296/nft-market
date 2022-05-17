import React from "react";
import styled from "styled-components";
import Color from "../assets/Color";
import FeaturedTab from "./FeaturedTab";
import MyBidList from "./MyBidList";
import SearchBar from "../styled/SearchBar.styled";
import Tabs from "../styled/Tabs.styled";

const HomeEl = styled.div`
  background-color: ${Color.Background};
  flex: 1;
  padding-bottom: 10vh;
  padding-top: 1rem;
  overflow: auto;
  overflow-x: hidden;
  min-height: min-content;
  scrollbar-width: 0;
  ::-webkit-scrollbar: {
    display: none;
  }
`;

const TitleEl = styled.h2`
  font-family: "DM Mono";
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
`;

const tabs = [
  { id: 1, title: "Featured", content: <FeaturedTab /> },
  { id: 2, title: "Collections", content: <div>Tab2</div> },
  { id: 3, title: "Artists", content: <div>Tab3</div> },
  { id: 4, title: "Tag", content: <div>Tab4</div> },
];

const Home = () => {
  return (
    <HomeEl>
      <TitleEl>polygon</TitleEl>
      <SearchBar />
      <Tabs tabs={tabs} />
      <MyBidList />
    </HomeEl>
  );
};

export default Home;
