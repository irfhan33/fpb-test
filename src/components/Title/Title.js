import React from "react";
import styled from "styled-components";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarReview from "./StarReview";
const Title = () => {
  return (
    <Container>
      <MainTitle>
        2.4G Wireless Controller for Xbox one Console for PC for Android
        Smartphone Gamepad Joystick Game Controller
      </MainTitle>
      <StarReview rating="4" />
      <Price>€32</Price>
      <span>VAT Include</span>

      <ButtonWrapper>
        <Button>Buy</Button>
        <ButtonWishlist>
          <FavoriteBorderOutlinedIcon className="icon-wishlist" />
          <span>Add to Wishlist</span>
        </ButtonWishlist>
      </ButtonWrapper>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;
  span {
    color: rgba(49, 53, 59, 0.68);
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const MainTitle = styled.h3`
  font-weight: 700;
  font-size: 1.2857142857142858rem;
  line-height: 24px;
  color: rgba(49, 53, 59, 0.96);
  font-family: "Nunito Sans", "Open Sans", sans-serif;
  max-width: 50%;

  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const Price = styled.h1`
  font-size: 2rem;
  line-height: 34px;
  font-weight: 800;
  color: rgba(49, 53, 59, 0.96);
`;

const Button = styled.div`
  background-color: #ff5622;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  font-size: 20px;
  line-height: 34px;
  font-weight: 800;
  cursor: pointer;
  width: 100%;
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.div`
  margin-top: auto;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const ButtonWishlist = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .icon-wishlist {
    color: rgba(49, 53, 59, 0.68);
    margin-right: 10px;
  }
`;
