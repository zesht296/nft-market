import React from "react";
import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import Color from "../assets/Color";

const SearchBarEl = styled.div`
  background-color: ${Color.CardBackground};
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 12px;
  margin: 0 1rem 2rem 1rem;

  & > svg {
    font-size: 1.5rem;
    color: ${Color.Gray};
  }
`;

const InputEl = styled.input`
  font-size: 1rem;
  border: none;
  flex: 1;

  :focus {
    outline: none;
  }
`;

const SearchBar = () => {
  return (
    <SearchBarEl>
      <InputEl placeholder="Search on poly" />
      <RiSearchLine />
    </SearchBarEl>
  );
};

export default SearchBar;
