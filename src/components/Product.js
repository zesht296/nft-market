import React from "react";
import styled from "styled-components";
import Color from "../assets/Color";
import { BsThreeDots } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "../styled/Button.styled";
import { useNavigate } from "react-router-dom";
import ProductCard from "../styled/ProductCard.styled";

const ProductPageEl = styled.div`
  background-color: ${Color.Background};
  flex: 1;
  padding-bottom: 10vh;
  overflow: auto;
  overflow-x: hidden;
  min-height: min-content;
  padding-top: 1rem;
  scrollbar-width: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 1.5rem;
`;

const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

const HoldBid = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  background-color: ${Color.Primary};
  color: ${Color.CardBackground};
  border-radius: 12px;
  padding: 1rem;
  margin: 0 0.5rem;
  column-gap: 0.5rem;
  margin-top: 1rem;

  & > svg {
    font-size: 1.5rem;
  }
`;

const HoldBidText = styled.span`
  flex: 1;
`;

const Product = () => {
  const nav = useNavigate();
  return (
    <ProductPageEl>
      <TopMenu>
        <FiArrowLeft
          onClick={() => {
            nav(-1);
          }}
        />
        <Title>Artwork</Title>
        <BsThreeDots />
      </TopMenu>
      <ProductCard />
      <HoldBid>
        <AiOutlineShoppingCart />
        <HoldBidText>Confirm 4.0 ETH bid</HoldBidText>
        <Button backgroundColor={Color.CardBackground} color={Color.Primary}>
          Hold to bid
        </Button>
      </HoldBid>
    </ProductPageEl>
  );
};

export default Product;
