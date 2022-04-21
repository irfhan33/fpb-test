import React, { useState } from "react";
import styled from "styled-components";
import Button from "./../Button/Button";
import SearchBar from "./../SearchBar/SearchBar";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Sidebar = () => {
  const [offset, setOffset] = useState(false);

  const offsetToggle = () => {
    setOffset(!offset);
  };
  return (
    <>
      <Container>
        <Logo src="https://www.nicepng.com/png/full/67-674164_red-hawk-logo-png-red-football-team-logo.png" />

        <ButtonSellIt>
          <Button textColor="#f9eb5f" primary>
            Sell It!
          </Button>
        </ButtonSellIt>

        <SearchBar />
        <RightSection>
          <Button bordernone>Home</Button>
          <Button>Login</Button>
          <Button textColor="white" primary>
            Sign Up
          </Button>
          <ShoppingBagOutlinedIcon className="cart-icon" />
        </RightSection>
        <MenuIconWrapper onClick={offsetToggle}>
          <MenuOutlinedIcon className="menu-icon" />
        </MenuIconWrapper>
        <NavbarOffsetClose
          offset={offset ? 1 : 0}
          onClick={offsetToggle}
        ></NavbarOffsetClose>
        <NavbarOffset offset={offset ? 1 : 0}>
          <ul>
            <li>Home</li>
            <li>Sell It</li>
            <li>Cart</li>
            <li>
              <ButtonOffset>Login</ButtonOffset>
            </li>
            <li>
              <ButtonOffset primary>Sign Up</ButtonOffset>
            </li>
          </ul>
        </NavbarOffset>
      </Container>
    </>
  );
};

export default Sidebar;

const Container = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 6px -1px;
`;

const Logo = styled.img`
  margin-right: 8px;
  width: 40px;
  object-fit: contain;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

const RightSection = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  gap: 8px;

  .cart-icon {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuIconWrapper = styled.div`
  display: none;
  margin-left: auto;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ButtonSellIt = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarOffsetClose = styled.div`
  position: absolute;
  display: flex;
  background: transparent;
  top: 0;
  bottom: 0;
  left: ${({ offset }) => (offset ? "0px" : "120%")};
  right: 0;
`;

const NavbarOffset = styled.div`
  position: absolute;
  background: rgba(49, 53, 59, 0.98);
  top: 0;
  bottom: 0;
  left: ${({ offset }) => (offset ? "100px" : "120%")};
  right: 0;
  transition: all 350ms;
  z-index: 999;
  color: white;
  padding: 20px 20px;

  ul {
    list-style: none;
    padding: 0;
    gap: 20px;
    display: flex;
    flex-direction: column;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 800;
    width: 100%;
    white-space: nowrap;
  }

  li {
    cursor: pointer;
  }
`;

const ButtonOffset = styled.div`
  background: ${({ primary }) => (primary ? "white" : "transparent")};
  color: ${({ primary }) => (primary ? "black" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 36px;
  border: 1px solid white;
  white-space: nowrap;
  min-width: 100px;
`;
