import React from "react";
import styled from "styled-components";
import Color from "../assets/Color";

const TabEl = styled.div`
  width: 100%;
`;

const TitlesEl = styled.span`
  display: flex;
  justify-content: space-around;
  margin: 0 1.5rem;
  padding: 0 1rem;
`;

const TitleEl = styled.span`
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  ${(props) => (props.active ? "" : `color: ${Color.Gray};`)}
  ${(props) => (props.active ? "font-weight: 600;" : "")}

  ::after {
    ${(props) => (!props.active ? `display: none` : "")}
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0.3rem;
    height: 0.3rem;
    background-color: ${Color.Primary};
    border-radius: 50%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;

const ContentEl = styled.div`
  margin: 0 0.5rem;
  margin-top: 1rem;
`;

const Tabs = ({ tabs }) => {
  const [currentTab, setCurrentTab] = React.useState(tabs[0]);
  return (
    <TabEl>
      <TitlesEl>
        {tabs.map((tab) => (
          <TitleEl
            key={tab.id}
            active={tab.id === currentTab.id}
            onClick={() => {
              if (tab.id !== currentTab.id) {
                setCurrentTab(tab);
              }
            }}
          >
            {tab.title}
          </TitleEl>
        ))}
      </TitlesEl>
      <ContentEl>{currentTab.content}</ContentEl>
    </TabEl>
  );
};

export default Tabs;
