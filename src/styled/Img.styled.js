import React from "react";
import styled from "styled-components";

const Img = styled.img`
  ${(props) => (props.width ? `width: ${props.width};` : "width: 100%;")};
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) =>
    props.borderRadius
      ? `border-radius: ${props.borderRadius};`
      : "border-radius: 12px;"}
`;

export default Img;
