import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Container>
      <input type="text" placeholder="Search" />
      <IconContainer>
        <SearchIcon className="icon-search" />
      </IconContainer>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 0.7 1 auto;
  background: #f9eb5f;
  padding: 8px 8px;
  margin-left: 8px;

  input {
    height: 40px;
    flex: 1 1 auto;
    width: 100px;
    border-radius: 4px;
    border: none;
    border: 1px solid rgba(49, 53, 59, 0.96);
    padding: 0 12px;
    margin-right: 8px;
    background: transparent;

    &:focus {
      border: 2px solid rgba(49, 53, 59, 0.96);
      outline: none;
    }

    &::placeholder {
      font-size: 14px;
      font-weight: 700;
      font-family: "Nunito Sans", sans-serif;
      color: gray;
    }
  }
`;

const IconContainer = styled.div`
  background: rgba(49, 53, 59, 0.96);
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;

  .icon-search {
    color: #f9eb5f;
  }
`;
