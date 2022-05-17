import React from "react";
import styled from "styled-components";
import Color from "../assets/Color";
import nft8 from "../images/nft-8.jpg";
import Button from "../styled/Button.styled";
import Img from "../styled/Img.styled";

const StoreSecondEl = styled.section`
  margin-top: 1rem;
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
`;

const SubTitle = styled.span`
  color: ${Color.Gray};
`;

const InfoContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 1rem;
`;

const ButtonContainer = styled.span`
  display: flex;
  column-gap: 1rem;
`;

const StoreSecond = () => {
  return (
    <StoreSecondEl>
      <Img src={nft8} width="20%" style={{ borderRadius: "50%" }} alt={nft8} />
      <InfoContainer>
        <Title>Cristals</Title>
        <SubTitle>Verified Artist</SubTitle>
      </InfoContainer>
      <ButtonContainer>
        <Button>Follow</Button>
        <Button np>Contact</Button>
      </ButtonContainer>
    </StoreSecondEl>
  );
};

export default StoreSecond;
