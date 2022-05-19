import React from "react";
import styled from "styled-components";
import Color from "../assets/Color";
import Img from "../styled/Img.styled";
import bidImage from "../images/nft-1.jpg";

const BidItemEl = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  width: 100%;
  transition-property: background-color, border-radius;
  transition-duration: 0.5s;

  &:hover {
    background-color: #86868730;
    border-radius: 12px;
  }
`;

const BidData = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.5rem;
  margin-left: 1rem;
`;

const BidTitle = styled.span`
  font-weight: 500;
`;

const BidDescription = styled.span`
  color: ${Color.Gray};
`;

const BidAmount = styled.span`
  font-weight: 500;
`;

const BidItem = () => {
  return (
    <BidItemEl>
      <Img width="4rem" height="4rem" borderRadius="12px" src={bidImage} />
      <BidData>
        <BidTitle>Clay boyz 174</BidTitle>
        <BidDescription>Waldo</BidDescription>
      </BidData>
      <BidAmount>1.4 ETH</BidAmount>
    </BidItemEl>
  );
};

export default BidItem;
