import React from "react";
import styled from "styled-components";
import Color from "../assets/Color";
import Img from "../styled/Img.styled";
import nft1 from "../images/nft-1.jpg";

const ProfileEl = styled.div`
  background-color: ${Color.Background};
  flex: 1;
  padding: 0 3rem;
  padding-bottom: 10vh;
  overflow: auto;
  overflow-x: hidden;
  min-height: min-content;
  padding-top: 2rem;
  scrollbar-width: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.span`
  font-size: 1.1rem;
  padding-bottom: 1rem;
`;

const SuperTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;

const WalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  margin-top: 3rem;
  background-color: ${Color.Primary};
  color: ${Color.Background};
  border-radius: 12px;
`;

const FirstSuperTitle = styled.span`
  font-size: 1.5rem;
`;

const FirstTitle = styled.span`
  font-size: 2rem;
  font-weight: 700;
  padding: 1.5rem 0;
  letter-spacing: 10px;
`;

const SecondSuperTitle = styled.span`
  font-size: 1.3rem;
`;

const SecondTitle = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1.2rem 0;
  letter-spacing: 4px;
`;

const PercentAverage = styled.span`
  background-color: #faebd7;
  margin-top: 1rem;
  padding: 1.2rem 1.5rem;
  font-size: 1.3rem;
  color: #00ff00;
  font-weight: 500;
  border-radius: 12px;
`;

const Profile = () => {
  return (
    <ProfileEl>
      <Container>
        <TitleInfoContainer>
          <Title>Welcome</Title>
          <SuperTitle>Arya Wijaya</SuperTitle>
        </TitleInfoContainer>
        <Img src={nft1} alt="nft-1" width="180px" borderRadius="30px" />
      </Container>
      <WalletContainer>
        <FirstSuperTitle>Balance</FirstSuperTitle>
        <FirstTitle>$450,933</FirstTitle>
        <SecondSuperTitle>Monthly profit</SecondSuperTitle>
        <Container>
          <SecondTitle>$12,484</SecondTitle>
          <PercentAverage>+10 %</PercentAverage>
        </Container>
      </WalletContainer>
    </ProfileEl>
  );
};

export default Profile;
