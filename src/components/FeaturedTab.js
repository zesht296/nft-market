import React from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Color from "../assets/Color";
import image1 from "../images/monkey-1.png";
import image2 from "../images/monkey-2.jpg";
import image3 from "../images/monkey-3.jpg";
import image4 from "../images/monkey-4.jpg";
import image5 from "../images/monkey-5.jpg";
import image6 from "../images/monkey-6.jpg";
import image7 from "../images/monkey-7.jpg";
import Img from "../styled/Img.styled";

const items = [
  { id: 1, title: "Monkey 1", subTitle: "monkey-fight", image: image1 },
  { id: 2, title: "Monkey 2", subTitle: "monkey-fight", image: image2 },
  { id: 3, title: "Monkey 3", subTitle: "monkey-fight", image: image3 },
  { id: 4, title: "Monkey 4", subTitle: "monkey-fight", image: image4 },
  { id: 5, title: "Monkey 5", subTitle: "monkey-fight", image: image5 },
  { id: 6, title: "Monkey 6", subTitle: "monkey-fight", image: image6 },
  { id: 7, title: "Monkey 7", subTitle: "monkey-fight", image: image7 },
];

const FeaturedTabEl = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  position: relative;
  height: fit-content;
`;

const ItemEl = styled.div`
  background-color: ${Color.CardBackground};
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const TitleEl = styled.span`
  font-size: 1.1rem;
  margin-top: 0.5rem;
`;

const SubTitleEl = styled.span`
  color: ${Color.Gray};
  font-size: 1rem;
`;

const ShowMoreBtn = styled.span`
  cursor: pointer;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  font-weight: 500;
  background-color: #ffffff52;
  padding: 1rem;
  border: 1px solid ${Color.GrayBorder};
  border-radius: 12px;
  backdrop-filter: blur(17px);
`;

const BottomFade = styled.span`
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10%;
  background-image: linear-gradient(#ffffff00, ${Color.Background});
`;

const FeaturedTab = () => {
  const nav = useNavigate();
  return (
    <FeaturedTabEl>
      {items.map((item) => (
        <ItemEl key={item.id} onClick={() => nav("/products")}>
          <Img src={item.image} />
          <TitleEl>{item.title}</TitleEl>
          <SubTitleEl>{item.subTitle}</SubTitleEl>
        </ItemEl>
      ))}
      <BottomFade />
      <ShowMoreBtn>
        <BiChevronDown /> Show more
      </ShowMoreBtn>
    </FeaturedTabEl>
  );
};

export default FeaturedTab;
