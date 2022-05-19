<<<<<<< HEAD
=======
import React from "react";
>>>>>>> dca186547d0675d77c7f1cefa0997536050e0f9d
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
