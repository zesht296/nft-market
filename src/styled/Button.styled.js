import styled from "styled-components";
import Color from "../assets/Color";

const Button = styled.button`
  background-color: ${(props) =>
    props.backgroundColor
      ? `${props.backgroundColor}`
      : props.np
      ? `${Color.CardBackground}`
      : `${Color.Primary}`};
  color: ${(props) =>
    props.color ? `${props.color}` : props.np ? "" : `${Color.CardBackground}`};
  border-radius: 12px;
  border: none;
  cursor: pointer;
  border: ${(props) => (props.np ? `1px solid ${Color.GrayBorder}` : "")};
  box-shadow: ${(props) => (props.np ? "" : "0px 15px 23px #ff184e1f")};
  padding: 0.5rem ${(props) => (props.np ? "1rem" : "3rem")};
  font-size: 1.1rem;
  width: ${(props) => (props.fw ? "100%" : "")};
  ${(props) => (props.disabled ? `opacity: 0.7; cursor: default;` : "")}
  ${(props) =>
    props.flex
      ? "display: flex; justify-content: center; align-items: center; column-gap: 0.4rem;"
      : ""}
`;

export default Button;
