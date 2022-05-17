import styled from "styled-components";
import Color from "../assets/Color";
import nft6 from "../images/nft-6.jpg";
import nft5 from "../images/nft-5.jpg";
import Button from "./Button.styled";
import Img from "./Img.styled";

const ProductCardEl = styled.div`
  background-color: #fafafa1a;
  box-shadow: 0px 15px 50px #0000001f;
  border-radius: 12px;
  margin: 1rem 0.5rem 0 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;

const Info = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  row-gap: 0.5rem;
  justify-content: center;
`;

const Name = styled.span``;

const Price = styled.span`
  font-weight: 500;
`;

const ButtonContainer = styled.span`
  flex: 1;
  display: flex;
  column-gap: 1rem;
`;

const Circle = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  display: inline-block;
  margin: auto 0;
  border-radius: 50%;
  border: 2px solid ${Color.CardBackground};
  background-color: #00ff00;
`;

export default function ProductCard() {
  return (
    <ProductCardEl>
      <Img src={nft6} />
      <InfoContainer>
        <Info>
          <Name>Elements</Name>
          <Price>3.54 ETH</Price>
        </Info>
        <Img width="15vw" src={nft5} />
      </InfoContainer>
      <ButtonContainer>
        <Button flex disabled fw np>
          <Circle />
          Disabled
        </Button>
        <Button fw np>
          Option
        </Button>
      </ButtonContainer>
    </ProductCardEl>
  );
}
