import React from "react";
import styled from "styled-components";
import BidItem from "../styled/BidItem";

const MyBidListEl = styled.div`
  padding: 0 1rem;
  margin-top: 1rem;
`;

const Title = styled.h3`
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const MyBidList = () => {
  return (
    <MyBidListEl>
      <Title>Your bids</Title>
      <ItemList>
        <BidItem />
        <BidItem />
        <BidItem />
        <BidItem />
        <BidItem />
      </ItemList>
    </MyBidListEl>
  );
};

export default MyBidList;
